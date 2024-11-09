import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Proverava korisnika iz AuthContext

  return user ? children : <Navigate to="/home" />; // Ako korisnik nije ulogovan, ide na login
};

export default ProtectedRoute;
