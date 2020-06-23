import {createContext} from 'react';

const UserContext = createContext(
  {
    user:{
      username: '',
      password: '',
      loggedIn: false
    },
    setUser: () => {}
  }
);

export default UserContext;