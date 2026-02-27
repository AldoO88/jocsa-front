// src/components/layout/Navbar.tsx
"use client"; // Lo marcamos como componente de cliente para futura interactividad
import Link from 'next/link';
import { Search, User, ShoppingCart, Menu, ReceiptText, UserRoundCog, Ticket, DoorOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth.context';
import { useClickOutside } from '@/hooks/useClickOutside';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn, user, logoutUser, isLoading } = useAuth(); // Obtenemos el estado de autenticación del contexto

  const { ref: menuRef, isVisible: isMenuOpen, setIsVisible: setIsMenuOpen } = useClickOutside(false);

  const handleLogout = ()  => {
    setIsMenuOpen(false); // Cierra el menú
    logoutUser(); // Cierra la sesión
    router.push('/'); // Redirige al inicio
  }

  const menuOptions = [
    { icon: <UserRoundCog size={20}/>, label: 'Mi Perfil', href: '/account/profile' },
    { icon: <Ticket size={20}/>, label: 'Mis Pedidos', href: '/cuenta/pedidos' },
    { icon: <ReceiptText size={20}/>, label: 'Mis Facturas', href: '/cuenta/facturas' }, 
  ]

  const cartItemCount = 0; // Simulamos el número de items en el carrito

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0D10]/95 backdrop-blur-md border-b border-white/10 text-white">
      {isLoading && <div>Cargando...</div>}
      {!isLoggedIn ? (
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-20 h-20">
            <Image
                    src={logo}
                    alt="JOCSA Auto Partes Logo" 
                    fill // Usamos fill para que la imagen ocupe todo el contenedor y se adapte al tamaño
                    style={{ objectFit: "contain" }} // Ajustamos el tamaño del logo para que se vea bien en la barra de navegación
                    priority // Carga esta imagen primero, es importante para el LCP
                  />
            
          </div>
        </Link>

        {/* Links de Navegación (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-bold uppercase tracking-widest">
          <Link href="/" className="text-[#E3261E] hover:text-red-500 transition-colors">Inicio</Link>
          <Link href="/catalogo" className="hover:text-[#E3261E] transition-colors">Catálogo</Link>
          <Link href="/marcas" className="hover:text-[#E3261E] transition-colors">Marcas</Link>
          <Link href="/promociones" className="hover:text-[#E3261E] transition-colors">Promociones</Link>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-5">
          <button className="hover:text-[#E3261E] transition-colors">
            <Search size={20} />
          </button>
          <Link href="/auth/login" className="hover:text-[#E3261E] transition-colors">
            <User size={20} />
          </Link>
          <Link href="/cart" className="relative hover:text-[#E3261E] transition-colors">
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E3261E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
            </span>
              )}
          </Link>
          {/* Botón Menú Móvil */}
          <button className="lg:hidden p-1">
            <Menu size={24} />
          </button>
        </div>
      </div>

      ) : (
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-20 h-20">
            <Image
                    src={logo}
                    alt="JOCSA Auto Partes Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority // Carga esta imagen primero, es importante para el LCP
                  />
            
          </div>
        </Link>

        {/* Links de Navegación (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-bold uppercase tracking-widest">
          <Link href="/" className="text-[#E3261E] hover:text-red-500 transition-colors">Inicio</Link>
          <Link href="/catalogo" className="hover:text-[#E3261E] transition-colors">Catálogo</Link>
          <Link href="/marcas" className="hover:text-[#E3261E] transition-colors">Marcas</Link>
          <Link href="/promociones" className="hover:text-[#E3261E] transition-colors">Promociones</Link>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-5">
          <button className="hover:text-[#E3261E] transition-colors">
            <Search size={20} />
          </button>
          <div className='relative' ref={menuRef}>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex gap-2 items-center justify-center text-xs hover:text-[#E3261E] transition-colors"
              >
              <User size={20} />
              <span className="hidden md:inline">
                    Hola, {user?.firstName}
              </span>
            </button>

            {/* Menú Desplegable */}
            {isMenuOpen && (
              
              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-900 rounded-lg shadow-lg py-2 z-20">
                <div className="px-4 py-3 border-b">
                  <p className="text-sm">
                    Sesión iniciada como <span className="font-bold">{user?.email}</span>
                  </p>
                </div>
                <ul>
                {menuOptions.map((option) => (
                  
                  <li key={option.href} className="flex items-center gap-1 px-2 text-sm hover:bg-gray-100 transition-colors cursor-pointer">
                    <span>
                      {option.icon}
                    </span>
                    <Link
                      href={option.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      {option.label}
                    </Link>
                  </li>
                ))}
                </ul>
                <div className="border-t mt-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                  >
                    <DoorOpen size={20} className="inline-block mr-2" />
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <Link href="/cart" className="relative hover:text-[#E3261E] transition-colors">
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E3261E] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
            </span>
              )}
            
          </Link>
          {/* Botón Menú Móvil */}
          <button className="lg:hidden p-1">
            <Menu size={24} />
          </button>
        </div>
      </div>
      )}
      
    </nav>
  );
}
export default Navbar;