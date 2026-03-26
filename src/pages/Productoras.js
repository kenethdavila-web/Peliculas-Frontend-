import React, { useEffect, useState } from "react";
import { getProductoras } from "../services/api";

function Productoras() {
  const [productoras, setProductoras] = useState([]);

  useEffect(() => {
    cargarProductoras();
  }, []);

  const cargarProductoras = async () => {
    try {
      const res = await getProductoras();
      setProductoras(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Lista de Productoras</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {productoras.map((p) => (
            <tr key={p._id}>
              <td>{p._id}</td>
              <td>{p.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productoras;