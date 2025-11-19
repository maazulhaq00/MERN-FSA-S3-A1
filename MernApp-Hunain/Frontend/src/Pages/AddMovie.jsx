import { useState } from "react";
import axios from "axios"

function AddMovie() {
  const apiUrl = "http://localhost:2001"

    const [movie, setMovie] = useState({
        title: "",
        director: "",
        releaseYear:"",
        genre:""
    })

    const [alert, setAlert] = useState({
        success: true,
        message: ""
    })

    const handleMovieInputChange = (e) => {
        let { name, value } = e.target
    
        setMovie((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleMovieSubmit = async () => {
        try {
            const res = await axios.post(`${apiUrl}/movies`, movie)
            console.log(res);

            if (res.data.success) {
                setAlert({
                    success: true,
                    message: "Movie Added successfully"
                })
            }
            else {
                setAlert({
                    success: false,
                    message: res.data.message
                })
            }

            setMovie({
        title: "",
        director: "",
        releaseYear:"",
        genre:""
            })


        }
        catch (err) {
            console.log(err);

            setAlert({
                success: false,
                message: err.response.data.message
            })
        }
    }
 
    

    return ( 
    <>
  

     <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #007bff, #00b4d8)",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "400px",
          borderRadius: "15px",
        }}
      >  
       {
       alert.message && (<div className={`alert ${alert.success ? "alert-success" : "alert-danger"}`} role="alert">
        {alert.message}
      </div>)
        }
        <h3 className="text-center mb-4 text-primary fw-bold">
          🎥 Add New Movie
        </h3>
       

       
          <div className="mb-3">
            <label className="form-label fw-semibold">Title</label>
            <input
              type="text" name="title" value={movie.title} className="form-control" onChange={handleMovieInputChange} placeholder="Enter movie title"/>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Director</label>
            <input
              type="text" name="director" value={movie.director} className="form-control" onChange={handleMovieInputChange} placeholder="Enter director name"/>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Release Year</label>
            <input type="number" name="releaseYear" value={movie.releaseYear} className="form-control" onChange={handleMovieInputChange} placeholder="e.g. 2024" />
          </div>

           <div className="mb-3">
            <label className="form-label fw-semibold">Genre</label>
            <input type="text" name="genre" value={movie.genre} className="form-control" onChange={handleMovieInputChange} placeholder="Enter genre"
            />
          </div>

          <button type="button" className="btn btn-primary w-100 fw-semibold mt-3"  onClick={handleMovieSubmit}
          style={{ borderRadius: "10px" }}>
            Add Movie
          </button>
       
      </div>
    </div>
    </>
 );
}

export default AddMovie;