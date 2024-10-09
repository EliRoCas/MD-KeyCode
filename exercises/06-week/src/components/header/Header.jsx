import { useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="headerContainer">
      <h1>Actividad 6</h1>
      <nav className="navbar">
        <div className="toggleButton" onClick={toggleMenu}>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link
              className="headerLink"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="headerLink"
              to="/products"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
