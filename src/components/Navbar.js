import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/generos">Generos</Link> |
      <Link to="/directores">Directores</Link> |
      <Link to="/productoras">Productoras</Link> |
      <Link to="/tipos">Tipos</Link> |
      <Link to="/media">Media</Link>
    </nav>
  );
}

export default Navbar;