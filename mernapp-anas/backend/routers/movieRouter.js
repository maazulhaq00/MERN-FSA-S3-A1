import * as movieController from "../controller/movieController.js";
import express from "express";

const movieRouter = express.Router();

movieRouter.post("/", movieController.createMovie);
movieRouter.get("/", movieController.fetchMovies);
movieRouter.get("/:id", movieController.fetchMoviesById);
movieRouter.put("/:id", movieController.updatedMovie);
movieRouter.delete("/:id", movieController.deleteMovie);

export default movieRouter;
