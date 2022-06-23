import React from "react";
import "./Detalles.scss";

const Detalles = (movie) => {
  const { id, overview, title, release_date, imagenUrl, vote_average } = movie;

  return (
    <div
      className="modal"
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content border-Dark">
          <div className="img-peli">
            <img src={imagenUrl} alt={title} />
          </div>
          <div className="d-flex flex-column p-3">
            <p className="d-flex justify-content-center">
              <strong>{title}</strong>
            </p>
            <p className="d-flex text-center">{overview}</p>
            <div>
              <ul>
                <li>
                  <p>{release_date}</p>
                </li>
                <li>
                  <p>Puntuación: {vote_average}</p>
                </li>
              </ul>
              <br />
            </div>
            <button
              type="button"
              className="btn btn-warning "
              data-bs-dismiss="modal"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
