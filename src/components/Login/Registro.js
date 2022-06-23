import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RegistroAsincrono } from "../../actions/actionRegistro";
import "./Registro.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Registro = () => {
  const dispatch = useDispatch();

  const [registro, setRegistro] = useState({
    nombre: "",
    email: "",
    pass1: "",
    pass2: "",
  });

  const { nombre, email, pass1, pass2 } = registro;

  const handleInputChange = ({ target }) => {
    setRegistro({
      ...registro,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegistroAsincrono(email, pass1, nombre));
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <div className="ContainerAll">
      <form onSubmit={handleSubmit}>
        <div className="ContainerInputs">
          <div className="Input">
            <label>Nombre</label>
            <input
              className="inputAlone"
              type="text"
              placeholder="Enter name"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
            />
          </div>

          <div className="Input">
            <label>Correo</label>
            <input
              className="inputAlone"
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="Input">
            <label>Contraseña</label>
            <input
              className="inputAlone"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="pass1"
              value={pass1}
              onChange={handleInputChange}
            />
            <button onClick={handleShowClick} className="mostrarContraseña">
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>

          <div className="Input">
            <label>Repita contraseña</label>
            <input
              className="inputAlone"
              type="password"
              placeholder="Password"
              name="pass2"
              value={pass2}
              onChange={handleInputChange}
            />
          </div>

          <button variant="primary" type="submit" className="btn">
            Registrarse
          </button>

          <Link to="/login" type="button" className="btn">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
