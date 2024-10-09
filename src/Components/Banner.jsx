import React from 'react'
import imgLogo from "/Public/Imagenes/perro3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="header-conten">
    <div className="header-img">
      <img src={imgLogo} alt="" />
    </div>
    <div className="headerText">
      <h1>Ofertas especiales</h1>
      <p>Estrena las mejores prendas</p>
      <a href="/" className="btn-1">
        Información
      </a>
    </div>
  </div>
  )
}

export default Banner