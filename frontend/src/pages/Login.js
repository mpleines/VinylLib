import React, { useContext } from 'react';
import { Page } from '../components/Page';
import { Heading } from '../components/Fonts';
import { deleteRecord } from '../ApiService/ApiService';
import { Form } from '../components/Form';
import { FormGroup } from '../components/FormGroup';
import { TextInput } from '../components/InputFields';
import { PrimaryButton } from '../components/Buttons';
import { login } from '../ApiService/ApiService';
import UserContext from '../contexts/UserContext';


const Login = () => {
  const {user, setUser} = useContext(UserContext);

  const handleLogin = async () => {
    // TODO: check if user exists

    //if user exists, save the token in localstorage
    const token = await login();
    localStorage.setItem('token', token);

    // update the user in context
    setUser({ loggedIn: true });
  }

  return (
    <Page>
      <Heading>Login</Heading>
      <Form actions={[
        <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
      ]}>
        <FormGroup label="Username">
          <TextInput></TextInput>
        </FormGroup>
        <FormGroup label="Password">
          <TextInput type="password"></TextInput>
        </FormGroup>
      </Form>
    </Page>
  )
}

export default Login;