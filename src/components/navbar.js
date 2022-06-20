import React from 'react';

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
              <a href="/">Manures</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
          <h1 className="logo">
            <a href="/">Organic Uttrakhand</a>
          </h1>
        </div>
      </nav>

      <div className="emptyBlock"></div>
    </>
  );
}
