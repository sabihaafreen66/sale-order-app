import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

const SaleOrderForm = ({ initialData = {}, onSubmit }) => {
  const [product, setProduct] = useState(initialData.product || '');
  const [quantity, setQuantity] = useState(initialData.quantity || '');
  const [status, setStatus] = useState(initialData.status || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...initialData, product, quantity, status });
  };

  return (
    <Box bg="gray.100" p={4} borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="product">
            <FormLabel>Product</FormLabel>
            <Input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </FormControl>
          <FormControl id="quantity">
            <FormLabel>Quantity</FormLabel>
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </FormControl>
          <FormControl id="status">
            <FormLabel>Status</FormLabel>
            <Input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SaleOrderForm;
