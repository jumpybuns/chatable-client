import React, { useEffect, useState } from 'react';
import RoomForm from '../Roomform/RoomForm';
import RoomList from '../RoomList/RoomList';
import styles from './RoomContainer.css';
import Header from '../Header/Header';

export default function RoomContainer(
  { user, socket, handleLogout }
) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if(socket) {
      socket.emit('GET_ROOMS', user?.id);
      socket.on('ROOMS_RESULTS', (data) => {
        //array of rooms []
        setRooms(data.rooms);
      });
      return () => socket.off('ROOMS_RESULTS');
    }
  }, []);

  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <section className={styles.container}>
        <div className={styles.roomListContainer}>
          <RoomList
            socket={socket}
            rooms={rooms}
          />
        </div>
        <div className={styles.roomFormContainer}>
          <RoomForm user={user} socket={socket} />
        </div>
      </section>
    </>
  );
}
