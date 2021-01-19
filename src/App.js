import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { io } from 'socket.io-client';
import RoomContainer from './components/RoomContainer/RoomContainer';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import styles from './App.css';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const s = io(process.env.SERVER_URL);
    setSocket(s);
    s.on('AUTH_RESULTS', (authResults) => {
      setUser(authResults.user);
    });
    return () => s.close();
  }, []);

  const handleLogout = () => {
    setUser({});
  };

  return (
    <>
      <div className={styles.root}>
        <Router>
          <Route path="/" exact component={() => <Home user={user} />} />
          <Route
            path="/room"
            exact
            component={() => (
              <RoomContainer
                handleLogout={handleLogout}
                user={user}
                socket={socket}
              />
            )}
          />
          <Route
            path="/chat"
            exact
            component={() => <Chat user={user} socket={socket} />}
          />
          <Route
            path="/signup"
            exact
            component={() => <Signup user={user} socket={socket} />}
          />
          <Route
            path="/login"
            exact
            component={() => <Login user={user} socket={socket} />}
          />
        </Router>
      </div>
    </>
  );
};

export default App;
