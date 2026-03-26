import React, { useEffect, useState } from "react";
import { getMedias } from "../services/api";

function Media() {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    cargarMedias();
  }, []);

  const cargarMedias = async () => {
    try {
      const res = await getMedias();
      setMedias(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>🎬 Lista de Medias</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Año</th>
            <th>Género</th>
            <th>Director</th>
            <th>Productora</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {medias.map((m) => (
            <tr key={m._id}>
              <td>{m.titulo}</td>
              <td>{m.anioEstreno}</td>
              <td>{m.genero?.nombre}</td>
              <td>{m.director?.nombre}</td>
              <td>{m.productora?.nombre}</td>
              <td>{m.tipo?.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Media;