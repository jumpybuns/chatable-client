import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import PropTypes from 'prop-types';

import styles from './Chat.css';

let socket;

function Chat({ location }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room });    
  }, [ENDPOINT, location.search]);

  return (
    <h1>
      Chat
    </h1>
  );
}

Chat.propTypes = { 
  location: PropTypes.object.isRequired
};

export default Chat;
