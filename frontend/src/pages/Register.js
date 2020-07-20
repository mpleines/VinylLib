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

const Register = () => {
  const history = useHistory();

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleRegister = async () => {
    try {
      await register(newUser);
    } catch (err) {
      console.log(err);
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
        <Margin margin={'3em'} />
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
      </Center>
    </React.Fragment>
  );
};

export default Register;
