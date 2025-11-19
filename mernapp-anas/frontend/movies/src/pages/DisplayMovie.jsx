import { useEffect, useState } from "react";
import axios from "axios";

function DisplayMovies() {
  const [movies, setMovies] = useState([]);

  const [alert, setAlert] = useState({
    success: true,
    message: ""
  });

  const apiUrl = "http://localhost:3001";

  const fetchMovies = async () => {
    try {
      const res = await axios.get(`${apiUrl}/movies`);
      console.log(res);

      
      if (res.data.movies) {
        setMovies(res.data.movies);
      } 
    
      else if (Array.isArray(res.data)) {
        setMovies(res.data);
      } 
      else {
        setMovies([]);
      }

    } catch (err) {
      console.log(err);
      setAlert({
        success: false,
        message: "Fail to fetch movies"
      });
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container my-4">
      <h3>All Movies</h3>

      {alert.message && (
        <div
          className={`alert ${alert.success ? "alert-success" : "alert-danger"}`}
          role="alert"
        >
          {alert.message}
        </div>
      )}

      {movies.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Genre</th>
              <th>Release Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id || movie.id}>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.genre}</td>
                <td>{movie.releaseYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-light" role="alert">
          No Movies Found
        </div>
      )}
    </div>
  );
}

export default DisplayMovies;
