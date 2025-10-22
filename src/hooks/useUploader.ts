// src/hooks/useUploader.ts
"use client";

import { useState, ChangeEvent } from 'react';
import fileService from '@/services/fileService';
import { set } from 'mongoose';

export function useUploader(initialPreview: string | null = null) {
  console.log('useUploader initialized with preview:', initialPreview);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(initialPreview);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setUploadedFile(selectedFile);
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
    console.log('upload triggered with entityId:', entityId, 'and context:', context);
    if (!uploadedFile) return null;

    setIsLoading(true);
    setError(null);
    try {
      const response = await fileService.uploadFile(uploadedFile, entityId, context);
      setUploadedFile(null); // Limpiar el archivo después de subirlo
      return response.data.documentUrl;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al subir el archivo.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    uploadedFile,
    preview,
    isLoading,
    error,
    handleFileChange,
    upload,
    setUploadedFile,
    setPreview,
    setError,
  };
}