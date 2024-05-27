import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useColorMode, Button } from '@chakra-ui/react';
import classes from './Login.module.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();
  const [isToggling, setIsToggling] = useState(false); // New state to track theme toggling
  let debounceTimeout = null; // Use let for timeout variable

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      toggleColorMode(storedTheme);
    }
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setError('');
      onLogin(true);
      navigate('/orders');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleThemeToggle = () => {
    // If currently toggling, prevent toggling again
    if (isToggling) {
      return;
    }

    setIsToggling(true); // Set toggling state to true
    const newTheme = colorMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);

    // Clear previous timeout if exists
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set timeout to toggle theme after 500ms
    debounceTimeout = setTimeout(() => {
      toggleColorMode(newTheme);
      setIsToggling(false); // Reset toggling state after toggling
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.formControl}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className={classes.error}>{error}</p>}
      <Button type="submit" className={classes.button} colorScheme="blue">Login</Button>
      <Button onClick={handleThemeToggle} className={`${classes.button} ${classes.themeToggle}`} colorScheme="blue">
        Toggle Theme
      </Button>
    </form>
  );
};

export default Login;
