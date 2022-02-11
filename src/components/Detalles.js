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
        <div className="modal-content border-Dark ">
          <div>
            <div className="img-peli">
              <img src={imagenUrl} alt={title} />
            </div>
            <div>
              <p>
                <strong>{title}</strong>
              </p>
              <p>{overview}</p>
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
              <button
                type="button"
                className="btn btn-dark float-end"
                data-bs-dismiss="modal"
              >
                ★
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalles;