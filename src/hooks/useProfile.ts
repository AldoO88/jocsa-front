"use client";

import { useState, useEffect, ChangeEvent, FormEvent, useCallback } from 'react';
import { useAuth } from '@/context/auth.context';
import userService from '@/services/userService';
import { UpdateUserParams } from '@/types';

export function useProfile() {
  const { user, authenticateUser, isLoading: isAuthLoading } = useAuth();

  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', imageUrl: '' });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });

  const fetchProfileData = useCallback(async () => {
    if (user?.userId) {
      try {
        const response = await userService.getProfile(user.userId);
        const profileData = response.data;
        
        setFormData({
          firstName: profileData.firstName || '',
          lastName: profileData.lastName || '',
          phone: profileData.phone || '',
          imageUrl: profileData.imageUrl || '',
        });

      } catch (error) {
        console.error("Error al cargar los datos del perfil:", error);
        setStatus({ message: 'No se pudo cargar tu información.', type: 'error' });
      }
    }
  }, [user]);
  // Inicializa el formulario cuando el usuario del contexto esté disponible
  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };



  const handleSubmit = async (e: FormEvent<HTMLFormElement>, newImageUrl?: string | null) => {
    e.preventDefault();
    if (!user?.userId) return; // Guarda de seguridad

    setIsLoading(true);
    setStatus({ message: '', type: '' });

    try {
      
      // 2. Se actualizan los datos de texto, incluyendo la nueva URL si existe.
      const updateData: Partial<UpdateUserParams> = { ...formData, imageUrl: newImageUrl || user.imageUrl };
      await userService.updateProfile(user.userId, updateData);
      
      // 3. Se refresca el estado global del usuario y se muestra un mensaje de éxito.
      await authenticateUser(); 
      setStatus({ message: '¡Perfil actualizado con éxito!', type: 'success' });


    } catch (error) {
      setStatus({ message: 'Error al actualizar el perfil.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isAuthLoading,
    formData,
    isLoading,
    status,
    handleChange,
    handleSubmit,
  };
}