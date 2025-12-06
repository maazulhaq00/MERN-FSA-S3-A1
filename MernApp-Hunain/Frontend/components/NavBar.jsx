import { Link } from "react-router-dom";

function NavBar() {
    return ( 
    <>
   <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{
          background: "linear-gradient(90deg, #007bff, #00b4d8)",
        }}
      >
        <div className="container">
          {/* Brand + Add Movies */}
          <div className="d-flex align-items-center gap-3">
            <Link
              className="navbar-brand fw-bold text-white fs-4"
              to="/"
              style={{ letterSpacing: "1px" }}
            >
              🎬 MyBrand
            </Link>

            <Link
              className="nav-link text-white fw-semibold px-3 py-2 rounded-3 hover-shadow"
              to="/add-movie"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)")
              }
            >
              Add Movies
            </Link>

             <Link
              className="nav-link text-white fw-semibold px-3 py-2 rounded-3 hover-shadow"
              to="/display-movie"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)")
              }
            >
              Display Movies
            </Link>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler text-white border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Section (Right Side) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex ms-auto mt-3 mt-lg-0">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movies..."
                aria-label="Search"
                style={{ borderRadius: "25px", paddingLeft: "15px" }}
              />
              <button
                className="btn btn-light fw-semibold"
                type="submit"
                style={{
                  borderRadius: "25px",
                  padding: "6px 18px",
                  color: "#007bff",
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

    </> 
    );
}

export default NavBar;