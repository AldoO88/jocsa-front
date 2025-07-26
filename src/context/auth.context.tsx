// src/context/auth.context.tsx
"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import authService from '@/services/authService';
import { IUser } from '@/types'; // Asumiendo que tienes una interfaz IUser

// 1. Definimos la forma de nuestro contexto
interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: IUser | null;
  storeToken: (token: string) => void;
  authenticateUser: () => Promise<void>;
  logoutUser: () => void;
}

// 2. Creamos el contexto con un valor inicial
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Creamos el componente Proveedor
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Empieza en true para verificar el token al cargar
  const [user, setUser] = useState<IUser | null>(null);

  const storeToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };

  const authenticateUser = async () => {
    const storedToken = localStorage.getItem('authToken');

    if (!storedToken) {
      // Si no hay token, terminamos la carga y el usuario no está logueado
      setIsLoading(false);
      setIsLoggedIn(false);
      setUser(null);
      return;
    }

    try {
      const userData = await authService.verify(); // El interceptor ya añade el token
      // Si la verificación es exitosa:
      setIsLoggedIn(true);
      setUser(userData.data);
    } catch (error) {
      // Si el token es inválido o hay un error
      // console.error("CONTEXTO: La verificación del token falló.", error);:
      setIsLoggedIn(false);
      setUser(null);
      localStorage.removeItem('authToken'); // Limpiamos el token inválido
    } finally {
      // En cualquier caso, la carga inicial ha terminado
      setIsLoading(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('authToken');
    // Actualizamos el estado para reflejar que el usuario ha cerrado sesión
    authenticateUser();
  };

  useEffect(() => {
    // Verificamos si el usuario ya tiene una sesión válida al cargar la aplicación
    authenticateUser();
  }, []);

  const contextValue = {
    isLoggedIn,
    isLoading,
    user,
    storeToken,
    authenticateUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// 4. Creamos un hook personalizado para usar el contexto fácilmente
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export { AuthProvider };