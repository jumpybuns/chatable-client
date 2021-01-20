import React, { useEffect } from 'react';
import { useParams } from 'react-router';

export default function Chat({ socket, user }) {
  console.log('inside chat function');
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
      SOME TEXT
    </div>
  );
}
