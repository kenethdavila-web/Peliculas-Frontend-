import React, { useEffect, useState } from "react";
import {
  getTipos,
  createTipo,
  updateTipo,
  deleteTipo,
} from "../services/api";

function Tipos() {
  const [tipos, setTipos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    cargarTipos();
  }, []);

  const cargarTipos = async () => {
    const res = await getTipos();
    setTipos(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateTipo(editingId, { nombre });
      setEditingId(null);
    } else {
      await createTipo({ nombre });
    }

    setNombre("");
    cargarTipos();
  };

  const handleEdit = (g) => {
    setNombre(g.nombre);
    setEditingId(g._id);
  };

  const handleDelete = async (id) => {
    await deleteTipo(id);
    cargarTipos();
  };

  return (
    <div className="container mt-5">
      <h2>🎭 Tipos</h2>

      <form onSubmit={handleSubmit} className="mb-3">
        <input
          className="form-control mb-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del tipo"
        />

        <button className="btn btn-danger">
          {editingId ? "Actualizar" : "Crear"}
        </button>
      </form>

      <ul className="list-group">
        {tipos.map((g) => (
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

export default Tipos;