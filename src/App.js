import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/Login';
import SaleOrderPage from './components/SaleOrderPage';
import AddOrderPage from './components/AddOrderPage';
import classes from './App.module.css';
import Header from './components/Header.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeOrders, setActiveOrders] = useState([
    {
      id: 1,
      product: 'Product A',
      quantity: 40,
      status: 'Active',
      customer_profile: {
        id: 11908,
        name: 'Ram',
        color: [182, 73, 99]
      }
    },
    {
      id: 2,
      product: 'Product B',
      quantity: 45,
      status: 'Active',
      customer_profile: {
        id: 11909,
        name: 'Shyam',
        color: [255, 0, 0]
      }
    }
  ]);

  const [completedOrders, setCompletedOrders] = useState([
    {
      id: 3,
      product: 'Product C',
      quantity: 20,
      status: 'Completed',
      customer_profile: {
        id: 11910,
        name: 'Gita',
        color: [0, 255, 0]
      }
    },
    {
      id: 4,
      product: 'Product D',
      quantity: 15,
      status: 'Completed',
      customer_profile: {
        id: 11911,
        name: 'Sita',
        color: [0, 0, 255]
      }
    }
  ]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const addOrder = (order) => {
    setActiveOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <ChakraProvider>
      <Router>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className={classes.App}>
          <Routes>
            {!isLoggedIn ? (
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            ) : (
              <>
                <Route
                  path="/orders"
                  element={<SaleOrderPage activeOrders={activeOrders} completedOrders={completedOrders} />}
                />
                <Route
                  path="/add-order"
                  element={<AddOrderPage addOrder={addOrder} />}
                />
                <Route path="*" element={<Navigate to="/orders" />} />
              </>
            )}
            {/* Redirect to login page for unknown routes when not logged in */}
            <Route path="*" element={isLoggedIn ? <Navigate to="/orders" /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
