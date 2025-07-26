// src/services/fileService.ts
import api from './index';

const fileService = {
  /**
   * Sube una imagen al backend.
   * @param file El archivo de imagen (File object).
   * @param entityId El ID de la entidad a la que pertenece (ej. userId).
   * @param context Un string para que el backend sepa qué tipo de imagen es (ej. 'profile' o 'product').
   */
  uploadImage: (file: File, entityId: string, context: string) => {
    const formData = new FormData();
    formData.append('imageFile', file);
    formData.append('context', context); // Enviamos un contexto

    console.log(`Subiendo imagen para ${context} con ID: ${entityId} y el archivo ${file.name}`);

    // Endpoint genérico que recibe el ID de la entidad
    return api.post(`api/files/uploadImage/${entityId}`, formData);
  },
};

export default fileService;