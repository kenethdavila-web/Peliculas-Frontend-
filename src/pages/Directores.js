import React, { useEffect, useState } from "react";

import {
  getDirectores,
  createDirector,
  updateDirector,
  deleteDirector,
} from "../services/api";

function Directores() {
  const [directores, setDirectores] = useState([]);
  const [nombre, setNombre] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    cargarDirectores();
  }, []);

  const cargarDirectores = async () => {
    const res = await getDirectores();
    setDirectores(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateDirector(editingId, { nombre });
      setEditingId(null);
    } else {
      await createDirector({ nombre });
    }

    setNombre("");
    cargarDirectores();
  };

  const handleEdit = (g) => {
    setNombre(g.nombre);
    setEditingId(g._id);
  };

  const handleDelete = async (id) => {
    await deleteDirector(id);
    cargarDirectores();
  };

  return (
    <div className="container mt-5">
      <h2>🎭 Directores</h2>

      <form onSubmit={handleSubmit} className="mb-3">
        <input
          className="form-control mb-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del director"
        />

        <button className="btn btn-danger">
          {editingId ? "Actualizar" : "Crear"}
        </button>
      </form>

      <ul className="list-group">
        {directores.map((g) => (
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

export default Directores;