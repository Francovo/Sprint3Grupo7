import React from "react";
import "./NavBar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMapMarked } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="ContainerNavBar">
      <div className="Container1">
        <a href="/" className="Container-a-Logo">
          <img
            src="https://res.cloudinary.com/aca-geek/image/upload/v1644293670/logo-blockBuster_ckz15z.png"
            alt=""
            className="Logo"
          />
        </a>
        <a href="/" className="btnNavBar">Todas</a>
        <a href="/valoradas" className="btnNavBar">Mas Valoradas</a >
        <a href="/valoradas" className="btnNavBar">Menos Valoradas</a >

        <div className="container-Input">
          <input placeholder="Ingresa tu pelicula" className="Input"></input>
          <button className="btn-icono">
            <AiOutlineSearch className="IconoBusqueda" size={20} />
          </button>
        </div>

        <div>
          <a className="Ubicacion" href="/ubicacion">
            <FaMapMarked color="white" size={32} className="iconUbi" />
            Ingresa tu ubicacion
          </a>
        </div>

        <a href="/favoritos" className="aFav">
          <h4 className="estrella">★ Fav</h4>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
