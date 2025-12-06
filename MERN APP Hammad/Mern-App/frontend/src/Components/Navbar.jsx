import React from 'react';
import './Navbar.css';  // Importing custom CSS for styling
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/add-cat" className="navbar-logo-text">MyApp</Link>
                </div>
                <ul className="navbar-links">
                    <li><Link to={"/add-cat"} className="navbar-link">Add-Category</Link></li>

                    <li><Link to={"/display-cat"} className="navbar-link">
                        Display-Categories</Link></li>


                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
