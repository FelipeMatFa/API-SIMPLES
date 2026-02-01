import express from 'express'
import dotenv from "dotenv";
import { connectMongo } from "./database/mongo.js";
import User from "./models/User.js";


dotenv.config();

const app = express()
app.use(express.json())

connectMongo();

const users = []

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000) 

/*
    cria nossa api de usuários

    - criar um usuário
    - Lista todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/