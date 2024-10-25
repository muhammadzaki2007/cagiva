import React from 'react';
import RecentOrders from './RecentOrders';
import Todos from './Todos';

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="download-btn">Download PDF</button>
      </div>
      
      <div className="stats-container">
        <div className="stat-item">
          <h3>1020</h3>
          <p>New Orders</p>
        </div>
        <div className="stat-item">
          <h3>2834</h3>
          <p>Visitors</p>
        </div>
        <div className="stat-item">a
          <h3>$2543</h3>
          <p>Total Sales</p>
        </div>
      </div>
      
      <div className="main-dashboard">
        <RecentOrders />
        <Todos />
      </div>
    </div>
  );
}

export default Dashboard;
