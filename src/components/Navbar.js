import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand logo" to="/">
          🎬 MoviesApp
        </Link>

        {/* BOTÓN MOBILE */}
        <button className="navbar-toggler" onClick={() => setOpen(!open)}>
           ☰
        </button>

        {/* MENÚ */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/media">
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/generos">
                Géneros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/directores">
                Directores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productoras">
                Productoras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tipos">
                Tipos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          .navbar-custom {
            background: rgba(10, 9, 9, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 15px rgba(7, 7, 7, 0.7);
<<<<<<< HEAD
            padding: 1px 0;
=======
            padding: 3.5px 0;
>>>>>>> a0f5b32b3ed871ee0792e3b96f688d939026d547
          }

          .logo {
            color: white !important;
            font-weight: bold;
            font-size: 1.4rem;
            transition: 0.3s;
          }

          .logo:hover {
            color: #e2131e !important;
            transform: scale(1.1);
            text-shadow: 0 0 10px rgba(226, 22, 32, 0.8);
          }

          .nav-link {
            color: #f1f1f1 !important;
            margin-left: 15px;
            transition: 0.3s;
            position: relative;
          }

          .nav-link:hover {
            color: #f0ecec !important;
          }

          /* EFECTO LINEA */
          .nav-link::after {
            content: "";
            display: block;
            height: 2px;
            width: 0;
            background: #df1620;
            transition: 0.3s;
            margin-top: 3px;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          /* BOTON MOBILE */
          .navbar-toggler {
            border: none;
            color: white;
            font-size: 24px;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;

