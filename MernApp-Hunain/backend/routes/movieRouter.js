import * as MovieController from "../controllers/moviecontroller.js"
import express from "express"

 const movieRouter = express.Router()

 movieRouter.post("/",MovieController.createMovie)
 movieRouter.get("/",MovieController.FetchMovies)
 movieRouter.get("/:id",MovieController.fetchMovieById)
 movieRouter.put("/:id",MovieController.upadteMovie)
 movieRouter.delete("/:id",MovieController.deleteMovie)
 

 export default movieRouter