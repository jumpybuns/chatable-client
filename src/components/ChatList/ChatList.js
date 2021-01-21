import React, { useEffect, useRef } from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import styles from './ChatList.css';
import ChatForm from '../ChatForm/ChatForm';

export default function ChatList({ user, messages, roomId, socket }) {
  const roomsBeginningRef = useRef(null);

  // const scrollToBottom = () => {
  //   roomsBeginningRef?.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  return (
    <section>
      <div className={styles.container}>
        {/* <div ref={roomsBeginningRef} /> */}
        <ul className={styles.chatList}>
          {messages
            ? messages.map((message, index) => (
              <ChatMessage
                isLastMessage={index === (messages.length - 1)}
                key={message.id}
                user={user}
                message={message}
              />
            ))
            : null}
        </ul>
        <ChatForm socket={socket} user={user} roomId={roomId} />
      </div>
    </section>
  );
}
