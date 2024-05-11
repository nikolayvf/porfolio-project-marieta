import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.css";

function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src="/path/to/logo.png" alt="Logo" />
        </Link>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/projects">Проекти</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/about">За мен</Link>
          <Link to="/contacts">Контакти</Link>
          <Link to="/blog">Блог</Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
