import { useState } from "react";
import { Link } from "react-router-dom";
import UnitedKingdom from "../../assets/CountryImage/UnitedKingdom.png";
import England from "../../assets/CountryImage/England.png";
import Scotland from "../../assets/CountryImage/Scotland.png";
import Wales from "../../assets/CountryImage/Wales.png";
import Isle_of_Man from "../../assets/CountryImage/Isle_of_Man.png";
import Ireland from "../../assets/CountryImage/Ireland.png";
import NorthernIreland from "../../assets/CountryImage/NorthernIreland.png";
import "./Sidebar.css";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleClick = (itemName) => {
    setActiveItem(itemName);
    console.log(`${itemName} clicked`);
  };

  return (
    <div className="sidebar">
      <h1>Churches of Christ</h1>
      <h2>By Region</h2>
      <hr />
      <ul>
        <li
          className={`sidebar-item ${
            activeItem === "UnitedKingdom" ? "active" : ""
          }`}
          onClick={() => handleClick("UnitedKingdom")}
        >
          <Link to="/churchdirectory">
            <img
              src={UnitedKingdom}
              alt="UnitedKingdom"
              className="sidebar-icon"
            />
            United Kingdom
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === "England" ? "active" : ""}`}
          onClick={() => handleClick("England")}
        >
          <Link to="/england">
            <img src={England} alt="England" className="sidebar-icon" />
            England
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            activeItem === "Scotland" ? "active" : ""
          }`}
          onClick={() => handleClick("Scotland")}
        >
          <Link to="/scotland">
            <img src={Scotland} alt="Scotland" className="sidebar-icon" />
            Scotland
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === "Wales" ? "active" : ""}`}
          onClick={() => handleClick("Wales")}
        >
          <Link to="/wales">
            <img src={Wales} alt="Wales" className="sidebar-icon" />
            Wales
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            activeItem === "Isle of Man" ? "active" : ""
          }`}
          onClick={() => handleClick("Isle of Man")}
        >
          <Link to="/isle_of_man">
            <img src={Isle_of_Man} alt="Isle_of_Man" className="sidebar-icon" />
            Isle of Man
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            activeItem === "Northern Ireland" ? "active" : ""
          }`}
          onClick={() => handleClick("Ireland")}
        >
          <Link to="/northern_ireland">
            <img
              src={NorthernIreland}
              alt="Northern Ireland"
              className="sidebar-icon"
            />
            Northern Ireland
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === "Ireland" ? "active" : ""}`}
          onClick={() => handleClick("Northern Ireland")}
        >
          <Link to="/ireland">
            <img src={Ireland} alt="Ireland" className="sidebar-icon" />
            Ireland
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
