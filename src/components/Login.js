import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import classes from './Login.module.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') 
 {
      setError('');
      onLogin(true);
      navigate('/orders');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.formControl}>
        <label htmlFor="username" className={classes.label}>Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={classes.input}
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="password" className={classes.label}>Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
        />
      </div>
      {error && <p className={classes.error}>{error}</p>}
      <Button type="submit" className={classes.button} colorScheme="blue">Login</Button>
    </form>
  );
};

export default Login;
