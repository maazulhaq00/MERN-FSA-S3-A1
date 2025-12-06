import  express  from "express"
import { createMovie, deleteMovie, fetchAllMovies, fetchMovieById, updateMovie } from "../Controller/MovieController.js"


let expressRouter=express.Router()

expressRouter.post("/addmovie",createMovie)
expressRouter.get("/movies",fetchAllMovies)
expressRouter.get("/movies/:id",fetchMovieById)
expressRouter.put("/updatemovie/:id",updateMovie)
expressRouter.delete("/deletemovie/:id",deleteMovie)

export default expressRouter
