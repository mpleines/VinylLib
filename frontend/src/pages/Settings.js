import React, { useContext } from "react";
import { Page } from "../components/Page";
import { Heading } from "../components/Fonts";
import { ErrorButton } from "../components/Buttons";
import UserContext from "../contexts/UserContext";

const Settings = () => {
  const {user, setUser} = useContext(UserContext);

  const logout = () => {
    setUser({});
    // delete bearer token
    localStorage.removeItem('token');
  }

  return (
    <Page>
      <Heading>Settings</Heading>
      <ErrorButton onClick={logout}>Logout</ErrorButton>
    </Page>
  );
};

export default Settings;
