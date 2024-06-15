import React from 'react'

import './HeaderComponents.css'; // Import your CSS file for styling

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/path/to/your/logo.png" alt="Shop Logo" className="logo" />
      </div>
      <div className="header-center">
        <h1 className="store-name">STN Store</h1>
      </div>
      <nav className="header-right">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">ContactUs</a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
