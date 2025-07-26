// src/hooks/useAuthForm.ts
"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = Record<string, string>;
type SubmitFunction = (formData: FormData) => Promise<any>;

// El hook ahora solo necesita el estado inicial y la acción de envío
export function useAuthForm(
  initialState: FormData,
  submitAction: SubmitFunction
) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiError(null);
    setIsLoading(true);

    try {
      const result = await submitAction(formData);
      return result; // Devuelve el resultado para que el componente actúe
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