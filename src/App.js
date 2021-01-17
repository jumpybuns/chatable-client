import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join/Join';
import { io } from 'socket.io-client';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import styles from './App.css';

const App = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const s = io(process.env.SERVER_URL);
    setSocket(s);
  }, []);

  return (
    <div className={styles.root}>
      <Router>
        <Route
          path="/"
          exact
          component={Home}
        /> 
        <Route
          path="/join"
          exact
          component={() => <Join socket={socket} />}
        /> 
        <Route
          path="/chat"
          exact
          component={() => <Chat socket={socket} />}
        />
        <Route
          path="/signup"
          exact
          component={() => <Signup socket={socket} />}
        />
        <Route
          path="/login"
          exact
          component={() => <Login socket={socket} />}
        />
      </Router>
    </div>
  );
};

export default App;
