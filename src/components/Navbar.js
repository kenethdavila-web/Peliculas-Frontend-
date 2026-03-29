import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "bg-dark shadow" : "bg-transparent"
      }`}
      style={{
        transition: "all 0.4s ease",
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">
          🎬 MoviesApp
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

     
      <style>
        {`
          .nav-link {
            transition: all 0.3s ease;
            color:white;
          }

          .nav-link:hover {
            color: #e50914 !important;
            transform: scale(1.1);
          }

          .logo {
            color: white !important;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .logo:hover {
            color: #e50914 !important;
            transform: scale(1.1);
            text-shadow: 0 0 10px rgba(229, 9, 20, 0.8);
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;