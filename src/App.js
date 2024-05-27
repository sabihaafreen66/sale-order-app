import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SaleOrdersPage from './components/SaleOrderPage'; // Import the SaleOrdersPage component
import SaleOrderForm from './components/SaleOrderForm';
import { ChakraProvider } from '@chakra-ui/react';
import classes from './App.module.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editingSaleOrder, setEditingSaleOrder] = useState(null); // To store sale order object for editing

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const handleEditSaleOrder = (updatedOrder) => {
    // Implement logic for handling sale order edit
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
                {editingSaleOrder && (
                  <Route
                    path="/edit-order/:id"
                    element={
                      <SaleOrderForm
                        initialData={editingSaleOrder}
                        onSubmit={handleEditSaleOrder}
                      />
                    }
                  />
                )}
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
