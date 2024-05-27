import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './components/Login';
import SaleOrderPage from './components/SaleOrderPage';
import AddOrderPage from './components/AddOrderPage';
import classes from './App.module.css';

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

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const addOrder = (order) => {
    setActiveOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <ChakraProvider>
      <Router>
        <div className={classes.App}>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            {isLoggedIn ? (
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
