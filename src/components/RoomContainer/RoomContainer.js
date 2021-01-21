import React, { useEffect, useState } from 'react';
import RoomForm from '../Roomform/RoomForm';
import RoomList from '../RoomList/RoomList';
import Chat from '../Chat/Chat';
import styles from './RoomContainer.css';
import PropTypes from 'prop-types';

function RoomContainer(
  { user, socket }
) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if(socket) {
      socket.emit('GET_ROOMS', user?.id);
      socket.on('ROOMS_RESULTS', (data) => {
        setRooms(data.rooms);
      });
      return () => socket.off('ROOMS_RESULTS');
    }
  }, []);

  return (
    <main className={styles.container}>
      <nav className={styles.rooms}>
        <RoomForm user={user} socket={socket} />
        <RoomList
          socket={socket}
          rooms={rooms}
        />
      </nav>
      <section className={styles.chat}>
        <Chat user={user} socket={socket} />
      </section>
    </main>
  );
}

RoomContainer.propTypes = {
  user: PropTypes.object,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired
  }),
  handleLogout: PropTypes.func.isRequired
};

export default RoomContainer;
