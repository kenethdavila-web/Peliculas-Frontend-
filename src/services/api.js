import axios from "axios";


const API = axios.create({
  baseURL: "https://ingenier-a-web-2-movies.onrender.com"
});

// =======================
// 🎭 GENEROS
// =======================
export const getGeneros = () => API.get("/genero");
export const createGenero = (data) => API.post("/genero", data);
export const updateGenero = (id, data) => API.put(`/genero/${id}`, data);
export const deleteGenero = (id) => API.delete(`/genero/${id}`);

// =======================
// 🎬 DIRECTORES
// =======================
export const getDirectores = () => API.get("/director");
export const createDirector = (data) => API.post("/director", data);
export const updateDirector = (id, data) => API.put(`/director/${id}`, data);
export const deleteDirector = (id) => API.delete(`/director/${id}`);

// =======================
// 🏢 PRODUCTORAS
// =======================
export const getProductoras = () => API.get("/productora");
export const createProductora = (data) => API.post("/productora", data);
export const updateProductora = (id, data) => API.put(`/productora/${id}`, data);
export const deleteProductora = (id) => API.delete(`/productora/${id}`);

// =======================
// 📺 TIPOS
// =======================
export const getTipos = () => API.get("/tipo");
export const createTipo = (data) => API.post("/tipo", data);
export const updateTipo = (id, data) => API.put(`/tipo/${id}`, data);
export const deleteTipo = (id) => API.delete(`/tipo/${id}`);

// =======================
// 🎥 MEDIA
// =======================
export const getMedias = () => API.get("/media");
export const getMediaById = (id) => API.get(`/media/${id}`);
export const createMedia = (data) => API.post("/media", data);
export const updateMedia = (id, data) => API.put(`/media/${id}`, data);
export const deleteMedia = (id) => API.delete(`/media/${id}`);
