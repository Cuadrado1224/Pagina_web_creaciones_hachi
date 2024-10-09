import React from "react";
import "./Navbar.css";
import logo from "/Public/Imagenes/hola.jpg";
import Banner from "../Components/Banner"


const Navbar = () => {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="Logo de la empresa" />
        </a>
        <nav className="navbar">
          <a href="/" className="nav-item is-active" active-color="red">
            Home
          </a>
          <a href="/" className="nav-item" active-color="blue">
            About
          </a>
          <a href="/" className="nav-item" active-color="blue">
            Portafolio
          </a>
          <a href="/" className="nav-item" active-color="blue">
            Services
          </a>
          <a href="/" className="nav-item" active-color="blue">
            Contact
          </a>
          <a href="/">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="/">
            <i className="fa-solid fa-user"></i>
          </a>
          <a href="/">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          
        </nav>
      </header>
      <Banner/>
     
    </>
  );
};

export default Navbar;
