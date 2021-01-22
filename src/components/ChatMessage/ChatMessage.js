import React, { useEffect, useRef } from 'react';
import styles from './ChatMessage.css';
import ReactEmoji from 'react-emoji';

export default function ChatMessage({ message, user, isLastMessage }) {
  console.log(message, 'message');
  const messageRef = useRef(null);

  const scrollToLastMessage = () => {
    if (isLastMessage) {
      messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isUserMessage = message.userId === user.id;
  const isNotUserMessage = message.userId !== user.id;
  const sendOrRecieve = isUserMessage ? 'Send' : 'Recieve';

  useEffect(() => {
    scrollToLastMessage();
  }, []);

  return (
    <>
      <li className={styles[`text${sendOrRecieve}`]} ref={messageRef}>
        <p className={styles.message}>
          {ReactEmoji.emojify(message.messageText)}
        </p>
      </li>
      {isUserMessage ? (
        <p className={styles.userName}>You</p>
      ) : (
        <div></div>
      )}

      {isNotUserMessage ? (
        <p className={styles.guestName}>{message.userName}</p>
      ) : (
        <div></div>
      )}
    </>
  );
}
