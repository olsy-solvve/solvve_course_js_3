import express from "express";
import cors from "cors";
import {getPeople, getPlanets, getStarships, getVehicles} from "./controller.js";

const app = express();
app.use(
  cors({
    origin: `*`,
  })
);

app.listen(3000);

app.get("/people", async (req, res) => {
  const page = req.query.page || 1;
  const data = await getPeople(page);
  res.status(200).send(data)
});

app.get("/planets", async(req, res) => {
  const page = req.query.page || 1;
  const data = await getPlanets(page);
  res.status(200).send(data)
});

app.get("/starships", async(req, res) => {
  const page = req.query.page || 1;
  const data = await getStarships(page);
  res.status(200).send(data)
});

app.get("/vehicles", async(req, res) => {
  const page = req.query.page || 1;
  const data = await getVehicles(page);
  res.status(200).send(data)
});

export default app;
