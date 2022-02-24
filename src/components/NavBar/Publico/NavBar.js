import React, { useState } from "react";
import "./NavBar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMapMarked } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logoutAsincrono } from "../../../actions/actionLogin";
import { useDispatch } from "react-redux";

const NavBarPublic = ({ setSearch }) => {
  let url = "";

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [ubicacion, setUbicacion] = useState("Ingresa tu ubicacion");

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleLogout = () => {
    dispatch(logoutAsincrono());
    navigate("/login");
  };

  const getCoordenadas = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI`;
      getUbicacion(url);
    });
  };

  const getUbicacion = async (url) => {
    const resp = await fetch(url);
    const { results } = await resp.json();
    console.log(results);
    console.log(results[7].formatted_address);
    setUbicacion(results[7].formatted_address);
  };

  return (
    <nav className="ContainerNavBar">
      <div className="Container1">
        <a href="/home" className="Container-a-Logo">
          <img
            src="https://res.cloudinary.com/aca-geek/image/upload/v1644293670/logo-blockBuster_ckz15z.png"
            alt=""
            className="Logo"
          />
        </a>
        <Link to="/home" className="btnNavBar">
          Todas
        </Link>
        <Link to="/valoradas" className="btnNavBar">
          Mas Valoradas
        </Link>
        <Link to="/valoradas" className="btnNavBar">
          Menos Valoradas
        </Link>

        <div className="container-Input">
          <input
            placeholder="Ingresa tu pelicula"
            className="Input"
            onChange={handleInputChange}
          ></input>
          <button className="btn-icono">
            <AiOutlineSearch className="IconoBusqueda" size={20} />
          </button>
        </div>

        <div>
          <button className="btnUbicacion">
            <span
              className="Ubicacion"
              href="/ubicacion"
              onClick={() => getCoordenadas()}
            >
              <FaMapMarked color="white" size={32} className="iconUbi" />
              {ubicacion}
            </span>
          </button>
        </div>
        <button className="btnlogout" type="button" onClick={() => handleLogout()}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBarPublic;
