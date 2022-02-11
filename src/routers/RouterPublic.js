import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/NavBar/NavBar";
import Login from "../components/Login/Login";
import { Registro } from "../components/Login/Registro";
import MasValoradas from "../components/Favoritos-Valoradas/MasValoradas";

const RouterPublic = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Home />} />
        <Route path="/valoradas" element={<MasValoradas />} />

        {/* <Route path="/ubicacion" element={< />} /> */}
      </Routes>
    </>
  );
};

export default RouterPublic;
