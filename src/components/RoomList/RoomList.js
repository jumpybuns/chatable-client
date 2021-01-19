import React, { useEffect, useRef } from 'react';
import RoomListItem from '../RoomListItem/RoomListItem';
import styles from './RoomList.css';

const RoomList = ({ rooms }) => {

  const roomsBeginningRef = useRef(null);

  const scrollToTop = () => {
    roomsBeginningRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, [rooms]);

  return (
    <ul className={styles.roomsList}>
      {rooms
        ? rooms.map((room) => <RoomListItem key={room.id} room={room} />)
        : null} 
      <div ref={roomsBeginningRef}/>
    </ul>
  );
};

export default RoomList;
