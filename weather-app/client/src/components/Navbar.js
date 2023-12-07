// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">WeatherApp</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link> {/* 使用Link组件进行路由导航 */}
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link> {/* 使用Link组件进行路由导航 */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
