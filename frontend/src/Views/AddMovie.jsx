import axios from "axios";
import { useState } from "react";
import "./AddMovie.css";

function AddMovie() {
    const apiUrl = "http://localhost:3001/movies";
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        releaseYear: "",
        genre: ""
    });

    const [alert, setAlert] = useState({
        success: true,
        message: ""
    });

    const handleInputMovieChange = (e) => {
        const { name, value } = e.target;
        setMovie((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleMovieSubmit = async () => {
        try {
            const res = await axios.post(apiUrl, movie);

            console.log("Movie Added Response:", res.data);

            if (res.data.success) {
                setAlert({ success: true, message: "Movie Added Successfully" });
                setMovie({ title: "", director: "", releaseYear: "", genre: "" });
            } else {
                setAlert({ success: false, message: res.data.message });
            }
        } catch (err) {
            console.log("Axios Error:", err.response ? err.response.data : err);log
            setAlert({
                success: false,
                message: err.response?.data?.message || "Something went wrong"
            });
        }
    };


    return (
        <div className="add-movie-container">
            {alert.message && (
                <div className={`alert ${alert.success ? "success" : "error"}`}>
                    {alert.message}
                </div>
            )}

            <h3 className="title">Add Movie</h3>

            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={movie.title}
                    onChange={handleInputMovieChange}
                    placeholder="Enter movie title"
                />
            </div>

            <div className="form-group">
                <label>Director</label>
                <input
                    type="text"
                    name="director"
                    value={movie.director}
                    onChange={handleInputMovieChange}
                    placeholder="Enter director name"
                />
            </div>

            <div className="form-group">
                <label>Release Year</label>
                <input
                    type="number"
                    name="releaseYear"
                    value={movie.releaseYear}
                    onChange={handleInputMovieChange}
                    placeholder="Enter release year"
                />
            </div>

            <div className="form-group">
                <label>Genre</label>
                <input
                    type="text"
                    name="genre"
                    value={movie.genre}
                    onChange={handleInputMovieChange}
                    placeholder="Enter genre"
                />
            </div>

            <button className="btn-submit" onClick={handleMovieSubmit}>
                Add Movie
            </button>
        </div>
    );
}

export default AddMovie;
