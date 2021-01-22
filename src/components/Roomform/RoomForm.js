import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { roomFormSchema } from "./RoomForm.schema";
import styles from "./RoomForm.css";
import PropTypes from "prop-types";

function RoomForm({ user, socket }) {
  const userId = user?.id;

  const { register, handleSubmit, reset, getValues } = useForm({
    resolver: yupResolver(roomFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    reset({ ...getValues(), userId });
  }, [userId]);

  const handleRoomForm = (formValues) => {
    socket.emit("CREATE_CHATROOM", formValues);
    reset();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(handleRoomForm)}>
      <input hidden ref={register} name="userId" />
      <div className={styles.inputWrapper}>
        <input
          name="name"
          className={styles.formInput}
          placeholder="Create A Room"
          ref={register}
        />
        <button type="submit" className={styles.submitButton}>
          Create
        </button>
      </div>
    </form>
  );
}

RoomForm.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
  }),
};

export default RoomForm;
