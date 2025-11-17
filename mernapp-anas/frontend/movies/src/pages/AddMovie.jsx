import { useState } from "react";
import axios from "axios";

function AddMovie() {
  const apiUrl = "http://localhost:3001";

  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: ""
  });

  const [alert, setAlert] = useState({
    success: true,
    message: ""
  });

  const handleMovieInputChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMovieSubmit = async () => {
    try {
      const res = await axios.post(`${apiUrl}/movies`, movie);
      if (res.data.success) {
        setAlert({
          success: true,
          message: "Movie added successfully!"
        });
      } else {
        setAlert({
          success: false,
          message: res.data.message || "Something went wrong"
        });
      }
      setMovie({
        title: "",
        director: "",
        genre: "",
        releaseYear: ""
      });
    } catch (err) {
      console.log(err);
      setAlert({
        success: false,
        message: err.response?.data?.message || "Error adding movie"
      });
    }
  };

  return (
    <div className="container my-4">
      {alert.message && (
        <div
          className={`alert ${alert.success ? "alert-success" : "alert-danger"}`}
          role="alert"
        >
          {alert.message}
        </div>
      )}

      <h3>Add Movie</h3>

      <div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleMovieInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="director" className="form-label">Director</label>
          <input
            type="text"
            className="form-control"
            id="director"
            name="director"
            value={movie.director}
            onChange={handleMovieInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            value={movie.genre}
            onChange={handleMovieInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="releaseYear" className="form-label">Release Year</label>
          <input
            type="number"
            className="form-control"
            id="releaseYear"
            name="releaseYear"
            value={movie.releaseYear}
            onChange={handleMovieInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <button type="button" className="btn btn-dark" onClick={handleMovieSubmit}>
            Add Movie
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
