// src/modules/auth/services/authService.ts
import api from '@/lib/api'; // Importamos la instancia configurada de axios
import { LoginCredentials, SignupData, IUser } from '@/types'; // Importamos los tipos necesarios

// Creamos un objeto que agrupa todos los endpoints de autenticación
const authService = {
  // Endpoint para registrar un nuevo usuario
  signup: (formData: SignupData) => api.post('/auth/signup', formData),

  // Endpoint para iniciar sesión
  login: (formData: LoginCredentials) => api.post('/auth/login', formData),

  // Endpoint para verificar la validez de un token
  // El token se adjuntará automáticamente gracias al interceptor en `index.ts`
  verify: () => api.get<{ user: IUser }>('/auth/verify'),
};

export default authService;