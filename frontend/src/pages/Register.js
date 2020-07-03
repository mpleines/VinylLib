import React, { useState } from 'react';
import { Page } from '../components/Page';
import { Heading } from '../components/Fonts';
import { Form } from '../components/Form';
import { PrimaryButton } from '../components/Buttons';
import { FormGroup } from '../components/FormGroup';
import { TextInput } from '../components/InputFields';
import { Link } from '../components/Link';
import Margin from '../components/Margin';
import { register } from '../ApiService/ApiService';

const Register = () => {

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleRegister = async () => {
    try {
      
      await register(newUser);
    } catch(err) {
      console.log(err);
    }
  }
  
  return(
    <Page>
      <Heading>Create an Account</Heading>

      <Form actions={[
        <PrimaryButton onClick={handleRegister}>Create Account</PrimaryButton>
      ]}>
        <FormGroup label="Username">
          <TextInput value={newUser.username} onChange={(e) => setNewUser({...newUser, username: e.target.value})}/>
        </FormGroup>
        <FormGroup label="Password">
          <TextInput type="password" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})}/>
        </FormGroup>
        <FormGroup label="Email">
          <TextInput type="email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})}/> 
        </FormGroup>
      </Form>
      <Margin/>
      <Link to="/">Back to login</Link>
    </Page>
  )

}

export default Register;