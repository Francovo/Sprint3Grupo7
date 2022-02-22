import React from "react";
import Detalles from "./Detalles";
import "./Cards.scss";

const Card = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;


  return (
    <div className="Container-Todo">
      <div
        className="Container"
        data-bs-toggle="modal"
        data-bs-target={`#id${movie.id}`}
      >
        <img src={imageUrl} className="Imagen" alt=""/>
        <label className="Calificacion">
          <span className="estrella">★</span> {movie.vote_average}
        </label>
      </div>

      <Detalles
        id={`id${movie.id}`}
        vote_average={movie.vote_average}
        overview={movie.overview}
        title={movie.title}
        genres={movie.genres}
        runtime={movie.runtime}
        release_date={movie.release_date}
        imagenUrl={imageUrl}
      />
    </div>
  );
};

export default Card;
