import axios from "axios";

const API = "http://localhost:4000/api";

// GENEROS (MongoDB)
export const getGeneros = () => axios.get(`${API}/genero`);
export const createGenero = (data) => axios.post(`${API}/genero`, data);
export const updateGenero = (id, data) => axios.put(`${API}/generos/${id}`, data);
export const deleteGenero = (id) => axios.delete(`${API}/generos/${id}`);

// DIRECTORES
export const getDirectores = () => axios.get(`${API}/director`);
export const createDirector = (data) => axios.post(`${API}/director`, data);
export const updateDirector = (id, data) => axios.put(`${API}/director/${id}`, data);
export const deleteDirector = (id) => axios.delete(`${API}/director/${id}`);

// PRODUCTORAS
export const getProductoras = () => axios.get(`${API}/productora`);
export const createProductora = (data) => axios.post(`${API}/productora`, data);
export const updateProductora = (id, data) => axios.put(`${API}/productora/${id}`, data);
export const deleteProductora = (id) => axios.delete(`${API}/productora/${id}`);

// TIPOS
export const getTipos = () => axios.get(`${API}/tipo`);
export const createTipo = (data) => axios.post(`${API}/tipo`, data);
export const updateTipo = (id, data) => axios.put(`${API}/tipo/${id}`, data);
export const deleteTipo = (id) => axios.delete(`${API}/tipo/${id}`);

export const getMedias = () => axios.get(`${API}/media`);
export const getMediaById = (id) => axios.get(`${API}/media/${id}`);
export const createMedia = (data) => axios.post(`${API}/media`, data);
export const updateMedia = (id, data) => axios.put(`${API}/media/${id}`, data);
export const deleteMedia = (id) => axios.delete(`${API}/media/${id}`);
