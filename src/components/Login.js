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
  const [isToggling, setIsToggling] = useState(false);
  let debounceTimeout = null;

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
    if (isToggling) return;
    setIsToggling(true);
    const newTheme = colorMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      toggleColorMode(newTheme);
      setIsToggling(false);
    }, 500);
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
      <Button onClick={handleThemeToggle} className={`${classes.button} ${classes.themeToggle}`} colorScheme="green">
        Toggle Theme
      </Button>
    </form>
  );
};

export default Login;
