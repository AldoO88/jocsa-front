"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: 'categorias/perillas', label: 'Perillas' },
  { href: 'categorias/biceras', label: 'Biceras' },
  { href: '/marcas', label: 'Marcas' },
  { href: '/contacto', label: 'Contacto' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-red-600 shadow-lg relative">
      <div className="container mx-auto px-4">
        <div className="flex itmes-center justify-between h-14">
          <div className="hidden md:flex items-center space-x-6">
            {
              navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-red-700 text-white' : 'text-red-100 hover:text-white hover:bg-red-700'}`}
                    >
                      {link.label}
                  </Link>
                );
              })}
          </div>
          <div className="md:hidden flex items-center"> 
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-100 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Menú despegable para moviles */}

      {isOpen && (
        <div className="md:hidden absolute w-full bg-red-600 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Cierra el menú desplegable al hacer clic en un link
                  className={`block px-3 py-2 rounded-md text-base font-medium ${ isActive ? 'bg-red-700 text-white' : 'text-red-100 hover:bg-red-700 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;