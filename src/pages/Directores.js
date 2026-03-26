import React, { useEffect, useState } from "react";
import { getDirectores } from "../services/api";

function Directores() {
  const [directores, setDirectores] = useState([]);

  useEffect(() => {
    cargarDirectores();
  }, []);

  const cargarDirectores = async () => {
    try {
      const res = await getDirectores();
      setDirectores(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Lista de Directores</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {directores.map((d) => (
            <tr key={d._id}>
              <td>{d._id}</td>
              <td>{d.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Directores;