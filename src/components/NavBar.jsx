import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.css";
import photos from "../resources/hero-image.jpg";

function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src={photos} alt="Logo" />
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
