import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaEdit, FaTrash } from "react-icons/fa";
import "./DisplayMovie.css";

function DisplayMovie() {

    const navigate = useNavigate();

    const apiUrl = "http://localhost:3001"

    const [movies, setMovies] = useState([]);

    const [alert, setAlert] = useState({
        success: true,
        message: ""
    })

    const fetchMovies = async () => {
        try {
            const res = await axios.get(`${apiUrl}/movies`)
            console.log(res);
            setMovies(res.data.movies)
        } catch (err) {
            console.log(err);
            setAlert({
                success: false,
                message: "fail to Fetch"
            })

        }
    }
    useEffect(() => {
        fetchMovies()
    }, [])
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${apiUrl}/movies/${id}`);
            setAlert({ success: true, message: "Movie deleted successfully" });
            fetchMovies();
        } catch (err) {
            console.log(err);
            setAlert({ success: false, message: "Failed to delete" });
        }
    };

  const handleEdit = (movie) => {
    navigate(`/editmovie/${movie._id || movie.id}`);
  };
    return (
        <>
            <div className="container my-4">
                {alert.message && (
                    <div className={`alert ${alert.success ? "alert-success" : "alert-danger"}`} role="alert">
                        {alert.message}
                    </div>
                )}

                <h3>Movie List</h3>
                {movies.length === 0 ? (
                    <p>No movies available.</p>
                ) : (
                    <table className="table table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Title</th>
                                <th>Director</th>
                                <th>Release Year</th>
                                <th>Genre</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie) => (
                                <tr key={movie._id || movie.id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.releaseYear}</td>
                                    <td>{movie.genre}</td>
                                    <td className="actions">
                                        <FaEdit className="icon edit" onClick={() => handleEdit(movie)} />
                                        <FaTrash className="icon delete" onClick={() => handleDelete(movie._id || movie.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default DisplayMovie;