import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RegistroAsincronoFavoritos } from "../../actions/actionFavoritos";
import { fileUpload } from "../../helpers/FileUpload";
import './Favoritos.scss'

const Favoritos = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    imagen: "",
    nombre: "",
    año: "",
    sinopsis: "",
    calificacion: "",
  });

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const { imagen, nombre, año, calificacion, sinopsis } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      imagen,
      nombre,
      año,
      sinopsis,
      calificacion,
    };
    dispatch(RegistroAsincronoFavoritos(data));
  };

  const handleInputClick = () => {
    document.querySelector("#inputImagen").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        setValues({
          ...values,
          imagen: response,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Container-Agregar">
      <h3 className="text-center">Agregar Peliculas</h3>
      <form className="container-form" onSubmit={handleSubmit}>
        <input
          id="inputImagen"
          type="file"
          className="form-control"
          placeholder="Seleccionar Imagen"
          name="imagen"
          required
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => handleInputClick()}
        >
          Seleccionar Imagen
        </button>

        <input
          id="inputNombre"
          type="text"
          className="form-control"
          placeholder="Nombre"
          name="nombre"
          required
          autoComplete="off"
          onChange={handleInputChange}
          value={nombre}
        />

        <input
          id="inputAño"
          type="number"
          className="form-control mt-2"
          placeholder="Año"
          name="año"
          required
          autoComplete="off"
          min="1900"
          onChange={handleInputChange}
          value={año}
        />

        <textarea
          id="inputSinopsis"
          className="form-control mt-2"
          placeholder="Sinopsis"
          name="sinopsis"
          required
          autoComplete="off"
          onChange={handleInputChange}
          value={sinopsis}
        ></textarea>

        <input
          id="inputCalificacion"
          type="number"
          className="form-control mt-2"
          placeholder="Calificacion"
          name="calificacion"
          required
          autoComplete="off"
          min="1"
          onChange={handleInputChange}
          value={calificacion}
        />

        <div className=" gap-2 mx-auto mt-2">
          <button type="submit" className="btn btn-warning">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Favoritos;
