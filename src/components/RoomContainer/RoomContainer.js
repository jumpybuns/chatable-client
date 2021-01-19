import React, { useEffect, useState } from 'react';
import RoomForm from '../Roomform/RoomForm';
import RoomList from '../RoomList/RoomList';
import styles from './RoomContainer.css';
import Header from '../Header/Header';

export default function RoomContainer({ user, socket, handleLogout }) {
  const [rooms, setRooms] = useState([]);

  const roomData = [
    { name: 'super loooooong name', id: '1' },
    { name: 'room two', id: '2' },
    { name: 'room three', id: '3' },
    { name: 'super loooooong name', id: '4' },
    { name: 'room five', id: '5' },
    { name: 'room six', id: '6' },
    { name: 'super seven', id: '7' },
    { name: 'room eight', id: '8' },
    { name: 'room nine', id: '9' },
  ];

  useEffect(() => {
    if (socket) {
      socket.emit('GET_ROOMS', user?.id);
      socket.on('ROOMS_RESULTS', (data) => {
        setRooms(data.rooms);
      });
    }
  }, []);

  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <section className={styles.container}>
        <div className={styles.roomListContainer}>
          <RoomList rooms={roomData} />
        </div>
        <div className={styles.roomFormContainer}>
          <RoomForm user={user} socket={socket} />
        </div>
      </section>
    </>
  );
}
