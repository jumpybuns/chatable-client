import React from 'react';
import RoomListItem from '../RoomListItem/RoomListItem';

const RoomList = ({ rooms }) => {
  console.log(rooms, 'Room List');

  return (
    <ul>
      {rooms
        ? rooms.map((room) => <RoomListItem key={room.id} room={room} />)
        : null}
    </ul>
  );
};

export default RoomList;
