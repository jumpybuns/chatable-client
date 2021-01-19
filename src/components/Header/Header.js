import React from 'react';
import styles from './Header.css';
import image from '../../images/logo.png';


function Header({ user }) {
  console.log(user, 'INSIDE HEADER')
  const handleLogout = () => {
    console.log('logout button clicked');
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={image} alt='chatable logo'/>
      {user.email ? (
        <div className={styles.userProfile}>
          <p className={styles.userEmail}>{user.email}</p>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : <div></div>}
    </div>
  );
}

export default Header;
