
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
      <h2 className="mb-4 text-center">🎬 Catálogo de Películas</h2>

      <div className="row">
        {medias.map((m) => (
          <div className="col-md-4 mb-4" key={m._id}>
            <div className="card shadow h-100">
              
              <img
                src={m.imagen || "https://via.placeholder.com/300x200"}
                className="card-img-top"
                alt={m.titulo}
              />

              <div className="card-body">
                <h5 className="card-title">{m.titulo}</h5>
                <p className="card-text">{m.sinopsis}</p>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    🎭 {m.genero?.nombre}
                  </li>
                  <li className="list-group-item">
                    🎬 {m.director?.nombre}
                  </li>
                  <li className="list-group-item">
                    🏢 {m.productora?.nombre}
                  </li>
                  <li className="list-group-item">
                    📺 {m.tipo?.nombre}
                  </li>
                </ul>
              </div>

              <div className="card-footer text-muted">
                📅 {m.anioEstreno}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;
