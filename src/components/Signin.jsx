import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://edugate-cbdne9atdpddajh8.scm.eastus-01.azurewebsites.net/api/deployments/fae4d150f5b14f2fbed8b1d283e79815/log/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.token); // Check if token is present
        localStorage.setItem('token', data.token);
        setMessage(data.message || 'Login successful');
        navigate('/home');
      } else {
        setMessage(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Login</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="signin-input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signin-input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signin-button">Login</button>
      </form>
      {message && <p className="signin-message">{message}</p>}
      <p>Dont't have an Account, Register Yourself : <a className='register' href="https://delightful-pebble-06f481310.5.azurestaticapps.net/register">Register</a></p>
    </div>
  );
};

export default Signin;
