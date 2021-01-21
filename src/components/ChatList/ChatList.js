import React from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import styles from './ChatList.css';

export default function ChatList({ user, messages }) {
  return (
    <section className={styles.container}>
      <ul className={styles.chatList}>
        {messages
          ? messages.map((message, index) => (
            <ChatMessage
              isLastMessage={index === messages.length - 1}
              key={message.id}
              user={user}
              message={message}
            />
          ))
          : null}
      </ul>
    </section>
  );
}
