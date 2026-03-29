import React, { useEffect, useState } from "react";
import {
  getGeneros,
  createGenero,
  updateGenero,
  deleteGenero,
} from "../services/api";

function Generos() {
  const [generos, setGeneros] = useState([]);
  const [nombre, setNombre] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    cargarGeneros();
  }, []);

  const cargarGeneros = async () => {
    const res = await getGeneros();
    setGeneros(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateGenero(editingId, { nombre });
      setEditingId(null);
    } else {
      await createGenero({ nombre });
    }

    setNombre("");
    cargarGeneros();
  };

  const handleEdit = (g) => {
    setNombre(g.nombre);
    setEditingId(g._id);
  };

  const handleDelete = async (id) => {
    await deleteGenero(id);
    cargarGeneros();
  };

  return (
    <div className="container mt-5">
      <h2>🎭 Géneros</h2>

      <form onSubmit={handleSubmit} className="mb-3">
        <input
          className="form-control mb-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del género"
        />

        <button className="btn btn-danger">
          {editingId ? "Actualizar" : "Crear"}
        </button>
      </form>

      <ul className="list-group">
        {generos.map((g) => (
          <li
            key={g._id}
            className="list-group-item d-flex justify-content-between"
          >
            {g.nombre}

            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleEdit(g)}
              >
                Editar
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(g._id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Generos;