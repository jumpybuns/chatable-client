import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join/Join';
import { io } from 'socket.io-client';
import Chat from './components/Chat/Chat';
import Signup from './components/Signup/Signup';
import styles from './App.css';

const SocketContext = React.createContext();

// typeof(Join(socket)) === 'function';
// typeof <Join /> === 'object';

const App = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const s = io(process.env.SERVER_URL);
    setSocket(s);
  }, []);

  return (
    <div className={styles.root}>
      <SocketContext.Provider value={socket}>
        <Router>
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
        </Router>
      </SocketContext.Provider>
    </div>
  );
};


export default App;
