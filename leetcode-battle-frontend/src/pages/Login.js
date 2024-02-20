// src/components/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate, Link } from 'react-router-dom';
import './authentication.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/welcome');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <div className="flex justify-between">
          <Link to="/forget-password" className="link-primary">Forgot Password?</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/create-account" className="link-primary">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
