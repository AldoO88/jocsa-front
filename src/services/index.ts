// src/services/index.ts
import axios from 'axios';
import Cookies from 'js-cookie';
// Creamos la instancia de axios con la URL base de nuestra API
const api = axios.create({
  baseURL: '/api',
});

// Interceptor de Peticiones (Request Interceptor)
// Esto se ejecuta ANTES de que cada petición sea enviada.
api.interceptors.request.use((config) => {
  // 1. Obtenemos el token guardado en localStorage.
  const storedToken = Cookies.get('authToken');

  // 2. Si el token existe, lo añadimos a las cabeceras (headers) de la petición.
  if (storedToken) {
    config.headers.Authorization = `Bearer ${storedToken}`;
  }

  return config;
});

export default api;