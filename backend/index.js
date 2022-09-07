import express from "express";
import axios from "axios";
import cors from "cors";

const axiosAPI = axios.create({
  baseURL: "http://swapi.dev/api",
});
const app = express();
app.use(
  cors({
    origin: `*`,
  })
);
app.listen(3000);

app.get("/people", (req, res) => {
  if (req.query.page) {
    axiosAPI.get(`people/?page=${req.query.page}`).then((result) => {
      res.send(result.data);
    });
  } else {
    axiosAPI.get(`people/`).then((result) => {
      res.send(result.data);
    });
  }
});

app.get("/planets", (req, res) => {
  if (req.query.page) {
    axiosAPI.get(`planets/?page=${req.query.page}`).then((result) => {
      res.send(result.data);
    });
  } else {
    axiosAPI.get(`planets/`).then((result) => {
      res.send(result.data);
    });
  }
});

app.get("/starships", (req, res) => {
  if (req.query.page) {
    axiosAPI.get(`starships/?page=${req.query.page}`).then((result) => {
      res.send(result.data);
    });
  } else {
    axiosAPI.get(`starships/`).then((result) => {
      res.send(result.data);
    });
  }
});

app.get("/vehicles", (req, res) => {
  if (req.query.page) {
    axiosAPI.get(`vehicles/?page=${req.query.page}`).then((result) => {
      res.send(result.data);
    });
  } else {
    axiosAPI.get(`vehicles/`).then((result) => {
      res.send(result.data);
    });
  }
});

export default app;
