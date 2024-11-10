import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    toast.error(error.response.data.message);
    return Promise.reject(error.response.data);
  }
);

export default instance;
