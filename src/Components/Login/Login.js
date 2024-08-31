import React, { useEffect } from 'react';
import './login.css';
import logo from '../../media/Logo 12.png'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  useEffect(()=>{    
    let token= localStorage.getItem('token');
    console.log(token);
    if(token!==null&&undefined){
navigate('/');
    }
  },[])
  function signUpWithGoogle(){
window.open('https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/');
  }
  return (
    <div className="login-container">
    <Container style={{position:'relative',height:'100vh'}}>
      <div className="header">
        <img src={logo} className="logo-img"/>
        <hr/>
      </div>
      <div className='login-body'>
      <div className="login-box">
        <h2>Create a new account</h2>
        <button className="google-signup mt-2 mb-4" onClick={signUpWithGoogle}>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
          Sign Up with Google
        </button>
        <div style={{display:'flex',justifyContent:'center'}}>
        <button className="create-account mt-4" onClick={signUpWithGoogle} >Create an Account</button>
        </div>
   
        <p>Already have an account? <a href="#">Sign In</a></p>
      </div>
      </div>
      <footer>
        <p>© 2023 Reachinbox. All rights reserved.</p>
      </footer>
    </Container>
    </div>
  );
}
