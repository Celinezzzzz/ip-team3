import React from 'react';

import './Navbar.scss';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <ul className="navbar__links-group">
          <li className="navbar__links">
            <Link to="/">Active Listings</Link>
          </li>
          <li className="navbar__links">
            <Link to="/user-profile/solditems">Sold Items</Link>
          </li>
          <li className="navbar__links">
            <Link>Rating</Link>
          </li>
          <li className="navbar__links">
            <Link to="/user-profile/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
