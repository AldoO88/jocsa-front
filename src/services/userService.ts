import api from './index';
import { UpdateUserParams, UpdateUserPasswordParams } from '@/types';

const userService = {

   /**
   * Obtiene los datos del perfil de un usuario desde la base de datos.
   * @param userId - El ID del usuario.
   */
  getProfile: (userId: string) => 
    api.get(`api/users/getUserById/${userId}`),

  /**
   * Actualiza los datos de texto del perfil de un usuario.
   * @param userId - El ID del usuario a actualizar.
   * @param userData - Los datos a actualizar.
   */
  updateProfile: (userId: string, userData: Partial<UpdateUserParams>) => 
    api.put(`api/users/updateProfile/${userId}`, userData),

  updatePassword: (userId: string, userData: Partial<UpdateUserPasswordParams>) => {
    return api.put(`api/users/updatePassword/${userId}`, userData);
  },
};

export default userService;
