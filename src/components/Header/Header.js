import React from 'react';
import styles from './Header.css';
import image from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Header({ user, handleLogout }) {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={image} alt='chatable logo' />
      {user.email ? (
        <div className={styles.userProfile}>
          <p className={styles.userEmail}>{user.email}</p>

          <Link to={'/'}>
            <button className={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Header;
