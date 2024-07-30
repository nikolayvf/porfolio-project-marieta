// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.styles.css";
// import photos from "../resources/DECORET_LOGO.png";

// function NavBar() {
//   return (
//     <header className="header">
//       <nav className="navbar">
//         <Link className="logo" to="/">
//           <img src={photos} alt="Logo" />
//         </Link>
//         <div className="menu">
//           <Link to="/">Home</Link>
//           <Link to="/projects">Проекти</Link>
//           {/* <Link to="/services">Услуги</Link> */}
//           <Link to="/about">За мен</Link>
//           <Link to="/contacts">Контакти</Link>
//           <Link to="/blog">Блог</Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default NavBar;

// src/components/NavBar.jsx

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.styles.css";
import logo from "../resources/DECORET_LOGO_SMALL.png"; // Ensure the path is correct

function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src={logo} alt="DECORET DESIGN HABITAT Logo" />
        </Link>
        <ul className="menu">
          <li>
            <NavLink to="/" className="nav-link" end>
              Начало
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/projects" className="nav-link">
              Проекти
            </NavLink>
            <ul className="dropdown-content">
              <li>
                <NavLink to="/projects/interior" className="dropdown-link">
                  Интериор
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects/exterior" className="dropdown-link">
                  Екстериор
                </NavLink>
              </li>
            </ul>
          </li>
          {/* <li>
            <NavLink to="/services" className="nav-link">
              Услуги
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/about" className="nav-link">
              За мен
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className="nav-link">
              Контакти
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="nav-link">
              Блог
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
