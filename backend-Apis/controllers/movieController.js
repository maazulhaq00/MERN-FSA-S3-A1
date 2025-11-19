import Movie from "../models/movieModel.js"

const createMovie = async (req, res) => {
    try {
        let { title, director, releaseYear, genre } = req.body
        const existedMovie = await Movie.findOne({ title })
        if (existedMovie) {
            return res.status(409).json({ success: false, message: `Movie ${title} alreay exists` })
        }
        const movie = await Movie.create({ title, director, releaseYear, genre })
        return res.status(201).json({ success: true, movie })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}
const fetchMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json({ success: true, movies })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const fetchMovieById = async (req, res) => {
    try {
        const movieId = req.params.id

        const movie = await Movie.findById(movieId);

        return res.status(200).json({ success: true, movie })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const updateMovie = async (req, res) => {
    try {
        const movieId = req.params.id

        const existedMovie = await Movie.findOne({ _id: movieId })

        if (!existedMovie) {
            return res.status(404).json({ success: false, message: `Movie does not exists` })
        }

        
        const { title, director, releaseYear, genre } = req.body

        await Movie.findByIdAndUpdate(movieId, {title, director, releaseYear, genre});

        const updatedMovie = await Movie.findOne({_id: movieId})


        return res.status(200).json({ success: true, updated_movie: updatedMovie })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}
const deleteMovie =  async (req, res) => {
    try {
        const movieId = req.params.id

        const existedMovie = await Movie.findOne({ _id: movieId })

        if (!existedMovie) {
            return res.status(404).json({ success: false, message: `Movie does not exists` })
        }

        await Movie.findByIdAndDelete(movieId)

        return res.status(200).json({ success: true, message: "Movie deleted successfully" })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}
export{
    createMovie,fetchMovies,fetchMovieById,updateMovie,deleteMovie
}
