import express from "express";
import cors from "cors";
import {getPeople, getPlanets, getStarships, getVehicles} from "./controller.js";
import jwt from "jsonwebtoken";
import { fstat, readFileSync, writeFileSync } from "fs";
const PORT = 3000;
let authorizationProc = null;

const keyToken = 'SOLVVE-IS-GREAT-COMPANY';
const app = express();

app.use(
  cors({
    origin: `*`,
  })
);

app.listen(PORT);

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

 
app.post('/auth', async (req, res) => {
    // const users = await import('./users.json', { assert: { type: 'json' } }).then(c => c.default); // eslint-disable-line
    
    const users = JSON.parse(readFileSync("./users.json"));
    if (!users) {
      return res.status(403).json({ message: 'DB fall down' })
    }

    const {auth} = req.body;
    const currentUser = users.find(({login, password}) => (
      auth.login === login &&
      auth.password === password
    ));

    if (currentUser) {
      return res.status(200).json({
        id: currentUser.id,
        login: currentUser.login,
        token: jwt.sign({ id: currentUser.id }, keyToken, {expiresIn: `300s`}),
      });
    }
    

  return res.status(404).json({ message: 'User not found' });
})

app.get('/auth', (req, res) => {
  if (authorizationProc) {res.send(true)} else {res.send(false)}
});

app.post('/signup', async (req, res) => {
  
  const users = JSON.parse(readFileSync("./users.json"));
  if (!users) {
    return res.status(403).json({ message: 'DB fall down' })
  }
  
  const {newUser} = req.body;
  newUser.id = users[Object.keys(users).length - 1].id + 1;
  users.push(newUser);

  let newDataUser = JSON.stringify(users, null, 2);
  writeFileSync('./users.json', newDataUser);

  return res.status(200).json({
    id: newUser.id,
    login: newUser.login,
    token: jwt.sign({ id: newUser.id }, keyToken, {expiresIn: `30s`}),
  });
})

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
