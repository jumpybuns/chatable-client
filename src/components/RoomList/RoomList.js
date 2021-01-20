import React, { useEffect, useRef } from 'react';
import RoomListItem from '../RoomListItem/RoomListItem';
import styles from './RoomList.css';

const RoomList = ({ rooms, socket }) => {
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
        ? rooms.map((room) => (
          <RoomListItem
            socket={socket}
            key={room.id}
            room={room}
          />
        ))
        : null}
      <div ref={roomsBeginningRef} />
    </ul>
  );
};

export default RoomList;
