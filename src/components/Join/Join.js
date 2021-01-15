import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Join.css';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

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
      return null;
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.header}>Join a room</h1>
        <input 
          className={styles.nameInput}
          placeholder="Name" 
          onChange={handleNameChange}/>
        <input 
          className={styles.roomInput}
          placeholder="Room" 
          onChange={handleRoomChange}/>
        <Link 
          to={`/chat?name=${name}&room=${room}`}
          onClick={handleLinkClick}>
          <button 
            className={styles.submitButton}
            type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
