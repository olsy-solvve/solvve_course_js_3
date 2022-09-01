import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api",
});

api.interceptors.request.use((config) => {
  // set token to headers
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    alert(err.stasusCode);
    return err;
  }
);

export const getVehicle = (query) => {
  return api.get("", query);
};

export default api;
