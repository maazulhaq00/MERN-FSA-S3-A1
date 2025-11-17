import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/connectToDB.js";
import cors from "cors";

import movieRouter from "./routers/movieRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

connectToDB();

app.get("/", (req, res) => {
  return res.status(200).json({ messege: "Welcome to Movie App" });
});

app.use("/movies", movieRouter); 

app.listen(process.env.PORT, () => {
  console.log(`App running: http://localhost:${process.env.PORT}`);
});
