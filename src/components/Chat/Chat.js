import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import styles from './Chat.css';

//socket.inRoom.id

export default function Chat({ socket, user }) {
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  console.log(messages, 'messages');

  useEffect(() => {
    if(socket) {
      socket.emit('JOIN_ROOM', { id, user });

      socket.on('JOIN_RESULTS', (payload) => {
        setMessages(payload.messages);
      });

      socket.on('BROADCAST_JOIN', (payload) => {
        console.log(payload, 'everyones message');
      });

      socket.on('MESSAGE_RESULTS', (payload) => {
        console.log(payload);
        setMessages(messages => [...messages, payload]);
      });
    }
  }, []);

  return (
    <>
      <Header user={user} />
      <section className={styles.container}>
        <ChatList
          roomId={id}
          user={user}
          messages={messages}
          socket={socket}
        />
      </section>
    </>
  );
}
