// src/context/auth.context.tsx
"use client";

import React, { useState, useEffect, createContext, useContext, use } from 'react';
import authService from '@/services/authService';
import { IUser, LoginCredentials } from '@/types'; // Asumiendo que tienes una interfaz IUser
import { useRouter } from 'next/navigation'; // Importamos la función useRouter de Next.js para redirecciones de navegación rápidas y eficientes que funcionan en componentes de cliente
import Cookies from 'js-cookie';

// 1. Definimos la forma de nuestro contexto
interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: IUser | null;
  loginUser: (credentials: LoginCredentials) => Promise<void>; // Método para iniciar sesión del usuario en la API de Next.js y almacenar el token en localStorage
  logoutUser: () => void; // Método para cerrar sesión del usuario y eliminar el token de localStorage, el void indica que no retorna nada
  authenticateUser: () => Promise<void>; // Método para verificar el token almacenado en localStorage y obtener los datos del usuario actual
}

// 2. Creamos el contexto con un valor inicial
// El valor inicial es undefined porque lo vamos a proporcionar en el AuthProvider, y el hook useAuth se encargará de verificar que el contexto esté disponible antes de usarlo
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Creamos el componente Proveedor del contexto que envolverá nuestra aplicación y proporcionará el estado de autenticación a todos los componentes hijos
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Empieza en true para verificar el token al cargar
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();

  const authenticateUser = async () => {
      const storedToken = Cookies.get('authToken'); // Obtenemos el token almacenado en localStorage

      if(!storedToken) { // Si no existe el token, no autenticamos el usuario
        setIsLoading(false); // Terminamos de cargar el estado de carga
        setIsLoggedIn(false); // Nos autenticamos como no autenticado y eliminamos el usuario actual
        setUser(null); // Nos autenticamos como no autenticado y eliminamos el usuario actual
        return; // Salimos de la función
      }
      try {
        const response = await authService.verify(); // Verificamos el token
        setUser(response.data.user); // Si el token es válido, establecemos el usuario actual
        setIsLoggedIn(true); // Si el token es válido, establecemos el usuario actual
      } catch (error) {
        Cookies.remove('authToken'); // Si el token no es válido, lo eliminamos
        setIsLoggedIn(false); // Si el token no es válido, lo eliminamos
        setUser(null); // Si el token no es válido, lo eliminamos
      }finally {
        setIsLoading(false); // Terminamos de cargar el estado de carga
      }
    };

  useEffect(() => {
    authenticateUser();
  },[])

  // Función para iniciar sesión del usuario en la API de Next.js y almacenar el token en localStorage
  const loginUser = async (credentials: LoginCredentials) => { 
    try {
      const response = await authService.login(credentials);// Envíamos el formulario de login a la API de Next.js
      Cookies.set('authToken', response.data.token, { expires: 1/24 }) // Almacenamos el token en localStorage, expirando en 1 hora
      setUser(response.data.user); // Establecemos el usuario actual en el contexto
      setIsLoggedIn(true); // Establecemos el estado de autenticación en true
      router.push('/'); // Redireccionamos al usuario a la página de inicio
    } catch (error) {
      console.error(error); // Si hay un error, mostramos el error en la consola
      throw error; // Lanzamos el error para que pueda ser manejado por el componente que llama a esta función
    }
  };

  // Función para cerrar sesión del usuario y eliminar el token de localStorage
  const logoutUser = () => {
    Cookies.remove('authToken'); // Eliminamos el token de localStorage
    setIsLoggedIn(false); // Eliminamos el estado de autenticación
    setUser(null); // Eliminamos el usuario actual
    router.push('/login'); // Redireccionamos al usuario a la página de inicio
  };

  const contextValue = { isLoggedIn, isLoading, user, loginUser, logoutUser, authenticateUser }; // Creamos un objeto con los valores del contexto

  return (
    <AuthContext.Provider value={contextValue}> {/* Proveemos el contexto a los componentes hijos */}
      {!isLoading && children} {/* Renderizamos los hijos solo cuando no estamos cargando */}
    </AuthContext.Provider>

  )
}
  
// 4. Creamos un hook personalizado para usar el contexto fácilmente
// El hook useAuth verifica que el contexto esté disponible y lo devuelve, o lanza un error si se intenta usar fuera del proveedor
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext); // Usamos el contexto para obtener el valor del contexto
  if (!context) { // Si el contexto no existe, lanzamos un error
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
