import React from "react";
import "./Footer.css";
import logo from "/Public/Imagenes/hola.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="logo">
        <img src={logo} />
      </a>
      <div className="social-media">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <p>© 2024 Your Company. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
