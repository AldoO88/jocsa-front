//src/app/checkout/page.tsx
    
'use client'
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import PaymentSection from './_components/PaymentSection';
import OrderSummary from './_components/OrderSummary';
import ShippingSection from './_components/ShippingSection';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* HEADER SIMPLE (Para evitar fugas de usuario) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
          <div>
            <Link href="/cart" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#E3261E] mb-2 transition-colors">
              <ArrowLeft size={14} /> Editar Carrito
            </Link>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-800">Finalizar Compra</h1>
          </div>
          <div className="flex items-center gap-6 py-3 px-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
             <div className="flex items-center gap-2 text-green-600 font-black text-[9px] uppercase tracking-widest">
                <Lock size={14} /> Pago Seguro SSL
             </div>
             <div className="w-px h-4 bg-slate-200" />
             <div className="flex items-center gap-2 text-slate-400 font-black text-[9px] uppercase tracking-widest">
                <ShieldCheck size={14} /> Garantía JOCSA
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* COLUMNA IZQUIERDA: FORMULARIOS (8 COLUMNAS) */}
          <div className="lg:col-span-8 space-y-8">
            <ShippingSection />
            <PaymentSection />
          </div>

          {/* COLUMNA DERECHA: RESUMEN (4 COLUMNAS) */}
          <div className="lg:col-span-4 lg:sticky lg:top-10">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;