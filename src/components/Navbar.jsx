import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
  FaWhatsapp
} from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/", label: "Courses" },
    { path: "/", label: "Contact" },
    { path: "/", label: "About" },
  ];

  return (
    <>
      <div className="top-header">
        {/* <marquee behavior="scroll" direction="right" id="gst-marquee">
          GST :28081998
        </marquee> */}

        <div className="top-header-container">
          <div className="top-header-left">
           <FaWhatsapp />   
            <a href="tel:+91 9390966127" target="_blank">
              <p> +91 9390966127</p>
            </a>
             <FaPhone />
            <a>
                
                <p>9391182175</p>
            </a>
            <FaEnvelope />
            <a href="mailto:skillvibehub@gmail.com">
              <p> skillvibehub@gmail.com</p>
            </a>
          </div>

          <div className="top-header-right">
            <a href="https://www.facebook.com/profile.php?id=61583119861979" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/inskillup" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/inskillup_official?igsh=ajgwaWptdnNzYjE4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">
            <Link to="/" onClick={closeMenu} className="home-link">
              <span className="logo-right">SkillVibe</span>   <span className="logo-left">Hub</span> 
            </Link>
          </h1>

          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
