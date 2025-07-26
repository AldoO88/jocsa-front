// src/app/cuenta/informacion-fiscal/page.tsx
"use client";

import { useState } from 'react';
import { UploadCloud, FileText } from 'lucide-react'; 
import { FiscalData } from '@/types';

// Interfaz para los datos del formulario fiscal


export default function FiscalInfoPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // <-- NUEVO ESTADO
  const [formData, setFormData] = useState<FiscalData>({
    razonSocial: '', rfc: '', regimenFiscal: '', calle: '', 
    numeroExt: '', colonia: '', ciudad: '', estado: '', zipCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // --- SIMULACIÓN DE LECTURA DE CONSTANCIA (OCR) ---
  const handleFileUploadAndProcess = () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    // En una app real, aquí enviarías el `selectedFile` a tu backend.
    // Simulamos la respuesta después de 2 segundos.
    setTimeout(() => {
      const mockDataFromOCR: FiscalData = {
        razonSocial: "JOCSA AUTO PARTES S.A. DE C.V.",
        rfc: "JAP180101ABC",
        regimenFiscal: "601 - General de Ley Personas Morales",
        calle: "BLVD. LUIS DONALDO COLOSIO",
        numeroExt: "123",
        colonia: "VENTA PRIETA",
        ciudad: "PACHUCA DE SOTO",
        estado: "HIDALGO",
        zipCode: "42080"
      };
      setFormData(mockDataFromOCR);
      setIsProcessing(false);
      setSelectedFile(null); // Limpiamos el archivo seleccionado después de procesarlo
    }, 2000);
  };


  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Información Fiscal</h2>
      <p className="text-gray-500 mt-1">Sube tu constancia para autorellenar o introduce tus datos manualmente.</p>

      {/* SECCIÓN DE CARGA DE CONSTANCIA */}
      <div className="mt-8 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
        <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-semibold text-gray-900">Subir Constancia de Situación Fiscal</h3>
        <p className="mt-1 text-sm text-gray-500">Ahorra tiempo, nosotros leemos el PDF por ti.</p>
        <label htmlFor="constancia-upload" className="mt-4 inline-block cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
          Seleccionar PDF
        </label>
        <input id="constancia-upload" type="file" className="hidden" onChange={handleFileSelect} accept=".pdf" />
      </div>

      {/* --- NUEVO: VISTA PREVIA DEL ARCHIVO SELECCIONADO --- */}
      {selectedFile && (
        <div className="mt-4 p-4 border rounded-lg bg-white shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-red-500" />
            <span className="text-sm font-medium text-gray-700">{selectedFile.name}</span>
          </div>
          <button 
            onClick={handleFileUploadAndProcess} 
            disabled={isProcessing} 
            className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Procesando...' : 'Autorellenar Datos'}
          </button>
        </div>
      )}

      {/* FORMULARIO DE DATOS FISCALES */}
      <form onSubmit={e => e.preventDefault()} className="mt-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label>Razón Social</label>
                <input name="razonSocial" value={formData.razonSocial} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
            </div>
            <div>
                <label>RFC</label>
                <input name="rfc" value={formData.rfc} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
            </div>
        </div>
        <div>
            <label>Régimen Fiscal</label>
            <input name="regimenFiscal" value={formData.regimenFiscal} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
        </div>
        <h4 className="text-md font-semibold pt-4 border-t mt-4">Dirección Fiscal</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="calle" placeholder="Calle" value={formData.calle} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
            <input name="numeroExt" placeholder="Número Ext." value={formData.numeroExt} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="colonia" placeholder="Colonia" value={formData.colonia} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
            <input name="zipCode" placeholder="Código Postal" value={formData.zipCode} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
            <input name="ciudad" placeholder="Ciudad" value={formData.ciudad} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
        </div>
        <div className="text-right mt-4">
            <button type="submit" className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg">Guardar Información Fiscal</button>
        </div>
      </form>
    </div>
  );
}