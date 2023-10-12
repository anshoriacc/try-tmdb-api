import axios from "axios";

const HOST = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${HOST}/v1/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
