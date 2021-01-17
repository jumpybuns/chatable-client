import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Join.css';

export default function Join({ socket }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  if(socket) { 
    socket.on('AUTH_RESULTS', (data) => console.log('data', data));    
  }

  const history = useHistory();

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleRoomChange = ({ target }) => {
    setRoom(target.value);
  };

  const handleLinkClick = (e) => {
    if(!name || !room) {
      e.preventDefault();
    } else {
      history.push(`/chat?name=${name}&room=${room}`);
      return null;
    }
  };

  return (
    <form className={styles.container}>
      <h1 className={styles.heading}>Join a room</h1>
      <input
        className={styles['form-input']}
        placeholder="Name"
        onChange={handleNameChange}
      />
      <input
        className={styles['form-input']}
        placeholder="Room"
        onChange={handleRoomChange}
      />
      <button
        className={styles.submitButton}
        onClick={handleLinkClick}
        type="submit"
      >
        Sign In
      </button>
      {/* </Link> */}
    </form>
  );
}
