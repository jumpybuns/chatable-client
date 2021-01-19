import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoomListItem.css'; 

const RoomListItem = ({ room }) => {
  return (
    <Link className={styles.link} to={`/room/${room.id}`}>
      <li className={styles.container}>{room?.name}</li>
    </Link>
  );
};

export default RoomListItem;

