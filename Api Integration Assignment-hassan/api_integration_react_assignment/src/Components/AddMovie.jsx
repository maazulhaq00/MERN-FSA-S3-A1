import axios from "axios";
import { useState } from "react";

function AddMovie() {

let[movie,setMovie]=useState(
    {
        title:"abc",
        director:"abc",
        releaseYear:"abc",
        genre:"abc"

    })

const handleMovieInput=(e)=>{
let {name,value}=e.target
setMovie(
    {
        ...movie,
        [name]:value
    }
)

}


const AddMovieOnSubmit=async()=>{
try{

    let res=await axios.post("http://localhost:5000/cinema/addmovie",movie)
    
    if(res.data.success){
        console.log(res.data)
    }else{
        console.log(res.data.message)

    }
}catch(err){
    console.log(`Error  : ${err.response.data.message}`)
    
}


}

    return (  
<>
<>
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput" className="form-label">
Title    </label>
    <input
      type="text"
      className="form-control"
      name="title"
      value={movie.title}
      onChange={handleMovieInput}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput2" className="form-label">
      Director
    </label>
    <input
      type="text"
      className="form-control"
      name="director"
      value={movie.director}
      onChange={handleMovieInput}
    />
  </div>



  <div className="mb-3">
    <label htmlFor="formGroupExampleInput2" className="form-label">
      Release Year
    </label>
    <input
      type="text"
      className="form-control"
      name="releaseYear"
      value={movie.releaseYear}
      onChange={handleMovieInput}
    />
  </div>

  
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput2" className="form-label">
      Genre
    </label>
    <input
      type="text"
      className="form-control"
      name="genre"
      value={movie.genre}
      onChange={handleMovieInput}
    />
  </div>

  <button onClick={AddMovieOnSubmit} className="btn btn-warning">Add Movie</button>




</>


</>

    );
}

export default AddMovie;