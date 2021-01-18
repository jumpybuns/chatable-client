import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { roomFormSchema } from './RoomForm.schema';
import styles from './RoomForm.css';

export default function RoomForm({ user, socket }) {
  const userId = user?.id;
  
  const { register, handleSubmit, reset, getValues, errors } = useForm({
    resolver: yupResolver(roomFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  useEffect(() => {
    reset({ ...getValues(), userId });
  }, [userId]);
  
  const handleRoomForm = (formValues) => {
    socket.emit('CREATE_CHATROOM', formValues);
  };

  const showNameError = Boolean(errors.name);
  const showErrorOrEmptyString = (shouldShow, message) =>
    shouldShow ? message : '';

  return (
    <form className={styles.container} onSubmit={handleSubmit(handleRoomForm)}>
      <h1 className={styles.heading}>Create Room</h1>
      <input hidden ref={register} name="userId" />
      <input
        name="name"
        className={styles.formInput}
        placeholder="Name"
        ref={register}
      />
      <p className={styles.errorsMessage}>
        {showErrorOrEmptyString(showNameError, errors.name?.message)}
      </p>
      <button type="submit" className={styles.submitButton}>
        Create
      </button>
    </form>
  );
}
