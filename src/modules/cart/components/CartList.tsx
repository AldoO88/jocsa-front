//src/app/cart/_components/CartList.tsx

'use client'

import { ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import CartItem from './CartItem';

// Mock de datos (esto vendría de tu Global State o Context)
const MOCK_ITEMS = [
  {
    id: 1,
    brand: 'Brembo Premium',
    name: 'Kit de Frenos Cerámicos High-Performance',
    sku: 'BRM-9920-X',
    price: '$8,450.00',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    brand: 'Garrett',
    name: 'Turbocargador GT35 Series V-Band',
    sku: 'GRT-7700-V',
    price: '$4,000.00',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    brand: 'Garrett',
    name: 'Turbocargador GT35 Series V-Band',
    sku: 'GRT-7700-V',
    price: '$4,000.00',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 4,
    brand: 'Garrett',
    name: 'Turbocargador GT35 Series V-Band',
    sku: 'GRT-7700-V',
    price: '$4,000.00',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=200&auto=format&fit=crop',
  }
];

const CartList = () => {
  // Simulación de carrito vacío para pruebas: const items = [];
  const items = MOCK_ITEMS;

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-[3rem] p-16 border border-slate-100 text-center space-y-6">
        <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto text-slate-200">
          <ShoppingBag size={48} />
        </div>
        <div>
          <h2 className="text-xl font-black uppercase tracking-tighter text-slate-800">Tu carrito está vacío</h2>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2">
            Parece que aún no has añadido ninguna refacción.
          </p>
        </div>
        <Link 
          href="/shop" 
          className="inline-flex items-center gap-3 bg-[#0A0D10] text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#E3261E] transition-all"
        >
          Explorar Catálogo <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* HEADER DE LA LISTA (SOLO DESKTOP) */}
      <div className="hidden md:grid grid-cols-12 px-10 mb-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
        <div className="col-span-6">Producto</div>
        <div className="col-span-3 text-center">Cantidad</div>
        <div className="col-span-3 text-right">Subtotal</div>
      </div>

      {/* RENDERIZADO DE ITEMS */}
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* NOTA DE ENVÍO SUTIL */}
      <div className="p-6 bg-blue-50/50 rounded-[2rem] border border-blue-100 flex items-center gap-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <p className="text-[10px] font-bold uppercase tracking-tight text-blue-600">
          Tus productos están reservados por <span className="font-black">15:00 minutos</span> para asegurar stock.
        </p>
      </div>
    </div>
  );
}

export default CartList;