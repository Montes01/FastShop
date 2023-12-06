import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Tienda</h1>
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink to="/">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Carrito</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
