import React from 'react';
import { Container } from 'react-bootstrap';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <Container>
      <h1>Register</h1>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
