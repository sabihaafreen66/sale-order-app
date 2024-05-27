// SaleOrderTable.jsx
import React, { useState, useEffect } from 'react';

const SaleOrderTable = ({ activeOrders, completedOrders }) => {
  // ... (logic for fetching orders from backend - not included here)

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Completed</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active show" id="active">
          <h2>Active Sale Orders</h2>
          {/* Display active orders with edit functionality */}
        </div>
        <div className="tab-pane" id="completed">
          <h2>Completed Sale Orders</h2>
          {/* Display completed orders with read-only view */}
        </div>
      </div>
    </div>
  );
};

export default SaleOrderTable;
