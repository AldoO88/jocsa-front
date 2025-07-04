import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png"; // Importamos la imagen del logo

// Iconos para redes sociales (puedes reemplazarlos con una librería como react-icons)
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.268.194-6.379 2.3-6.573 6.573-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.194 4.268 2.3 6.379 6.573 6.573 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.268-.194 6.379-2.3 6.573-6.573.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.194-4.268-2.3-6.379-6.573-6.573C15.667 0 15.259 0 12 0z" />
        <path d="M12 6.845a5.155 5.155 0 100 10.31 5.155 5.155 0 000-10.31zm0 8.47a3.315 3.315 0 110-6.63 3.315 3.315 0 010 6.63zM16.965 5.595a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
    </svg>
);

const navLinksCategory = [
  { href: '/categorias/frenos', label: 'Frenos' },
  { href: '/categorias/suspension', label: 'Suspension y Dirección' },
  { href: '/categorias/motor', label: 'Componentes de Motor' },
  { href: '/categorias/filtros', label: 'Filtros y Fluidos' },
];
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* --- Sección principal del footer con columnas --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-14 h-14">
                <Image src={logo} alt="JOCSA Logo" fill style={{ objectFit: 'contain' }} />
              </div>
              <span className="text-2xl font-bold text-white">JOCSA</span>
            </Link>
            <p className="text-sm max-w-xs">
              Tu proveedor de confianza para refacciones y autopartes de alta calidad en Pachuca, Hidalgo.
            </p>
          </div>

          {/* Columna 2: Categorías Principales */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-red-600 pb-2 inline-block">Categorías</h3>
            <ul className="space-y-2">
              {
                navLinksCategory.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href} 
                        className="hover:text-red-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )})
              }
            </ul>
          </div>

          {/* Columna 3: Soporte y Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-red-600 pb-2 inline-block">Soporte</h3>
            <ul className="space-y-2">
              <li><Link href="/contacto" className="hover:text-red-500 transition-colors">Contacto</Link></li>
              <li><Link href="/faq" className="hover:text-red-500 transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="/politica-de-envio" className="hover:text-red-500 transition-colors">Política de Envío</Link></li>
              <li><Link href="/terminos-y-condiciones" className="hover:text-red-500 transition-colors">Términos y Condiciones</Link></li>
            </ul>
          </div>
          
          {/* Columna 4: Redes Sociales y Contacto Directo */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-red-600 pb-2 inline-block">Síguenos</h3>
            <div className="flex space-x-4 mb-4">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                  <InstagramIcon className="h-6 w-6" />
                </a>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 mt-4">Métodos de Pago</h3>
            <p className="text-sm">Aceptamos todas las tarjetas de crédito y débito.</p>
             {/* Aquí podrías añadir iconos de Visa, Mastercard, etc. */}
          </div>

        </div>
      </div>

      {/* --- Sub-Footer con Copyright --- */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} JOCSA Auto Partes. Todos los derechos reservados. Sitio desarrollado por [Ing. Aldo Omar González Juárez/GMsistemas].
        </div>
      </div>
    </footer>
  );
};

export default Footer;