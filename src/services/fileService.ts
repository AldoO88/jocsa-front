// src/services/fileService.ts
import api from './index';

const fileService = {
 

  uploadFile: (uploadedFile: File, entityId: string, context: string) => {
    console.log('fileService.uploadFile called with:', { uploadedFile, entityId, context });
    const formData = new FormData();
    formData.append('uploadedFile', uploadedFile);
    formData.append('context', context); // Enviamos un contexto

    console.log(`Subiendo imagen para ${context} con ID: ${entityId} y el archivo ${uploadedFile.name}`);

    // Endpoint genérico que recibe el ID de la entidad
    return api.post(`/files/upload/${entityId}`, formData);
  },
};

export default fileService;