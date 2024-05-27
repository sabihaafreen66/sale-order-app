import React, { useState, useEffect } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs, Button, Box } from '@chakra-ui/react';
import SaleOrderTable from './SaleOrderTable';
import { useNavigate } from 'react-router-dom';

const SaleOrdersPage = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();

  const dummyActiveOrders = [
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
  ];

  const dummyCompletedOrders = [
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
  ];

  useEffect(() => {
    // Replace API calls with dummy data
    setActiveOrders(dummyActiveOrders);
    setCompletedOrders(dummyCompletedOrders);
  }, []);

  return (
    <Box>
      {fetchError && <p>{fetchError}</p>}
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
          <Button ml="auto" colorScheme="teal" onClick={() => navigate('/add-order')}>
            + Sale Order
          </Button>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SaleOrderTable orders={activeOrders} />
          </TabPanel>
          <TabPanel>
            <SaleOrderTable orders={completedOrders} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SaleOrdersPage;
