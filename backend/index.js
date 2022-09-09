import express from "express";
import cors from "cors";
import {getPeople, getPlanets, getStarships, getVehicles} from "./controller.js";
import users from "./users.json" assert {type: 'json'};
import jwt from "jsonwebtoken";
const port = 3000;
let authorizationProc = null;

const keyToken = 'SOLVVE-IS-GRET-COMPANY'
const app = express();
app.use(
  cors({
    origin: `*`,
  })
);

app.listen(3000);

app.use(express.json())
app.use((req, res, next) => {
  if (req.headers.authorization){
   jwt.verify(req.headers.authorization.split(' ')[1], keyToken, (err, payload) => {
     if (err) {authorizationProc = false}
     if (payload) {authorizationProc = true }
   })
 }
   next();
 });

 
app.post('/auth', (req, res) => {
    for (let user of users) {
    if (
      req.body.auth.username === user.login &&
      req.body.auth.password === user.password
    ) {
      return res.status(200).json({
        id: user.id,
        login: user.login,
        token: jwt.sign({ id: user.id }, keyToken, {expiresIn: `30s`}),
      })
    }
  }
  return res.status(404).json({ message: 'User not found' })
})

app.get('/auth', (req, res) => {
  if (authorizationProc) {res.send(true)} else {res.send(false)};
});


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
