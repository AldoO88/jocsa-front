// src/hooks/useAuthForm.ts
"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

// El hook ahora solo necesita el estado inicial y la acción de envío
export function useAuthForm<T extends Record<string, string>>( // El hook es genérico y acepta un tipo T que extiende de Record<string, string>, lo que significa que T debe ser un objeto con claves de tipo string y valores de tipo string, esto permite que el hook sea reutilizable para diferentes formularios con diferentes campos
  initialState: T, // El estado inicial es un objeto con claves de tipo string y valores de tipo string, que representa los campos del formulario, la T permite que el hook sea reutilizable para diferentes formularios con diferentes campos
  onSubmit: (data: T) => void | Promise<void> // La función de envío es una función que recibe los datos del formulario de tipo T y puede retornar void o una promesa que resuelve a void, esto permite que el hook maneje tanto funciones de envío síncronas como asíncronas
) {
  const [formData, setFormData] = useState<T>(initialState); // El estado del formulario es de tipo T, lo que permite que el hook sea reutilizable para diferentes formularios con diferentes campos
  const [apiError, setApiError] = useState<string | null>(null); // El estado de error de la API es una cadena o null, lo que permite manejar errores específicos de la API y mostrar mensajes de error personalizados en el formulario
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setApiError(null);
    setIsLoading(true);

    try {
      const result = await onSubmit(formData);
      return result// Devuelve el resultado para que el componente actúe
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Ocurrió un error inesperado.';
      setApiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    apiError,
    isLoading,
    handleChange,
    handleSubmit,
  };
}