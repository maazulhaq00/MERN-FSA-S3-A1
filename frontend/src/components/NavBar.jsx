import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"> MoviesHub</div>
      <ul className="menu">
        <li><Link to="/" className="nav-link">Create Movie</Link></li>
        <li><Link to="/displaymovies" className="nav-link">Movie List</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
