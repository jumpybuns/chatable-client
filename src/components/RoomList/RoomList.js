import React, { useEffect, useRef } from 'react';
import RoomListItem from '../RoomListItem/RoomListItem';
import styles from './RoomList.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

const useStyles = makeStyles({
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    flexGrow: 1,
    width: '100%',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column-reverse',
}});

const RoomList = ({ rooms, socket }) => {
  const roomsBeginningRef = useRef(null);
  const classes = useStyles();

  const scrollToTop = () => {
    roomsBeginningRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, [rooms]);

  return (
    <List component='ul' className={classes.list}>
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
    </List>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array,
  socket: PropTypes.shape({
    emit: PropTypes.func
  })
};

export default RoomList;
