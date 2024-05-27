import React from 'react';

const SaleOrderTable = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p>No orders available</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.product}</td>
            <td>{order.quantity}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SaleOrderTable;
