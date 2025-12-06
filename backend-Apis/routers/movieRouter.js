import * as movieController from '../controllers/movieController.js'
import express from "express"

const movieRouter =  express.Router()

movieRouter.post("/", movieController.createMovie )
movieRouter.get("/", movieController.fetchMovies )
movieRouter.get("/:id", movieController.fetchMovieById)
movieRouter.put("/:id", movieController.updateMovie)
movieRouter.delete("/:id",movieController.deleteMovie)


export default movieRouter
