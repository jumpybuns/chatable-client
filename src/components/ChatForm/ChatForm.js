import React, { useState } from 'react';
import styles from './ChatForm.css';

export default function ChatForm({ user, socket, roomId }) {
  const [inputValue, setInput] = useState('');

  const handleInputChange = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('CHAT_MESSAGE', { message: inputValue, user, roomId });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.chatForm}>
      <input
        onChange={handleInputChange}
        className={styles.input}
        type="text"
        placeholder="Message"
        value={inputValue}
      />
      <button
        disabled={!roomId}
        onClick={handleSubmit}
        className={styles.button}
      >
        Send
      </button>
    </form>
  );
}
