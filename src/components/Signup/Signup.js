import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from './Signup.schema';
import styles from './Signup.css';

export default function Signup({ socket }) {
  console.log('socket', socket);

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: 'david@david.com',
      password: 'bananagram1',
      name: 'david',
    },
  });

  const showNameError = Boolean(errors.name);
  const showEmailError = Boolean(errors.email);
  const showPasswordError = Boolean(errors.password);
  const showErrorOrEmptyString = (shouldShow, message) =>
    shouldShow ? message : '';

  const history = useHistory();

  const handleSignup = (formValues) => {
    console.log(formValues);
    socket.emit('SIGN_UP', formValues);
    history.push('/join');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(handleSignup)}>
      <h1 className={styles.heading}>Sign Up</h1>
      <input
        className={styles['form-input']}
        name="name"
        ref={register}
        placeholder="User Name"
      />
      <p className={styles.errorsMessage}>
        {showErrorOrEmptyString(showNameError, errors.name?.message)}
      </p>
      <input
        className={styles['form-input']}
        name="email"
        ref={register}
        placeholder="Email"
      />
      <p className={styles.errorsMessage}>
        {showErrorOrEmptyString(showEmailError, errors.email?.message)}
      </p>
      <input
        className={styles['form-input']}
        name="password"
        ref={register}
        type="password"
        placeholder="Password"
      />
      <p className={styles.errorsMessage}>
        {showErrorOrEmptyString(showPasswordError, errors.password?.message)}
      </p>
      <button className={styles.submitButton} type="submit">
        Sign Up
      </button>
    </form>
  );
}
