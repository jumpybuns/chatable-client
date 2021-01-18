import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoomListItem';

const RoomListItem = ({ room }) => {
  return (
    <li className={styles.container}>
      <Link className={styles.link} to={`/room/${room.id}`}>
        {room?.name}
      </Link>
    </li>
  );
};

export default RoomListItem;
