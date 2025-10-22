// src/app/cuenta/documentos/page.tsx
"use client";

import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { useState } from "react";

export default function DocumentsPage() {
  useProtectedRoute();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState([
    // Datos de ejemplo
    { name: 'Constancia_Situacion_Fiscal_2024.pdf', size: '1.2 MB' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setIsLoading(true);
    // Simulación de subida
    setTimeout(() => {
      setUploadedFiles(prev => [...prev, { name: selectedFile.name, size: `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` }]);
      setSelectedFile(null);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Mis Documentos</h2>
      <p className="text-gray-500 mt-1">Sube y gestiona tus documentos fiscales.</p>
      
      <div className="mt-8">
        <h3 className="font-semibold text-lg">Subir Constancia de Situación Fiscal</h3>
        <div className="mt-4 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
          <input 
            type="file" 
            id="file-upload" 
            className="hidden" 
            onChange={handleFileChange}
            accept=".pdf,.jpg,.png"
          />
          <label htmlFor="file-upload" className="cursor-pointer text-red-600 font-medium">
            Selecciona un archivo
          </label>
          <p className="text-xs text-gray-500 mt-1">PDF, PNG, JPG (MAX. 5MB)</p>
        </div>
      </div>
      
      {selectedFile && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
            <p className="text-sm font-medium">{selectedFile.name}</p>
            <button onClick={handleUpload} disabled={isLoading} className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-red-700 disabled:bg-gray-400">
                {isLoading ? 'Subiendo...' : 'Subir'}
            </button>
        </div>
      )}

      <div className="mt-8">
        <h3 className="font-semibold text-lg">Documentos Guardados</h3>
        <ul className="mt-4 space-y-3">
          {uploadedFiles.map((file, index) => (
            <li key={index} className="p-3 bg-white border rounded-lg flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800">{file.name}</span>
              <span className="text-sm text-gray-500">{file.size}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}