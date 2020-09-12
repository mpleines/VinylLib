import React, { useState } from 'react';
import { Page } from '../components/Page';
import { Heading, H3 } from '../components/Fonts';
import { Form } from '../components/Form';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { FormGroup } from '../components/FormGroup';
import { TextInput } from '../components/InputFields';
import { Link } from '../components/Link';
import Margin from '../components/Margin';
import { register } from '../ApiService/ApiService';
import Banner from '../components/Banner';
import { useHistory } from 'react-router-dom';
import Center from '../components/Center';
import { toasty } from '../components/Toast';

const Register = () => {
  const history = useHistory();
  const [error, setError] = useState('');

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleRegister = async () => {
    try {
      await register(newUser);
      toasty('Account registered successfully - You may now login', 5000);
      history.push('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <React.Fragment>
      <Banner>
        <SecondaryButton onClick={() => history.push('/login')}>
          Login
        </SecondaryButton>
      </Banner>
      <Center>
        <Margin margin={'7em'} />
        <Heading>Create an Account</Heading>
        <Form
          actions={[
            <PrimaryButton onClick={handleRegister}>
              Create Account
            </PrimaryButton>,
          ]}
        >
          <FormGroup label="Username">
            <TextInput
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup label="Password">
            <TextInput
              type="password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup label="Email">
            <TextInput
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </FormGroup>
        </Form>
        <Margin />
        <Link to="/">Go back</Link>
        {error && (
          <div style={{ color: 'red', marginTop: '16px' }}>{error}</div>
        )}
      </Center>
    </React.Fragment>
  );
};

export default Register;
