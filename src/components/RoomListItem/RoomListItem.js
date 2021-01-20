import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoomListItem.css';
import PropTypes from 'prop-types';

const RoomListItem = ({ room }) => {

  return (
    <Link
      className={styles.link}
      to={`/room/${room.id}`}
    >
      <li className={styles.container}>{room?.name}</li>
    </Link>
  );
};

RoomListItem.propTypes = {
  room: PropTypes.object
};

export default RoomListItem;
