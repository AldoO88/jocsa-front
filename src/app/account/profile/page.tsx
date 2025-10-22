// src/app/cuenta/perfil/page.tsx
"use client";

import Image from 'next/image';
import { useProfile } from '@/hooks/useProfile';
import { useChangePassword } from '@/hooks/useUpdatePassword';
import { useUploader } from '@/hooks/useUploader';
import { useProtectedRoute } from '@/hooks/useProtectedRoute';
import { useEffect, useRef, useState } from 'react';

const ProfileSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="pt-6">
    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-6">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
);

export default function ProfilePage() {
  useProtectedRoute();

  const {
    user,
    isAuthLoading,
    formData,
    originalData,
    isLoading,
    status,
    handleChange,
    handleSubmit,
    hasChanges,
    setStatus,
  } = useProfile();

  console.log('ProfilePage render', { user, formData });
  const { 
    formDataPassword, 
    isLoadingPassword, 
    statusPassword, 
    handleChangePassword, 
    handleSubmitPassword, 
    hasChanges: hasPasswordChanges,
    setStatusPassword
  } = useChangePassword();

  const [initialPreview] = useState(() => user?.imageUrl || null);
  const uploader = useUploader(initialPreview);

  // Limpiar mensaje de éxito o error del perfil
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ message: '', type: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, setStatus]);

  // Limpiar error del uploader
  useEffect(() => {
    if (uploader.error) {
      const timer = setTimeout(() => {
        uploader.setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [uploader?.error, uploader?.setError]);

  // Limpiar mensaje de éxito o error del cambio de contraseña
  useEffect(() => {
    if (statusPassword.message) {
      const timer = setTimeout(() => {
        setStatusPassword({ message: '', type: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [statusPassword, setStatusPassword]);

  

  const handleProfileSave = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handleProfileSave triggered');
    console.log('User ID:', user?.userId);
    e.preventDefault();
    
    if (!user?.userId && !user?._id) return;

    const userId = user.userId || user._id;

    let finalImageUrl = user.imageUrl;

    // 1. Si hay un archivo nuevo, lo subimos primero
    if (uploader.uploadedFile) {
      const newUrl = await uploader.upload(userId, 'profile');
      if (newUrl) {
        finalImageUrl = newUrl;
      }
    }

    // 2. Luego, actualizamos el perfil con los datos de texto y la URL final
    await handleSubmit(undefined, finalImageUrl, userId);
    // 3. Finalmente, limpiamos el estado del uploader
    uploader.setUploadedFile(null);
    uploader.setPreview(null);
  };

  const onPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (user) {
      handleSubmitPassword(e, user.userId || user._id);
    }

  }
  if (isAuthLoading || !uploader) return <p>Cargando...</p>;
  if (!user) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Mi Perfil</h2>
      <p className="text-gray-500 mt-1">Actualiza tu información personal y de acceso.</p>

      {status.message && (
        <div className={`mt-6 p-3 rounded-md text-sm font-medium ${
          status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {status.message}
        </div>
      )}

      {uploader.error && (
        <div className="mt-4 p-3 rounded-md text-sm font-medium bg-red-100 text-red-800">
          {uploader.error}
        </div>
      )}

      <form onSubmit={handleProfileSave} className="mt-2 divide-gray-200">
        <ProfileSection title="Foto de Perfil o Logo">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={uploader.preview || formData.imageUrl || '/images/default-avatar.png'}
                alt="Vista previa de perfil"
                fill
                style={{ objectFit: 'cover' }}
                key={uploader.preview || formData.imageUrl || 'default'}
              />
            </div>
            <label htmlFor="picture-upload" className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cambiar foto
            </label>
            <input id="picture-upload" type="file" className="hidden" onChange={uploader.handleFileChange} accept="image/*" />
          </div>
        </ProfileSection>

        <ProfileSection title="Datos de Contacto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre(s)</label>
              <input 
                id="firstName" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange}
                disabled={isLoading} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellidos</label>
              <input 
                id="lastName" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange}
                disabled={isLoading}  
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input 
                id="email" 
                value={user.email} 
                disabled 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500"/>
            </div>
            <div >
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                disabled={isLoading} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
            </div>
          </div>  
        </ProfileSection>
        
        <div className="mt-2 pt-4 flex justify-start">
          <button type="submit" 
          disabled={isLoading || (!hasChanges && !uploader.uploadedFile)} className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
            {isLoading ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>

         {/* SECCIÓN CAMBIO DE CONTRASEÑA */}
      
      <ProfileSection title="Cambiar Contraseña">
        <form onSubmit={onPasswordSubmit} className="space-y-4">
          <div>
            <label htmlFor="currentPassword">Contraseña Actual</label>
            <input id="currentPassword" name='currentPassword' type="password" value={formDataPassword.currentPassword} onChange={handleChangePassword} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label htmlFor="newPassword">Nueva Contraseña</label>
            <input id="newPassword" name='newPassword' type="password" value={formDataPassword.newPassword} onChange={handleChangePassword} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
          </div>
          <div>
            <label htmlFor="confirmNewPassword">Confirmar Nueva Contraseña</label>
            <input id="confirmNewPassword" name='confirmNewPassword' type="password" value={formDataPassword.confirmNewPassword} onChange={handleChangePassword} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
          </div>
          {statusPassword.message && (
        <div className={`mt-6 p-3 rounded-md text-sm font-medium ${
          statusPassword.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {statusPassword.message}
        </div>
      )}
          <button 
          name='changePassword' 
          type="submit" 
          disabled={isLoadingPassword || !hasPasswordChanges} 
          className="cursor-pointer mt-2 bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
            {isLoadingPassword ? 'Cambiando...' : 'Cambiar Contraseña'}
          </button>
       </form>
      </ProfileSection>
       
    </div>
  );
}