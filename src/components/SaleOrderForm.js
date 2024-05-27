// SaleOrderForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

const SaleOrderForm = ({ initialData, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || { orderName: '', quantity: 1 },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormControl isInvalid={errors.orderName}>
        <FormLabel htmlFor="orderName">Order Name</FormLabel>
        <Input
          id="orderName"
          {...register('orderName', { required: 'Order name is required' })}
        />
        <FormErrorMessage>{errors.orderName && errors.orderName.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.quantity}>
        <FormLabel htmlFor="quantity">Quantity</FormLabel>
        <Input
          id="quantity"
          type="number"
          {...register('quantity', { required: 'Quantity is required', min: { value: 1, message: 'Minimum quantity is 1' } })}
        />
        <FormErrorMessage>{errors.quantity && errors.quantity.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        {initialData ? 'Update Order' : 'Add Order'}
      </Button>
    </form>
  );
};

export default SaleOrderForm;
