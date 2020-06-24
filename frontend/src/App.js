import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import UserContext from './contexts/UserContext';
import usePersistentState from "./hooks/usePersistentState";

function App() {
  const [user, setUser] = usePersistentState({}, {
    username: '',
    password: '',
    loggedIn: false
  });
  const userValue = { user, setUser };

  return (
    <UserContext.Provider value={userValue}>
      <div className="App">
        {!user.loggedIn && <Login />}
        {user.loggedIn &&
          <Router>
            <Navigation />
            <Main />
          </Router>
        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
