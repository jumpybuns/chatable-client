import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RoomListItem.css';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const RoomListItem = ({ room }) => {
  const CustomLink = (props) => <Link to={`/room/?id=${room.id}`} {...props} />;

  return (
    <ListItem
      primary={room?.name}
      component={CustomLink}
      button
    >
      <ListItemText primary={room?.name} />
    </ListItem>
  );
};

RoomListItem.propTypes = {
  room: PropTypes.object,
};

export default RoomListItem;
