
import React, { useEffect, useState } from "react";
import {
  getMedias,
  createMedia,
  deleteMedia,
  updateMedia,
  getGeneros,
  getDirectores,
  getProductoras,
  getTipos,
} from "../services/api";

function Media() {
  const [medias, setMedias] = useState([]);

  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);

  const [form, setForm] = useState({
    titulo: "",
    anioEstreno: "",
    genero: "",
    director: "",
    productora: "",
    tipo: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    cargarTodo();
  }, []);

  const cargarTodo = async () => {
    const [m, g, d, p, t] = await Promise.all([
      getMedias(),
      getGeneros(),
      getDirectores(),
      getProductoras(),
      getTipos(),
    ]);

    setMedias(m.data);
    setGeneros(g.data);
    setDirectores(d.data);
    setProductoras(p.data);
    setTipos(t.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await updateMedia(editingId, form);
      setEditingId(null);
    } else {
      await createMedia(form);
    }

    setForm({
      titulo: "",
      anioEstreno: "",
      genero: "",
      director: "",
      productora: "",
      tipo: "",
    });

    cargarTodo();
  };

  const handleEdit = (m) => {
    setForm({
      titulo: m.titulo,
      anioEstreno: m.anioEstreno,
      genero: m.genero?._id,
      director: m.director?._id,
      productora: m.productora?._id,
      tipo: m.tipo?._id,
    });

    setEditingId(m._id);
  };

  const handleDelete = async (id) => {
    await deleteMedia(id);
    cargarTodo();
  };

  return (
    <div className="container mt-5">
      <h2>🎬 Gestión de Películas</h2>

      {/* FORMULARIO */}
      <form onSubmit={handleSubmit} className="mb-4">

        <input
          className="form-control mb-2"
          placeholder="Título"
          value={form.titulo}
          onChange={(e) =>
            setForm({ ...form, titulo: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Año"
          value={form.anioEstreno}
          onChange={(e) =>
            setForm({ ...form, anioEstreno: e.target.value })
          }
        />

        {/* SELECT GENERO */}
        <select
          className="form-control mb-2"
          value={form.genero}
          onChange={(e) =>
            setForm({ ...form, genero: e.target.value })
          }
        >
          <option value="">Seleccione Género</option>
          {generos.map((g) => (
            <option key={g._id} value={g._id}>
              {g.nombre}
            </option>
          ))}
        </select>

        {/* SELECT DIRECTOR */}
        <select
          className="form-control mb-2"
          value={form.director}
          onChange={(e) =>
            setForm({ ...form, director: e.target.value })
          }
        >
          <option value="">Seleccione Director</option>
          {directores.map((d) => (
            <option key={d._id} value={d._id}>
              {d.nombre}
            </option>
          ))}
        </select>

        {/* SELECT PRODUCTORA */}
        <select
          className="form-control mb-2"
          value={form.productora}
          onChange={(e) =>
            setForm({ ...form, productora: e.target.value })
          }
        >
          <option value="">Seleccione Productora</option>
          {productoras.map((p) => (
            <option key={p._id} value={p._id}>
              {p.nombre}
            </option>
          ))}
        </select>

        {/* SELECT TIPO */}
        <select
          className="form-control mb-3"
          value={form.tipo}
          onChange={(e) =>
            setForm({ ...form, tipo: e.target.value })
          }
        >
          <option value="">Seleccione Tipo</option>
          {tipos.map((t) => (
            <option key={t._id} value={t._id}>
              {t.nombre}
            </option>
          ))}
        </select>

        <button className="btn btn-danger">
          {editingId ? "Actualizar" : "Crear"}
        </button>
      </form>

      {/* TABLA */}
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Título</th>
            <th>Año</th>
            <th>Género</th>
            <th>Director</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {medias.map((m) => (
            <tr key={m._id}>
              <td>{m.titulo}</td>
              <td>{m.anioEstreno}</td>
              <td>{m.genero?.nombre}</td>
              <td>{m.director?.nombre}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(m)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(m._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Media;


