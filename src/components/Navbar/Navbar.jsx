import React from 'react';

import './Navbar.scss';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <ul className="navbar__links-group">
          <li className="navbar__links">Active Listings</li>
          <li className="navbar__links">Sold Items</li>
          <li className="navbar__links">Ratings</li>
          <li className="navbar__links">About</li>
        </ul>
      </div>
    </div>
  );
};
