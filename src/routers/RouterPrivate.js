import React from "react";
import { Route, Routes } from "react-router-dom";
import MasValoradas from "../components/Favoritos-Valoradas/MasValoradas";
import MenosValoradas from "../components/Favoritos-Valoradas/MenosValoradas";
import Home from "../components/Home";
import NavBarPrivate from "../components/NavBar/NavBarPrivado";
import Recomendaciones from "../container/FavoritosContainer";

const RouterPrivate = ({ search, setSearch }) => {
  return (
    <>
      <NavBarPrivate setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/mas" element={<MasValoradas search={search}/>} />
        <Route path="/menos" element={<MenosValoradas search={search}/>} />
        <Route path="/favoritos" element={<Recomendaciones />} />
      </Routes>
    </>
  );
};

export default RouterPrivate;
