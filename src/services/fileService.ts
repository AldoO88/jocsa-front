// src/services/fileService.ts
import api from './index';

const fileService = {
 

  uploadFile: (file: File, entityId: string, context: string) => {
    const formData = new FormData();
    formData.append('uploadedFile', file);
    formData.append('context', context); // Enviamos un contexto

    console.log(`Subiendo imagen para ${context} con ID: ${entityId} y el archivo ${file.name}`);

    // Endpoint genérico que recibe el ID de la entidad
    return api.post(`api/files/uploadFile/${entityId}`, formData);
  },
};

export default fileService;