import React from "react";
import { Route, Routes } from "react-router-dom";
import Favoritos from "../components/Favoritos-Valoradas/Favoritos";

const RouterPrivate = () => {
  return (
    <>
      <Routes>
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
};

export default RouterPrivate;
