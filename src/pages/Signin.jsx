// Signin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    
    console.log('Submitting login form with:', { email, password });

    fetch('https://edugate-cbdne9atdpddajh8.scm.eastus-01.azurewebsites.net/api/deployments/fae4d150f5b14f2fbed8b1d283e79815/log/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      if (data.token) {
        navigate('/home');
      } else {
        console.error('Login failed:', data.message);
      }
    })
    .catch(error => {
      console.error('Failed to fetch:', error);
    });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    
    console.log('Submitting signup form with:', { email, password });

    fetch('https://edugate-cbdne9atdpddajh8.scm.eastus-01.azurewebsites.net/api/deployments/fae4d150f5b14f2fbed8b1d283e79815/log/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      if (data.success) {
        // Redirect to login page after successful signup
        navigate('/login');
      } else {
        console.error('Signup failed:', data.message);
      }
    })
    .catch(error => {
      console.error('Failed to fetch:', error);
    });
  };

  return (
    <div className="Signin-form">
      <h1>Welcome To Edugate.</h1>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Your Email *</label>
        <input 
          type="email" 
          placeholder="e.g@gmail.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label htmlFor="password">Your Password *</label>
        <input 
          type="password" 
          placeholder="e.g1sdf34#sdjfh" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="primary-button">Signin</button>
      </form>
      <div className="signup">
        <p>Don't have an account? Sign up below:</p>
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="signup-email">Your Email *</label>
          <input 
            type="email" 
            placeholder="e.g@gmail.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label htmlFor="signup-password">Your Password *</label>
          <input 
            type="password" 
            placeholder="e.g1sdf34#sdjfh" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="primary-button">Signup</button>
        </form>
        <a href="">Forgot password?</a>
      </div>
    </div>
  );
}

export default Signin;
