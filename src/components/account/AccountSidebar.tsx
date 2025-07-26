// src/components/account/AccountSidebar.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/account/profile', label: 'Mi Perfil' },
  { href: '/account/fiscal-information', label: 'Información Fiscal' },
  { href: '/account/documents', label: 'Documentos' },
  { href: '/account/pedidos', label: 'Mis Pedidos' },
  { href: '/account/facturas', label: 'Mis Facturas' },
];

export const AccountSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Mi Cuenta</h2>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-red-50 text-red-600 border-r-4 border-red-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};