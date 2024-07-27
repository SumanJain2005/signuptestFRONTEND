import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/signup`, { email, password });
      history.push('/login');
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
