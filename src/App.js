import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/Login';
import SaleOrdersPage from './components/SaleOrderPage';
import SaleOrderForm from './components/SaleOrderForm';
import classes from './App.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <ChakraProvider>
      <Router>
        <div className={classes.App}>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            {isLoggedIn ? (
              <>
                <Route path="/orders" element={<SaleOrdersPage />} />
                <Route path="/add-order" element={<SaleOrderForm />} />
                <Route path="*" element={<Navigate to="/orders" />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
