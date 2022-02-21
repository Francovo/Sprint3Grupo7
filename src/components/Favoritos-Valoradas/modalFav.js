import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editarFavoritoAsincrono } from "../../actions/actionFavoritos";

export const ModalFav = (modal) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: modal.modal.id,
      imagen: modal.modal.imagen,
      nombre: modal.modal.nombre,
      año: modal.modal.año,
      sinopsis: modal.modal.sinopsis,
      calificacion: modal.modal.calificacion,
    },
    onSubmit: (modal) => {
      dispatch(editarFavoritoAsincrono(modal.id, modal));
    },
  });

  const [show, setShow] = useState(true);

  const cerrarModal = () => {
    setShow(false);
  };

  useEffect(() => {}, [modal]);

  return (
    <>
      <Modal show={show}>
        <Modal.Title>Edita tu pelicula</Modal.Title>

        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            {/* <input
              id="inputImagen"
              type="file"
              className="form-control"
              placeholder="Seleccionar Imagen"
              name="imagen"
              value={formik.values.imagen}
              onChange={formik.handleChange}
              required
            />
            <button type="button" className="btn btn-dark">
              Seleccionar Imagen
            </button> */}

            <input
              id="inputNombre"
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              required
              autoComplete="off"
            />

            <input
              id="inputAño"
              type="number"
              className="form-control mt-2"
              placeholder="Año"
              name="año"
              value={formik.values.año}
              onChange={formik.handleChange}
              required
              autoComplete="off"
              min="1900"
            />

            <textarea
              id="inputSinopsis"
              className="form-control mt-2"
              placeholder="Sinopsis"
              name="sinopsis"
              value={formik.values.sinopsis}
              onChange={formik.handleChange}
              required
              autoComplete="off"
            ></textarea>

            <input
              id="inputCalificacion"
              type="number"
              className="form-control mt-2"
              placeholder="Calificacion"
              name="calificacion"
              value={formik.values.calificacion}
              onChange={formik.handleChange}
              required
              autoComplete="off"
              min="1"
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={cerrarModal}>
                Close
              </Button>

              <Button variant="primary" onClick={cerrarModal} type="submit">
                Save changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
