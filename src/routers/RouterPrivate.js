import React from "react";
import { Route, Routes } from "react-router-dom";
import MasValoradas from "../components/Favoritos-Valoradas/MasValoradas";
import Home from "../components/Home";
import NavBarPrivate from "../components/NavBar/Privado/NavBar";
import Recomendaciones from "../container/FavoritosContainer";

const RouterPrivate = ({search, setSearch}) => {
  return (
    <>
    <NavBarPrivate setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/valoradas" element={<MasValoradas />} />
        <Route path="/favoritos" element={<Recomendaciones />} />
      </Routes>
    </>
  );
};

export default RouterPrivate;
