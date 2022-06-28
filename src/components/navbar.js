import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container nav-container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link to="/crops">Crops</Link>
            </li>
            <li>
              <Link to="/manures">Manures</Link>
            </li>
            <li>
              <Link to="/rain">Rain</Link>
            </li>
            <li>
              <Link to="/practices">Practices</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <h1 className="logo">
            <Link to="/">Organic-UK</Link>
          </h1>
        </div>
      </nav>

      <div className="emptyBlock"></div>
    </>
  );
}
