import api from './index';
import { UpdateUserParams, UpdateUserPasswordParams, FiscalData } from '@/types';

const userService = {

   /**
   * Obtiene los datos del perfil de un usuario desde la base de datos.
   * @param userId - El ID del usuario.
   */
  getProfile: (userId: string) => 
    api.get(`/users/${userId}`),

  /**
   * Actualiza los datos de texto del perfil de un usuario.
   * @param userId - El ID del usuario a actualizar.
   * @param userData - Los datos a actualizar.
   */
  updateProfile: (userId: string, userData: Partial<UpdateUserParams>) => 
    api.put(`/users/${userId}`, userData),

  updatePassword: (userId: string, userData: Partial<UpdateUserPasswordParams>) => {
    return api.put(`/users/${userId}`, userData);
  },

  updateFiscalData: (userId: string, fiscalData: Partial<FiscalData> ) => { // Cambiado a Partial<FiscalData> para permitir actualizaciones parciales
    return api.put(`/users/${userId}`, fiscalData);
  },
};

export default userService;
