import React from 'react';
import RoomListItem from '../RoomListItem/RoomListItem';
import styles from './RoomList.css';

const RoomList = ({ rooms }) => {
  console.log(rooms, 'Room List');

  return (
    <ul className={styles.roomsList}>
      {rooms
        ? rooms.map((room) => <RoomListItem key={room.id} room={room} />)
        : null} 
    </ul>
  );
};

export default RoomList;
