import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "http://swapi.dev/api",
  });


export const getPeople = async (page = 1) => {
    return await axiosAPI.get(`people/?page=${page}`).then(({data}) => data);
}
export const getPlanets = async (page = 1) => {
    return await axiosAPI.get(`planets/?page=${page}`).then(({data}) => data);
}
export const getStarships = async (page = 1) => {
    return await axiosAPI.get(`starships/?page=${page}`).then(({data}) => data);
}
export const getVehicles = async (page = 1) => {
    return await axiosAPI.get(`vehicles/?page=${page}`).then(({data}) => data);
}

  export default {
    getPeople,
    getPlanets,
    getStarships,
    getVehicles
  }