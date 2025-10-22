// src/hooks/useChangePassword.ts
"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import userService from '@/services/userService';

export function useChangePassword() {

  console.log('useChangePassword hook initialized');
  const [formDataPassword, setFormDataPassword] = useState({ 
    action: 'changePassword',
    currentPassword: '', 
    newPassword: '', 
    confirmNewPassword: '' 
  });
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);
  const [statusPassword, setStatusPassword] = useState({ message: '', type: '' });

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setFormDataPassword(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitPassword = async (e: FormEvent<HTMLFormElement>, userId: string) => {
    e.preventDefault();
    if (!userId) return;
    
    // Validación de coincidencia en el front-end
    if (formDataPassword.newPassword !== formDataPassword.confirmNewPassword) {
      setStatusPassword({ message: 'Las nuevas contraseñas no coinciden.', type: 'error' });
      return;
    }

    setIsLoadingPassword(true);
    setStatusPassword({ message: '', type: '' });
    
    try {
      // Asumo que tienes un servicio `updatePassword`
      await userService.updatePassword(userId, formDataPassword);
      setStatusPassword({ message: '¡Contraseña actualizada con éxito!', type: 'success' });
      setFormDataPassword({ action: 'changePassword', currentPassword: '', newPassword: '', confirmNewPassword: '' }); // Limpia el formulario
    } catch (error: any) {
      setStatusPassword({ message: error.response?.data?.message || 'Error al cambiar la contraseña.', type: 'error' });
    } finally {
      setIsLoadingPassword(false);
    }
  };

  const hasChanges =
    formDataPassword.currentPassword !== '' ||
    formDataPassword.newPassword !== '' ||
    formDataPassword.confirmNewPassword !== '';

  return {
    formDataPassword,
    isLoadingPassword,
    statusPassword,
    handleChangePassword,
    handleSubmitPassword,
    hasChanges,
    setStatusPassword,
  };
}