// src/hooks/useUploader.ts
"use client";

import { useState, ChangeEvent } from 'react';
import fileService from '@/services/fileService';

export function useUploader(initialPreview: string | null = null) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(initialPreview);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  /**
   * Sube el archivo seleccionado actualmente.
   * @param entityId El ID de la entidad (ej. userId).
   * @param context El contexto de la subida (ej. 'profile').
   * @returns La URL de la imagen subida.
   */
  const upload = async (entityId: string, context: string): Promise<string | null> => {
    if (!file) return null;

    setIsLoading(true);
    setError(null);
    try {
      const response = await fileService.uploadFile(file, entityId, context);
      setFile(null); // Limpiar el archivo después de subirlo
      return response.data.documentUrl;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al subir el archivo.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    file,
    preview,
    isLoading,
    error,
    handleFileChange,
    upload,
  };
}