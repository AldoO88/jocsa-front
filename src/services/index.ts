// src/services/index.ts
import axios from 'axios';

const baseUrl = process.env.NEXT_APP_ENV === 'production'
  ? process.env.NEXT_PUBLIC_API_URL
  : 'http://localhost:5005';

// Creamos la instancia de axios con la URL base de nuestra API
const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000, // Tiempo de espera de 10 segundos
});

// Interceptor de Peticiones (Request Interceptor)
// Esto se ejecuta ANTES de que cada petición sea enviada.
api.interceptors.request.use((config) => {
  // 1. Obtenemos el token guardado en localStorage.
  const storedToken = localStorage.getItem('authToken');

  // 2. Si el token existe, lo añadimos a las cabeceras (headers) de la petición.
  if (storedToken) {
    config.headers.Authorization = `Bearer ${storedToken}`;
  }

  return config;
});

export default api;