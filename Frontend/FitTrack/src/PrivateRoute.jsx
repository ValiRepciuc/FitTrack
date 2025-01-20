import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.accessToken) {
    //daca nu este conectat se redirectioneaza la login/register
    return <Navigate to="/" replace />;
  }

  // Daca este autentificat, permite accesul
  return children;
};

export default PrivateRoute;
