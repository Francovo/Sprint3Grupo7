import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PrivateRoute } from "./PrivateRoute";
import RouterPrivate from "./RouterPrivate";
import { PublicRoute } from "./PublicRouter";
import { Registro } from "../components/Login/Registro";
import Login from "../components/Login/Login";
import Home from "../components/Home";
import MasValoradas from "../components/Favoritos-Valoradas/MasValoradas";
import NavBarPublic from "../components/NavBar/NavBarPublic";
import MenosValoradas from "../components/Favoritos-Valoradas/MenosValoradas";

function AppRouters() {
  const [search, setSearch] = useState([]);

  const [logged, setLogged] = useState(false);
  const [checking, setChecking] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user?.uid) {
        console.log(user);
        console.log("Logueado");
        setLogged(true);
      } else {
        console.log("no log");
        setLogged(false);
      }
      setChecking(false);
    });
  }, [setLogged, setChecking]);
  if (checking) {
    return <h1>Espere...</h1>;
  }


  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/registro"
            element={
              <PublicRoute isAuthenticated={logged}>
                <NavBarPublic setSearch={setSearch} />

                <Registro />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute isAuthenticated={logged}>
                <NavBarPublic setSearch={setSearch} />

                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/home"
            element={
              <PublicRoute isAuthenticated={logged}>
                <NavBarPublic setSearch={setSearch} />

                <Home search={search} />
              </PublicRoute>
            }
          />
          <Route
            path="/masvaloradas"
            element={
              <PublicRoute isAuthenticated={logged}>
                <NavBarPublic setSearch={setSearch} />

                <MasValoradas search={search}/>
              </PublicRoute>
            }
          />
          <Route
            path="/menosvaloradas"
            element={
              <PublicRoute isAuthenticated={logged}>
                <NavBarPublic setSearch={setSearch} />

                <MenosValoradas search={search}/>
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute isAuthenticated={logged}>
                <RouterPrivate search={search} setSearch={setSearch} />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouters;
