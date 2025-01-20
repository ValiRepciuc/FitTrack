import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Creăm contextul de autentificare
export const AuthContext = createContext();

// Furnizor pentru AuthContext
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    accessToken: null,
    username: null,
  });

  // Inițializează token-ul de acces din localStorage la reîmprospătarea paginii
  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      refreshAccessToken(refreshToken);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_LOGIN_ENDPOINT}`,
        credentials
      );
      const { access, refresh, username } = response.data;

      // Actualizăm starea cu token-ul de acces și username
      setAuth({ accessToken: access, username });
      localStorage.setItem("refreshToken", refresh);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REFRESH_TOKEN_ENDPOINT}`,
        { refresh: refreshToken }
      );
      const { access } = response.data;

      // Actualizăm doar token-ul de acces
      setAuth((prevAuth) => ({
        ...prevAuth,
        accessToken: access,
      }));
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      logout();
    }
  };

  const logout = () => {
    setAuth({ accessToken: null, username: null });
    localStorage.removeItem("refreshToken");
    window.location.href = "/"; // Redirecționare la login
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        login,
        logout,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
