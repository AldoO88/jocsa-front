//src/app/cart/page.tsx

'use client'
import CartList from './_components/CartList';
import CartSummary from './_components/CartSummary';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CartPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* HEADER DEL CARRITO */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <Link href="/shop" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#E3261E] transition-colors mb-4">
              <ArrowLeft size={14} /> Volver a la tienda
            </Link>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-4">
              <span className="w-3 h-10 bg-[#E3261E] rounded-full inline-block" />
              Tu Carrito
              <span className="text-slate-300 text-xl font-medium">(3 items)</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LISTA DE PRODUCTOS (8 COLUMNAS EN DESKTOP) */}
          <div className="lg:col-span-8 space-y-6">
            <CartList />
          </div>

          {/* RESUMEN DE COMPRA (4 COLUMNAS EN DESKTOP) */}
          <div className="lg:col-span-4 sticky top-10">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;