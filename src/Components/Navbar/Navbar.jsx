import "./Navbar.css";
import CWlogo from "../../assets/cwimage/cwlogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("church");
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu and set active menu item when clicking a link
  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsOpen(false); // Close the mobile menu after clicking
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={() => handleMenuClick("Home")}>
          <img src={CWlogo} alt="Logo" />
        </Link>

        <p>
          <Link
            to="/"
            style={{ fontSize: "100%" }}
            onClick={() => handleMenuClick("Home")}
          >
            Christian Worker
          </Link>
        </p>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? "✖Menu" : "☰"}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li onClick={() => handleMenuClick("Home")}>
          <Link to="/">Home</Link>
          {menu === "Home" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("About")}>
          <Link to="/About">About</Link>
          {menu === "About" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("Church Newsletter")}>
          <Link to="/Newsletter">Church Newsletter</Link>
          {menu === "Church Newsletter" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("Church Directory")}>
          <Link to="/ChurchDirectory">Church Directory</Link>
          {menu === "Church Directory" && <hr />}
        </li>

        <li onClick={() => handleMenuClick("Events")}>
          <Link to="/Events">Events</Link>
          {menu === "Events" && <hr />}
        </li>

        <li onClick={() => handleMenuClick("Oversea Mission")}>
          <Link to="/Mission">Oversea Mission</Link>
          {menu === "Oversea Mission" && <hr />}
        </li>
        <li onClick={() => handleMenuClick("Contact Us")}>
          <Link to="/Contact">Contact Us</Link>
          {menu === "Contact Us" && <hr />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
