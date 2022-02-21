import React from "react";
import Favoritos from "../components/Favoritos-Valoradas/Favoritos";
import ListaPeliculasAgregadas from "../components/Favoritos-Valoradas/listarFavoritos";
// import ListarRecomendaciones from "../components/ListarRecomendaciones";

const Recomendaciones = () => {
  return (
    <div>
 <Favoritos /> <br/>
       <h4 className="text-white">Favoritos</h4>{" "}
      <ListaPeliculasAgregadas />{" "}
    </div>
  );
};
export default Recomendaciones;
