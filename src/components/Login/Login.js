import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  loginEmailPassAsincrono,
  loginGoogleAsincrono,
} from "../../actions/actionLogin";
import { useDispatch } from "react-redux";

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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>

      <Container className="auth__social-networks">
        <Container
          className="google-btn"
          onClick={() => handleGoogleAsincrono()}
        >
          <Container className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </Container>
        </Container>
      </Container>
      <Link to="/registro">Registrarse</Link>
    </Form>
  );
}

export default Login;
