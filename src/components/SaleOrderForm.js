// SaleOrderForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MultiSelect } from 'chakra-multiselect';

const SaleOrderForm = ({ onSubmit, initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedProducts, setSelectedProducts] = useState([]);

  // ... (logic for fetching product options - not included here)

  const productOptions = [
    // Populate product options based on your data
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields for customer, product selection, etc. */}
      <MultiSelect
        label="Products"
        options={productOptions}
        value={selectedProducts}
        onChange={setSelectedProducts}
        {...register('products', { required: true })}
      />
      {errors.products && <span className="error">Please select products</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SaleOrderForm;
