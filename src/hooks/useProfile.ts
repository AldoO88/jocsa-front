// src/hooks/useProfile.ts
"use client";

import { useState, useEffect, ChangeEvent, FormEvent, useCallback } from 'react'; // Se importan los hooks necesarios de React 
import { useAuth } from '@/context/auth.context'; // Se importa el contexto de autenticación
import userService from '@/services/userService'; // Se importa el servicio de usuario
import { UpdateUserParams } from '@/types'; // Se importa el tipo de datos para actualizar el usuario

export function useProfile() {
  const { user, isLoading: isAuthLoading, authenticateUser } = useAuth(); // Se obtiene el usuario y el estado de carga del contexto de autenticación
  // Estado local para manejar el formulario de perfil

  const [formData, setFormData] = useState({ 
    action: 'updateProfile',
    firstName: '', 
    lastName: '', 
    phone: '', 
    imageUrl: '' 
  }); // Inicializa con campos vacíos de perfil

  const [originalData, setOriginalData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    imageUrl: ''
  });

  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga de la actualización del perfil, se inicia en false para indicar que no está cargando hasta que se inicie una acción
  const [status, setStatus] = useState({ message: '', type: '' }); // Estado para manejar mensajes de estado (éxito o error)

  const fetchProfileData = useCallback(async (userIdOverride?: string) => { // Función para cargar los datos del perfil del usuario desde la API, evitando redefiniciones innecesarias, se usa useCallback para memorizar la función y evitar que se redefina en cada renderizado, el callback es como una función que recuerda su definición anterior a menos que cambien sus dependencias
    const effectiveUserId = userIdOverride || user?.userId; // Permite anular el userId para pruebas o casos especiales
    if (effectiveUserId) {
      try {
        const response = await userService.getProfile(effectiveUserId);
        const profileData = response.data;
        
        setFormData({
          action: 'updateProfile',
          firstName: profileData.firstName || '',
          lastName: profileData.lastName || '',
          phone: profileData.phone || '',
          imageUrl: profileData.imageUrl || '',
        });

        setOriginalData({
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
  useEffect(() => { // Se usa useEffect para ejecutar el efecto secundario de cargar los datos del perfil cuando el componente se monta o cuando cambia el userId, se agrega fetchProfileData a las dependencias para asegurar que la función actualizada se use cuando cambie
    if (user?.userId){ // Verifica que user y userId estén definidos antes de llamar a la función
      fetchProfileData(); // Llama a la función para cargar los datos del perfil
    }
  }, [fetchProfileData]); // El efecto depende de fetchProfileData, que a su vez depende de user?.userId

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (
    e?: FormEvent<HTMLFormElement>, 
    newImageUrl?: string | null, 
    userIdOverride?: string
  ) => {
    console.log('handleSubmit triggered with newImageUrl:', newImageUrl);
    if(e) e.preventDefault();
    const effectiveUserId = userIdOverride || user?.userId; // Permite anular el userId para pruebas o casos especiales
    if (!effectiveUserId) return; // Guarda de seguridad

    setIsLoading(true);
    setStatus({ message: '', type: '' });

    try {
      
      // 2. Se actualizan los datos de texto, incluyendo la nueva URL si existe.
      const updateData: Partial<UpdateUserParams> = { ...formData, imageUrl: newImageUrl || user?.imageUrl };
      await userService.updateProfile(effectiveUserId, updateData);
      
      // 3. Se refresca el estado global del usuario y se muestra un mensaje de éxito.
      await authenticateUser(); 

      await new Promise(res => setTimeout(res, 300));

      await fetchProfileData(effectiveUserId); // <-- Esto sincroniza el formulario con los datos actualizados
      setStatus({ message: '¡Perfil actualizado con éxito!', type: 'success' });


    } catch (error: any) {
      console.log('Error recibido:', error.response?.data);
      const message = error.response?.data?.message || 'Error al actualizar el perfil.';
      setStatus({ message, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const hasChanges =
    formData.firstName !== originalData.firstName ||
    formData.lastName !== originalData.lastName ||
    formData.phone !== originalData.phone ||
    formData.imageUrl !== originalData.imageUrl;

  return {
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
  };
}