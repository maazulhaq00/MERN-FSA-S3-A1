import Movie from "../models/movie.js"


const createMovie = async (req,res)=> {
try{

      let { title, director, releaseYear, genre } = req.body;

    const existedmovie = await Movie.findOne({ title });
    if (existedmovie) {
      return res.status(409).json({ success: false, message: `Movie ${title} already exists` });
    }

    const movie = await Movie.create({ title, director, releaseYear, genre });

    // 👇 yahan message add kar
    return res.status(201).json({ success: true, message: "Movie Added Successfully",movie});
  }

  catch (err) {
    return res.status(500).json({success: false, message: "Internal Server error",error: err});
   }

}

const FetchMovies = async (req, res) => {
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


const upadteMovie = async (req,res) =>{
 try{
   const movieId = req.params.id
 const existedmovie = await Movie.findOne({_id: movieId})

    if(!existedmovie){
        return res.status(404).json({success:false,message: `Movie doesnot exists`})
    }
const {title,director,releaseYear,genre}= req.body

await Movie.findByIdAndUpdate(movieId,{title,director,releaseYear,genre});

const updateMovie= await Movie.findOne({_id: movieId})

return res.status(200).json({success:true,update_movie: updateMovie})

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
            return res.status(404).json({ success: false, message: `Movie doesnot exists` })
        }

        await Movie.findByIdAndDelete(movieId)

        return res.status(200).json({ success: true, message: "Movie deleted successfully" })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

export{
    createMovie,FetchMovies,fetchMovieById,upadteMovie,deleteMovie
}