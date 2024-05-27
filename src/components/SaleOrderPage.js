import React, { useState, useEffect } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs, Flex, Spacer } from '@chakra-ui/react';
import SaleOrderTable from './SaleOrderTable';
import SaleOrderForm from './SaleOrderForm'; // Import SaleOrderForm component

const SaleOrderPage = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const dummyActiveOrders = [
    { id: 1, product: 'Product A', quantity: 10, status: 'Active' },
    { id: 2, product: 'Product B', quantity: 5, status: 'Active' },
  ];

  const dummyCompletedOrders = [
    { id: 3, product: 'Product C', quantity: 20, status: 'Completed' },
    { id: 4, product: 'Product D', quantity: 15, status: 'Completed' },
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const activeResponse = await fetch('http://localhost:3000/active-orders');
        if (!activeResponse.ok) {
          throw new Error(`HTTP error! status: ${activeResponse.status}`);
        }
        const activeData = await activeResponse.json();
        setActiveOrders(activeData);

        const completedResponse = await fetch('http://localhost:3000/completed-orders');
        if (!completedResponse.ok) {
          throw new Error(`HTTP error! status: ${completedResponse.status}`);
        }
        const completedData = await completedResponse.json();
        setCompletedOrders(completedData);
        setFetchError(null); // Clear any previous error
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setActiveOrders(dummyActiveOrders);
        setCompletedOrders(dummyCompletedOrders);
        setFetchError("Failed to fetch orders. Displaying dummy data.");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      <Tabs>
        <Flex>
          <TabList>
            <Tab>Active Sale Orders</Tab>
            <Tab>Completed Sale Orders</Tab>
            <Spacer />
            <Tab>+ Sale Order</Tab> {/* New tab */}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <SaleOrderTable orders={activeOrders} />
          </TabPanel>
          <TabPanel>
            <SaleOrderTable orders={completedOrders} />
          </TabPanel>
          <TabPanel>
            <SaleOrderForm /> {/* Display SaleOrderForm component when + Sale Order tab is clicked */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default SaleOrderPage;

