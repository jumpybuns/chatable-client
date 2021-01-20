import React, { useEffect } from 'react';
import { useParams } from 'react-router';

export default function Chat({ socket }) {

  const {
    id 
  } = useParams();
  
  useEffect(() => {
    if(socket) {
      socket.emit('JOIN_ROOMS', id);
    }
  });

  return (
    <div>
      Chat
    </div>
  );
}
