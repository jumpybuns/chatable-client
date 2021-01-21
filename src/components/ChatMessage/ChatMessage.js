import React, { useEffect, useRef } from 'react';
import styles from './ChatMessage.css';

export default function ChatMessage({ message, user, isLastMessage }) {
  const messageRef = useRef(null);

  const scrollToLastMessage = () => {
    if (isLastMessage) {
      messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isUserMessage = message.userId === user.id;
  const sendOrRecieve = isUserMessage ? 'Send' : 'Recieve';

  useEffect(() => {
    scrollToLastMessage();
  }, []);

  return (
    <li className={styles[`text${sendOrRecieve}`]} ref={messageRef}>
      <p className={styles.message}>{message.messageText}</p>
    </li>
  );
}
