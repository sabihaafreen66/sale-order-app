import React, { useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs, Button, Box } from '@chakra-ui/react';
import SaleOrderTable from './SaleOrderTable';
import AddOrderPage from './AddOrderPage';
import { useNavigate } from 'react-router-dom';
import EditOrderModal from './EditOrderModal';

const SaleOrderPage = () => {
  const [activeOrders, setActiveOrders] = useState([
    {
      id: 1,
      product: 'Product A',
      quantity: 40,
      status: 'Active',
      customer_profile: {
        id: 11908,
        name: 'Ram',
        color: [182, 73, 99],
        profile_pic: 'https://www.coolseotools.com/placeholder/600x300/d5d5d5/584959/hghjb', // Dummy photo 1
      },
      location_name: 'Location 1'
    },
    {
      id: 2,
      product: 'Product B',
      quantity: 45,
      status: 'Active',
      customer_profile: {
        id: 11909,
        name: 'Shyam',
        color: [255, 0, 0],
        profile_pic: 'https://www.coolseotools.com/placeholder/600x300/e0e0e0/ff5733/hghjb', // Dummy photo 2
      },
      location_name: 'Location 2'
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
        color: [0, 255, 0],
        profile_pic: 'https://www.coolseotools.com/placeholder/600x300/f2f2f2/33c1ff/hghjb', // Dummy photo 3
      },
      location_name: 'Location 3'
    },
    {
      id: 4,
      product: 'Product D',
      quantity: 15,
      status: 'Completed',
      customer_profile: {
        id: 11911,
        name: 'Sita',
        color: [0, 0, 255],
        profile_pic: 'https://www.coolseotools.com/placeholder/600x300/cccccc/75ff33/hghjb', // Dummy photo 4
      },
      location_name: 'Location 4'
    }
  ]);

  const [showForm, setShowForm] = useState(false); // State to manage form visibility
  const [selectedOrder, setSelectedOrder] = useState(null); // State to manage selected order for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  // Function to add new order to active orders
  const handleAddOrder = (newOrder) => {
    setActiveOrders((prevOrders) => [...prevOrders, newOrder]);
    setShowForm(false); // Hide the form after adding the order
  };

  // Function to open the edit modal
  const handleEdit = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  // Function to save the edited order
  const handleSave = (updatedOrder) => {
    const updatedOrders = activeOrders.map((order) =>
      order.id === updatedOrder.id ? { ...updatedOrder, lastModified: new Date() } : order
    );
    setActiveOrders(updatedOrders);
    setIsModalOpen(false);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <Box>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
          {!showForm && (
            <Button ml="auto" colorScheme="teal" onClick={() => setShowForm(true)}>
              + Sale Order
            </Button>
          )}
        </TabList>
        <TabPanels>
          <TabPanel>
            <SaleOrderTable orders={activeOrders} onEdit={handleEdit} />
          </TabPanel>
          <TabPanel>
            <SaleOrderTable orders={completedOrders} viewOnly={true} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {showForm && <AddOrderPage addOrder={handleAddOrder} />}
      {selectedOrder && (
        <EditOrderModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          order={selectedOrder}
          onSave={handleSave}
        />
      )}
    </Box>
  );
};

export default SaleOrderPage;
