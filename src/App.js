import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import SaleOrderTable from './components/SaleOrderTable';
import SaleOrderForm from './components/SaleOrderForm';
import { ChakraProvider } from '@chakra-ui/react';
import classes from './App.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [editingSaleOrder, setEditingSaleOrder] = useState(null); // To store sale order object for editing

  // Simulate fetching orders from backend (replace with your API call)
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('http://your-api.com/orders');
      const data = await response.json();
      setActiveOrders(data.activeOrders);
      setCompletedOrders(data.completedOrders);
    };
    if (isLoggedIn) {
      fetchOrders();
    }
  }, [isLoggedIn]);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const handleAddSaleOrder = (newOrder) => {
    // Add logic to send new order data to backend
    setActiveOrders([...activeOrders, newOrder]);
    setEditingSaleOrder(null); // Close modal after adding
  };

  const handleEditSaleOrder = (updatedOrder) => {
    // Update order data in backend and state
    const updatedActiveOrders = activeOrders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order));
    setActiveOrders(updatedActiveOrders);
    setEditingSaleOrder(null); // Close modal after editing
  };

  const handleOpenEditModal = (orderId) => {
    const orderToEdit = activeOrders.find((order) => order.id === orderId);
    setEditingSaleOrder(orderToEdit);
  };

  return (
    <ChakraProvider>
      <div className="App">
        {isLoggedIn ? (
          <>
            <SaleOrderTable activeOrders={activeOrders} completedOrders={completedOrders} onOpenEditModal={handleOpenEditModal} />
            {editingSaleOrder && (
              <SaleOrderForm
                initialData={editingSaleOrder}
                onSubmit={editingSaleOrder ? handleEditSaleOrder : handleAddSaleOrder}
              />
            )}
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
