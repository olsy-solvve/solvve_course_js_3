import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
  if (localStorage.token) {
    const authLink = "http://localhost:3000/auth";
    axios.get(
      authLink,
      { headers: { Authorization: `Bearer ${localStorage.token}` } },
      {}
    );
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err.stasusCode);
    return err;
  }
);

export const getPeople = (query) => {
  return api.get(`people/?page=${query.page}`);
};

export const getPlanets = (query) => {
  return api.get(`planets/?page=${query.page}`);
};

export const getVehicles = (query) => {
  return api.get(`vehicles/?page=${query.page}`);
};

export const getStarships = (query) => {
  return api.get(`starships/?page=${query.page}`);
};

export default api;
