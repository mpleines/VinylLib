import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import UserContext from './contexts/UserContext';
import usePersistentState from './hooks/usePersistentState';
import Register from './pages/Register';
import Landing from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import RecordList from './pages/Recordlist';
import AddRecord from './pages/AddRecord';
import RecordDetails from './pages/RecordDetails';
import Settings from './pages/Settings';
import Record from './components/Record';

function App() {
  const [user, setUser] = usePersistentState(
    {},
    {
      username: '',
      loggedIn: false,
    },
  );
  const userValue = { user, setUser };

  return (
    <UserContext.Provider value={userValue}>
      <div className="App">
        <Router>
          <Route
            exact
            path="/"
            render={() =>
              user.loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to="/landing" />
              )
            }
          />
          <Route exact path="/landing">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* routes behind login */}
          {user.loggedIn && (
            <>
              <Navigation />
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/all-records">
                <RecordList />
              </Route>
              <Route path="/record-details" component={RecordDetails} />
              <Route path="/add-record">
                <AddRecord />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </>
          )}
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
