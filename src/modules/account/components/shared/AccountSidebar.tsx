// src/components/account/AccountSidebar.tsx
"use client";

import { 
  User, Package, FileText, CreditCard, 
  Settings, MapPin, LogOut, Camera, FileStack
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ProfileImageModal from './ProfileImageModal';

const menuItems = [
  { href: '/account/profile', label: 'Perfil', icon: User },
  { href: '/account/fiscal-information', label: 'Información Fiscal', icon: FileText },
  { href: '/account/orders', label: 'Mis Pedidos', icon: Package },
  { href: '/account/invoices', label: 'Facturas', icon: FileStack },
  { href: '/account/payments', label: 'Metodos de Pago', icon: CreditCard },
  { href: '/account/addresses', label: 'Direcciones', icon: MapPin },
  { href: '/account/settings', label: 'Configuración', icon: Settings  },
];

const AccountSidebar = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImg, setProfileImg] = useState<string | undefined>(undefined);

  return (
    <>
    <aside className="w-full lg:w-80 flex flex-col gap-6">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col items-center">
        {/* Avatar Section */}
        <div className="relative w-24 h-24 mx-auto mb-4 group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <div className="w-full h-full rounded-[2rem] bg-slate-50 overflow-hidden border-2 border-red-300 flex items-center justify-center group-hover:border-[#E3261E] transition-all">
              {profileImg ? (
                <img src={profileImg} alt="User" className="w-full h-full object-cover" />
              ) : (
                <User size={32} className="text-slate-300 group-hover:text-[#E3261E] transition-colors" />
              )}
            </div>
            
            {/* OVERLAY AL HACER HOVER (Solo Desktop) */}
            <div className="absolute inset-0 bg-[#0A0D10]/40 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Camera size={20} />
            </div>
          </div>

          <h2 className="font-black text-slate-800 uppercase tracking-tighter">Ricardo Jiménez</h2>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cliente Platinum</p>
        {/* Navigation Menu */}
        <nav className="w-full mt-8 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive 
                  ? 'bg-slate-50 text-[#E3261E] border-l-4 border-[#E3261E]' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-400 hover:text-red-600 transition-colors mt-4 border-t border-slate-50 pt-6">
            <LogOut size={18} />
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </aside>

    <ProfileImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        currentImage={profileImg}
      />
      </>
  );
};

export default AccountSidebar;