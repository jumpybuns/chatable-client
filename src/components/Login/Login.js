import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './Login.schema';
import styles from './Login.css';
import PropTypes from 'prop-types'; 
import Header from '../Header/Header';

function Login({ socket, user }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const history = useHistory();

  const handleLogin = (formValues) => {
    socket.emit('LOGIN', formValues);
    history.push('/room');p
  };

  const showEmailError = Boolean(errors.email);
  const showPasswordError = Boolean(errors.password);
  const showErrorOrEmptyString = (shouldShow, message) =>
    shouldShow ? message : '';

  return (
    <>
      <Header user={user}/>
      <form className={styles.container} onSubmit={handleSubmit(handleLogin)}>
        <h1 className={styles.heading}>Login</h1>
        <input
          className={styles.formInput}
          name="email"
          placeholder="email"
          ref={register}
        />
        <p className={styles.errorsMessage}>
          {showErrorOrEmptyString(showEmailError, errors.email?.message)}
        </p>
        <input
          className={styles.formInput}
          name="password"
          placeholder="password"
          ref={register}
          type="password"
        />
        <p className={styles.errorsMessage}>
          {showErrorOrEmptyString(showPasswordError, errors.password?.message)}
        </p>
        <button className={styles.submitButton} type="submit">
          Login
        </button>
      </form>
    </>
  );
}

Login.propTypes = {
  user: PropTypes.shape({}),
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
  }),
};

export default Login;
