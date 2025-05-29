import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Coca-Cola</span>
        </div>
        <div className="nav-menu">
          <Link to="/products" className="nav-link">Productos</Link>
          <Link to="/category" className="nav-link">Categorías</Link>
          <Link to="/locals" className="nav-link">Locales</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;