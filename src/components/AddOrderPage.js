import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const AddOrderPage = ({ addOrder }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [customerName, setCustomerName] = useState('');
  const navigate = useNavigate();

  const getRandomColor = () => {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      product,
      quantity,
      status: 'Active',
      customer_profile: {
        id: Date.now(),
        name: customerName,
        color: getRandomColor()
      }
    };
    addOrder(newOrder);
    navigate('/orders');
  };

  return (
    <Box p={4}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Product</FormLabel>
          <Input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Quantity</FormLabel>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Customer Name</FormLabel>
          <Input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" type="submit">Add Order</Button>
        <Button colorScheme="gray" onClick={() => navigate('/orders')}>Cancel</Button>
      </VStack>
    </Box>
  );
};

export default AddOrderPage;
