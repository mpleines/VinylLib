import React, { useContext, useState } from 'react';
import { Heading, H3 } from '../components/Fonts';
import { Form } from '../components/Form';
import { FormGroup } from '../components/FormGroup';
import { TextInput } from '../components/InputFields';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { login } from '../ApiService/ApiService';
import UserContext from '../contexts/UserContext';
import { Link } from '../components/Link';
import Margin from '../components/Margin';
import Banner from '../components/Banner';
import Center from '../components/Center';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState();

  const handleLogin = async () => {
    try {
      //if user exists, save the token in localstorage
      const token = await login(user);
      localStorage.setItem('token', token);

      // update the user in context
      setUser({ ...user, loggedIn: true });
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Banner>
        <SecondaryButton onClick={() => history.push('/register')}>
          Register
        </SecondaryButton>
      </Banner>
      <Center>
        <Margin margin={'3em'} />
        <Heading>Login</Heading>
        <Form
          actions={[<PrimaryButton onClick={handleLogin}>Login</PrimaryButton>]}
        >
          <FormGroup label="Username">
            <TextInput
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </FormGroup>
          <FormGroup label="Password">
            <TextInput
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </FormGroup>
        </Form>
        <Margin />
        <Link to="/register">Don´t have an Account? Register here</Link>
        {error && (
          <div style={{ color: 'red', marginTop: '16px' }}>{error}</div>
        )}
      </Center>
    </>
  );
};

export default Login;
