import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Home.css';
import image from '../../images/logo.png';

export default function Home() {

  const history = useHistory();

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Chatable</h1>
      <button 
        className={styles.button} 
        onClick={() => history.push('/signup')}>
        Sign Up
      </button>
      <button 
        className={styles.button} 
        onClick={() => history.push('/login')}>
        Login
      </button>
    </section>
  );
}
