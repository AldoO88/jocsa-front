// src/hooks/useFiscalInfo.ts
"use client";

import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { useAuth } from '@/context/auth.context';
import userService from '@/services/userService'; // Asumimos que tendrás un userService
import fileService from '@/services/fileService';
import { FiscalData } from '@/types';

export function useFiscalInfo() {
  const { user } = useAuth();
  const [formData, setFormData] = useState<FiscalData>({
    razonSocial: '',
    rfc: '',
    regimenFiscal: '',
    calle: '',
    numeroExt: '',
    colonia: '',
    ciudad: '',
    estado: '',
    zipCode: '',
    // agrega aquí los demás campos requeridos por FiscalData con valores por defecto
  });
  const [savedPdfUrl, setSavedPdfUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessingOcr, setIsProcessingOcr] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });

  // 1. Cargar los datos fiscales existentes al montar el componente
  const fetchFiscalData = useCallback(async () => {
    if (user?.userId) {
      try {
        // Debes crear esta ruta y servicio para obtener los datos
        const response = await userService.getProfile(user.userId);
        setFormData(response.data.datosFiscales );
        setSavedPdfUrl(response.data.datosFiscales?.urlConstancia || null);
      } catch (error) {
        console.error("Error al cargar datos fiscales", error);
      }
    }
  }, [user]);

  useEffect(() => {
    fetchFiscalData();
  }, [fetchFiscalData]);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // 2. Simular el procesamiento OCR del archivo seleccionado
  const handleOcrProcess = () => {
    if (!selectedFile) return;
    setIsProcessingOcr(true);
    setTimeout(() => {
      const mockData: FiscalData = {
        razonSocial: "JOCSA AUTO PARTES S.A. DE C.V.",
        rfc: "JAP180101ABC",
        regimenFiscal: "Régimen General de Ley Personas Morales",
        calle: "Avenida de la Industria",
        numeroExt: "123", 
        colonia: "VENTA PRIETA",
        ciudad: "PACHUCA DE SOTO",
        estado: "HIDALGO",
        zipCode: "42080"
      };
      setFormData(mockData);
      setIsProcessingOcr(false);
    }, 2000);
  };

  // 3. Guardar todo: subir el PDF (si hay uno nuevo) y luego los datos del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user?.userId) return;

    setIsLoading(true);
    setStatus({ message: '', type: '' });
    try {
      let finalPdfUrl = savedPdfUrl;

      // Si hay un archivo nuevo, lo subimos
      if (selectedFile) {
        const response = await fileService.uploadFile(selectedFile, user.userId, 'profile');
        finalPdfUrl = response.data.documentUrl; // Asumimos que el servicio devuelve la URL del PDF
        setSavedPdfUrl(finalPdfUrl); // Actualizamos el PDF guardado
      }
      
      // Guardamos los datos del formulario junto con la URL del PDF
      const finalData = { ...formData, constanciaUrl: finalPdfUrl };
      // Debes crear esta ruta y servicio para guardar los datos
      await userService.updateFiscalData(user.userId, finalData);

      setStatus({ message: 'Información fiscal guardada con éxito', type: 'success' });
      await fetchFiscalData(); // Recargamos los datos para mostrar la información actualizada
    } catch (error: any) {
      setStatus({ message: error.response?.data?.message || 'Error al guardar los datos.', type: 'error' });
    } finally {
      setIsLoading(false);
      //setSelectedFile(null);
    }
  };

  return { 
    formData, 
    setFormData, 
    savedPdfUrl, 
    selectedFile, 
    isLoading, 
    isProcessingOcr, 
    status, 
    handleFileSelect, 
    handleOcrProcess, 
    handleSubmit };
}