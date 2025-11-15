import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie() {

  let navigate=useNavigate()
let[movie,setMovie]=useState(
    {
        title:"abc",
        director:"abc",
        releaseYear:"abc",
        genre:"abc"

    })

let [alert,setAlert]=useState({
  status:true,
  message:""
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
        setAlert(
          {
  status:res.data.success,
  message:"Movie Added Successfully"
}
)

navigate("/displaymovies")

    }else{
setAlert(
  {
    status:res.data.success,
    message:res.data.message
  }
)
    }
}catch(err){
  
  setAlert(
    {
      status:err.response.data.success,
      message:err.response.data.message
    }
  )
  console.log(`catch block is running  : ${err.response.data.message}`)

}


}

    return (  
<>
<div className="container">

<div className="row">
  <div className="col-lg-12">
    
    
{   
alert.message &&
(
<div className={`alert ${alert.status?"alert-success":"alert-danger"}`} role="alert">
  {alert.message}
</div>
)

}


  </div>
  <div className="mb-3 col-12">
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
<div className="text-center">

  <button onClick={AddMovieOnSubmit} className="btn btn-warning">Add Movie</button>
</div>


</div>

</div>


</>

    );
}

export default AddMovie;