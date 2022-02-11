import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import RouterPublic from "./RouterPublic";
import { PrivateRoute } from "./PrivateRoute";
import RouterPrivate from "./RouterPrivate";
import { PublicRoute } from "./PublicRouter";

function AppRouters() {
  const [logged, setLogged] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
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
      <NavBar />
      <Router>
        <Routes>
          <Route
            path="*"
            isAuthenticated={logged}
            element={
              <PublicRoute>
                <RouterPublic />
              </PublicRoute>
            }
          />

          <Route
            path="/favoritos"
            isAuthenticated={logged}
            element={
              <PrivateRoute>
                <RouterPrivate />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouters;
