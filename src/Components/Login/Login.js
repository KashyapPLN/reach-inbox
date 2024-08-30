import React from 'react';
import './login.css';
import logo from '../../media/Logo 12.png'
import { Container } from 'react-bootstrap';

export default function Login() {
  return (
    <Container className="login-container">
      <div className="header">
        <img src={logo} className="logo-img"/>
        <hr/>
      </div>
      <div className="login-box">
        <h2>Create a new account</h2>
        <button className="google-signup mt-2 mb-4">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
          Sign Up with Google
        </button>
        <button className="create-account mt-4">Create an Account</button>
        <p>Already have an account? <a href="#">Sign In</a></p>
      </div>
      <footer>
        <p>© 2023 Reachinbox. All rights reserved.</p>
      </footer>
    </Container>
  );
}
