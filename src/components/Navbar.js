import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🎬  MoviesApp
        </Link>

        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/media">Media</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/generos">Géneros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/directores">Directores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productoras">Productoras</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tipos">Tipos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;