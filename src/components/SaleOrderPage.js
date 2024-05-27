import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs, Button, Box } from '@chakra-ui/react';
import SaleOrderTable from './SaleOrderTable';
import { useNavigate } from 'react-router-dom';

const SaleOrderPage = ({ activeOrders, completedOrders }) => {
  const navigate = useNavigate();

  return (
    <Box>
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

export default SaleOrderPage;
