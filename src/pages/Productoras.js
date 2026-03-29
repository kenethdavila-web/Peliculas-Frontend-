import React, { useEffect, useState } from "react";
import {
  getProductoras,
  createProductora,
  updateProductora,
  deleteProductora,
} from "../services/api";

function Productoras() {
  const [productoras, setProductoras] = useState([]);
  const [nombre, setNombre] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    cargarProductoras();
  }, []);

  const cargarProductoras = async () => {
    const res = await getProductoras();
    setProductoras(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateProductora(editingId, { nombre });
      setEditingId(null);
    } else {
      await createProductora({ nombre });
    }

    setNombre("");
    cargarProductoras();
  };

  const handleEdit = (g) => {
    setNombre(g.nombre);
    setEditingId(g._id);
  };

  const handleDelete = async (id) => {
    await deleteProductora(id);
    cargarProductoras();
  };

  return (
    <div className="container mt-5">
      <h2>🎭 Productoras</h2>

      <form onSubmit={handleSubmit} className="mb-3">
        <input
          className="form-control mb-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del productora"
        />

        <button className="btn btn-danger">
          {editingId ? "Actualizar" : "Crear"}
        </button>
      </form>

      <ul className="list-group">
        {productoras.map((g) => (
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

export default Productoras;