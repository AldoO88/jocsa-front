// src/components/layout/Header.tsx
"use client"; // Lo marcamos como componente de cliente para futura interactividad

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png"; // Importamos la imagen del logo
import { SearchIcon, UserIcon, CartIcon } from "@/components/ui/Icon"; // Importamos nuestros iconos
import { useAuth } from "@/context/auth.context";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter(); // Usamos el router de Next.js para navegación
  const { isLoggedIn, user, logoutUser, isLoading } = useAuth(); // Usamos el hook de auth para obtener el estado del usuario
  // Número de items en el carrito (simulado por ahora)

  // 1. Estado para controlar la visibilidad del menú
  const { ref: menuRef, isVisible: isMenuOpen, setIsVisible: setIsMenuOpen } = useClickOutside(false);

  const handleLogout = () => {
    setIsMenuOpen(false); // Cierra el menú
    logoutUser(); // Cierra la sesión
    router.push('/'); // Redirige al inicio
  };

  // Opciones del menú para que sea fácil de mantener
  const menuOptions = [
    { label: "Mi Perfil", href: "/account/profile" },
    { label: "Mis Pedidos", href: "/cuenta/pedidos" },
    { label: "Mis Facturas", href: "/cuenta/facturas" },
  ];

  const cartItemCount = 0;

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      {isLoading && <div>Cargando...</div>}
      {!isLoggedIn ? (
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Sección Izquierda: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-24 h-24">
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
                  className="w-full h-11 pl-12 pr-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Sección Derecha: Iconos de Usuario y Carrito */}
            <div className="flex items-center gap-4">
              <Link
                href="/auth/login"
                className="flex flex-row items-center text-gray-300 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-gray-100 gap-4">
                <UserIcon className="h-7 w-7" />
                <span className="text-sm">Iniciar Sesión</span>
              </Link>

              <Link
                href="/carrito"
                className="relative text-gray-300 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-gray-100">
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
      ) : (
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Sección Izquierda: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-24 h-24">
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
                  className="w-full h-11 pl-12 pr-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Sección Derecha: Iconos de Usuario y Carrito */}
            <div className="flex items-center gap-4">
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex flex-row items-center text-gray-300 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-gray-100 gap-3">
                  <UserIcon className="h-7 w-7" />
                  <span className="hidden md:inline">
                    Hola, {user.firstName}
                  </span>
                </button>

                {/* Menú Desplegable */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                    <div className="px-4 py-3 border-b">
                      <p className="text-sm text-gray-900">
                        Sesión iniciada como
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user.email}
                      </p>
                    </div>
                    <ul className="py-1">
                      {menuOptions.map((option) => (
                        <li key={option.href}>
                          <Link
                            href={option.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {option.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/carrito"
                className="relative text-gray-300 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-gray-100">
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
      )}
    </header>
  );
};

export default Header;
