import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import DailyBibleVerse from "../DailyBibleVerse/DailyBibleVerse.jsx";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Daily Bible Verse</h3>
          <DailyBibleVerse />
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Newsletter">Church Newsletter</Link>
            </li>
            <li>
              <Link to="/ChurchDirectory">Church Directory</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>More</h3>
          <ul>
            <li>
              <Link to="/Events">Events</Link>
            </li>
            <li>
              <Link to="/Mission">Oversee Mission</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/RegisterChurch">
                Register or Update Church Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-social-icon">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaXTwitter />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </div>

      <div className="footer-copyright-container">
        <p>
          © {new Date().getFullYear()} Christian Worker. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
