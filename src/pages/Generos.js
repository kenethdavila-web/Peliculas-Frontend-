import React, { useEffect, useState } from "react";
import { getGeneros } from "../services/api";

function Generos() {

  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    cargarGeneros();
  }, []);

  const cargarGeneros = async () => {
    try {
      const res = await getGeneros();
      setGeneros(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Lista de Géneros</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {generos.map((g) => (
            <tr key={g._id}>
              <td>{g._id}</td>
              <td>{g.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Generos;