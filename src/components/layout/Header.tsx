// src/components/layout/Header.tsx
"use client"; // Lo marcamos como componente de cliente para futura interactividad

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.png'; // Importamos la imagen del logo
import { SearchIcon, UserIcon, CartIcon } from '@/components/ui/Icon'; // Importamos nuestros iconos

// Definimos la paleta de colores basada en tu logo
const colors = {
  primary: '#D9232D', // Rojo del logo
  dark: '#1A1A1A',     // Un negro/gris oscuro para el texto
  light: '#FFFFFF',    // Blanco
  gray: '#F0F0F0',     // Un gris claro para fondos
};

const Header = () => {
  // Número de items en el carrito (simulado por ahora)
  const cartItemCount = 0; 

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Sección Izquierda: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-14 h-14">
                <Image 
                  src={logo} 
                  alt="JOCSA Auto Partes Logo" 
                  fill
                  style={{ objectFit: "contain" }}
                  priority // Carga esta imagen primero, es importante para el LCP
                />
              </div>
            </Link>
          </div>

          {/* Sección Central: Barra de Búsqueda */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar por número de parte, marca, modelo..."
                className="w-full h-11 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Sección Derecha: Iconos de Usuario y Carrito */}
          <div className="flex items-center gap-4">
            <Link href="/cuenta" className="text-gray-600 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-gray-100">
              <UserIcon className="h-7 w-7" />
              <span className="sr-only">Mi Cuenta</span>
            </Link>
            
            <Link href="/carrito" className="relative text-gray-600 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-gray-100">
              <CartIcon className="h-7 w-7" />
              <span className="sr-only">Carrito de Compras</span>
              {cartItemCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </div>
              )}
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;