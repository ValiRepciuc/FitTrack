import axios from "axios";
import AuthContext from "../Contexts/AuthContext";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const { accessToken } = React.useContext(AuthContext);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const { refreshAccessToken } = React.useContext(AuthContext);
      await refreshAccessToken(localStorage.getItem("refreshToken"));

      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
