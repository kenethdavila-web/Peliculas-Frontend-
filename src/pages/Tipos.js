import React, { useEffect, useState } from "react";
import { getTipos } from "../services/api";

function Tipos() {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    cargarTipos();
  }, []);

  const cargarTipos = async () => {
    try {
      const res = await getTipos();
      setTipos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Lista de Tipos</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {tipos.map((t) => (
            <tr key={t._id}>
              <td>{t._id}</td>
              <td>{t.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tipos;