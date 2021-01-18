import React, { useEffect, useState } from 'react';
import RoomForm from '../Roomform/RoomForm';
import RoomList from '../RoomList/RoomList';

export default function RoomContainer({ user, socket }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket.emit('GET_ROOMS', user?.id);
    socket.on('ROOMS_RESULTS', (data) => {
      setRooms(data.rooms);
    });
  }, []);

  console.log('ROOMS CONT', rooms);

  return (
    <>
      <RoomList rooms={rooms}/>
      <RoomForm user={user} socket={socket}/>
    </>
  );
}
