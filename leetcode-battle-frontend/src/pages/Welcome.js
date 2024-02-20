// src/components/Welcome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import './authentication.css';

const Welcome = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Welcome, {user?.email}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
