import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  eliminarFavoritoAsincrono,
  listarFavoritosAsincrono,
} from "../../actions/actionFavoritos";
import "./listarFavoritos.scss";
import { ModalFav } from "./modalFav";

export const ListaPeliculasAgregadas = () => {

  const [modal, setModal] = useState(false);
  const [datosModal, setDatosModal] = useState([]);

  const ActivarModal = (id) => {
    const traer = array.find((traer) => traer.id === id);
    setModal(true);
    setDatosModal(traer);
  };


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarFavoritosAsincrono());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { array } = useSelector((store) => store.listarFav);

  // const handleClickModificar = (pelicula) => {
  //   setValues(pelicula);
  // };

  // const handleInputChange = ({ target }) => {
  //   setValues({
  //     ...values,
  //     [target.name]: target.value,
  //   });
  // };

  return (
    <div>
      <table className="table text-center mt-3 text-white">
        <thead>
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Año</th>
            <th scope="col">Sinopsis</th>
          </tr>
        </thead>

        <tbody>
          {array.map((peli, index) => (
            <tr key={index}>
              <td>
                <img src={peli.imagen} alt="imagen Pelicula" width="50" />
              </td>
              <td>{peli.nombre}</td>
              <td>{peli.año}</td>
              <td>{peli.sinopsis}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => {
                    ActivarModal(peli.id);
                  }}
                >
                  Modificar
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm "
                  type="button"
                  onClick={() => dispatch(eliminarFavoritoAsincrono(peli.id))}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modal === true ? <ModalFav modal={datosModal} /> : ""}
    </div>
  );
};

export default ListaPeliculasAgregadas;
