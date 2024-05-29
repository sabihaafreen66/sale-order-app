import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import classes from './Header.module.css';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleThemeToggle = () => {
    const newTheme = colorMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    toggleColorMode();
  };

  return (
    <header className={classes.header}>
      <IconButton
        onClick={handleThemeToggle}
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        size="sm"
        aria-label="Toggle Theme"
        variant="outline"
        color={colorMode === 'light' ? 'black' : 'white'}
        bg={colorMode === 'light' ? 'white' : 'black'}
        border="1px solid"
        borderColor={colorMode === 'light' ? 'black' : 'white'}
        _hover={{
          bg: colorMode === 'light' ? 'gray.200' : 'gray.700',
        }}
        borderRadius="full"
        margin="8px"
      />
    </header>
  );
};

export default Header;
