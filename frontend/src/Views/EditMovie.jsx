import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddMovie.css";

function EditMovie() {
    const { id } = useParams(); // movie id from route
    const navigate = useNavigate();
    const apiUrl = `http://localhost:3001/movies/${id}`;

    const [movie, setMovie] = useState({
        title: "",
        director: "",
        releaseYear: "",
        genre: ""
    });

    const [alert, setAlert] = useState({ success: true, message: "" });

    const fetchMovie = async () => {
        try {
            const res = await axios.get(apiUrl);
            if (res.data.movie) {
                setMovie(res.data.movie);
            }
        } catch (err) {
            console.log(err);
            setAlert({ success: false, message: "Failed to fetch movie" });
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMovie((prev) => ({
            ...prev,
            [name]: value
        }
        ));
    };
    const handleUpdate = async () => {
        try {
            const res = await axios.put(apiUrl, movie);
            setAlert({
                success: res.data.success,
                message: res.data.message
            })
            
            navigate("/displaymovies");

        }
        catch (err) {
            console.log(err);
            
            setAlert({
                success: false,
                message: "Fail to update categroy"
            })
        }
    };

    return (
        <div className="add-movie-container">
            {alert.message && (
                <div className={`alert ${alert.success ? "success" : "error"}`}>
                    {alert.message}
                </div>
            )}

            <h3 className="title">Edit Movie</h3>

            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={movie.title}
                    onChange={handleInputChange}
                    placeholder="Enter movie title"
                />
            </div>

            <div className="form-group">
                <label>Director</label>
                <input
                    type="text"
                    name="director"
                    value={movie.director}
                    onChange={handleInputChange}
                    placeholder="Enter director name"
                />
            </div>

            <div className="form-group">
                <label>Release Year</label>
                <input
                    type="number"
                    name="releaseYear"
                    value={movie.releaseYear}
                    onChange={handleInputChange}
                    placeholder="Enter release year"
                />
            </div>

            <div className="form-group">
                <label>Genre</label>
                <input
                    type="text"
                    name="genre"
                    value={movie.genre}
                    onChange={handleInputChange}
                    placeholder="Enter genre"
                />
            </div>

            <button className="btn-submit" onClick={handleUpdate}>
                Update Movie
            </button>
        </div>
    );
}

export default EditMovie;
