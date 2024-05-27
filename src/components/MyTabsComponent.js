import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const MyTabsComponent = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Content for Tab 1</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 2</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MyTabsComponent;
