import React, { useContext, useState } from 'react';
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
  const [error, setError] = useState();

  const handleLogin = async () => {
    try {
      //if user exists, save the token in localstorage
      const token = await login(user);
      localStorage.setItem('token', token);
  
      // update the user in context
      setUser({ loggedIn: true });
    } catch(err) {
      setError(err.message);
    }
  }

  return (
    <Page>
      <Heading>Login</Heading>
      <Form actions={[
        <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
      ]}>
        <FormGroup label="Username">
          <TextInput value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}/>
        </FormGroup>
        <FormGroup label="Password">
          <TextInput type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
        </FormGroup>
      </Form>
      {error && <div style={{color: 'red', marginTop: '16px'}}>{error}</div>}
    </Page>
  )
}

export default Login;