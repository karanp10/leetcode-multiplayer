// src/components/ForgetPassword.js
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/config';
import { Link } from 'react-router-dom';
import './authentication.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Check your inbox for further instructions');
    } catch (error) {
      setMessage('Failed to reset password');
    }
  };

  return (
    <div className="container">
      <h1>Reset Password</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>
        Remembered your password? <Link to="/" className="link-primary">Login</Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
