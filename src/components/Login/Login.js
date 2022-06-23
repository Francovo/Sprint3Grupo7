import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  loginEmailPassAsincrono,
  loginGoogleAsincrono,
} from "../../actions/actionLogin";
import { useDispatch } from "react-redux";
import "./Registro.scss";

function Login() {
  const dispatch = useDispatch();

  const [registro, setRegistro] = useState({
    email: "",
    pass: "",
  });

  const { email, password } = registro;

  const handleInputChange = ({ target }) => {
    setRegistro({
      ...registro,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassAsincrono(email, password));
  };

  const handleGoogleAsincrono = () => {
    dispatch(loginGoogleAsincrono());
  };

  return (
    <div className="ContainerAll">
      <form onSubmit={handleSubmit}>
        <div className="ContainerInputs">
          <div className="Input">
            <label>Correo</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="Input">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength={6}
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <button variant="primary" type="submit">
            Enviar
          </button>

            <div className="google" onClick={() => handleGoogleAsincrono()}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
            </div>
          <Link to="/registro" className="btn">Registrarse</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
