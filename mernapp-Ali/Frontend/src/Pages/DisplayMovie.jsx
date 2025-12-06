import { useEffect, useState } from "react";
import axios from "axios";

function DisplayMovies() {

  const [movies, setMovies] = useState([]);

  const [alert,setAlert]= useState({
    success:true,
    message:""
  })

    const apiUrl = "http://localhost:2001"; 

  const fetchMovies = async () => {
    try {
      const res = await axios.get(`${apiUrl}/movies`);
      if (res.data.success) {
        setMovies(res.data.movies);
      }
    } 
    catch (err) {
       console.log(err);

            setAlert({
                success: false,
                message: "Fail to fetch"
            })
    } 
    }
  

  useEffect(() => {
    fetchMovies();
  }, []);



  return (
    <div
      className="container py-5"
      style={{ background: "linear-gradient(135deg, #e3f2fd, #bbdefb)", minHeight: "100vh" }}
    >
          {
                    alert.message && (<div className={`alert ${alert.success ? "alert-success" : "alert-danger"}`} role="alert">
                        {alert.message}
                    </div>)
                }
      <h2 className="text-center text-primary fw-bold mb-4">
        🎬 Movie Collection
      </h2>

      {movies.length === 0 ? (
        <div className="text-center text-muted">No movies found.</div>
      ) : (
        <div className="row">
          {
          movies.map((movie) => (
            <div key={movie._id} className="col-md-4 mb-4">
              <div className="card shadow-sm border-0" style={{ borderRadius: "15px" }}>
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">{movie.title}</h5>
                  <p className="card-text mb-1"><strong>Director:</strong> {movie.director}</p>
                  <p className="card-text mb-1"><strong>Year:</strong> {movie.releaseYear}</p>
                  <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      )}
    </div>
  );
}

export default DisplayMovies;
