import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from '@chakra-ui/react';

const SaleOrderTable = ({ orders, onOpenEditModal }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Quantity</Th>
            <Th>Status</Th>
            <Th>Customer Name</Th>
            <Th>Customer Color</Th>
            <Th>Location</Th>
            <Th>Profile Picture</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.product}</Td>
              <Td>{order.quantity}</Td>
              <Td>{order.status}</Td>
              <Td>{order.customer_profile.name}</Td>
              <Td>{order.customer_profile.color}</Td>
              <Td>{order.location_name}</Td>
              <Td><img src={order.customer_profile.profile_pic} alt="Profile" /></Td>
              <Td>
                <Button colorScheme="blue" onClick={() => onOpenEditModal(order.id)}>
                 ...
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SaleOrderTable;
