import axios from "axios";

const HOST = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: `${HOST}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_TMDB_TOKEN;
    if (token) {
      config.headers!["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
