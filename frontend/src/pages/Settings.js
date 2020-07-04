import React, { useContext } from "react";
import { Page } from "../components/Page";
import { Heading } from "../components/Fonts";
import { ErrorButton } from "../components/Buttons";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router-dom";

const Settings = () => {
  const {user, setUser} = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    setUser({});
    // delete bearer token
    localStorage.removeItem('token');
    // navigate back to home
    history.push('/');
  }

  return (
    <Page>
      <Heading>Settings</Heading>
      <ErrorButton onClick={logout}>Logout</ErrorButton>
    </Page>
  );
};

export default Settings;
