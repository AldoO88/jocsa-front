//src/app/checkout/_components/OrderSummary.tsx
'use client'
import { ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const OrderSummary = () => {
  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8">
      <h3 className="text-lg font-black uppercase tracking-tighter text-slate-800">Resumen del Pedido</h3>
      
      {/* MINI LISTA DE PRODUCTOS */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-slate-50 rounded-2xl p-2 border border-slate-100 flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=100" alt="prod" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h4 className="text-[10px] font-black text-slate-800 uppercase leading-tight">Kit Frenos Brembo</h4>
            <p className="text-[9px] font-bold text-slate-400 uppercase">1 pza. | $8,450.00</p>
          </div>
        </div>
      </div>

      <div className="h-px bg-slate-100 w-full" />

      {/* TOTALES */}
      <div className="space-y-3">
        <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 tracking-widest">
          <span>Subtotal</span>
          <span>$12,450.00</span>
        </div>
        <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 tracking-widest">
          <span>Envío</span>
          <span className="text-green-600">GRATIS</span>
        </div>
        <div className="flex justify-between items-end pt-4">
          <span className="text-sm font-black uppercase tracking-tighter">Total Final</span>
          <span className="text-3xl font-black text-slate-800 tracking-tighter">$14,442.00</span>
        </div>
      </div>

        <Link href="/checkout/success">
      <button className="w-full bg-[#E3261E] text-white py-6 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-red-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
        Confirmar y Pagar <ArrowRight size={18} />
      </button>
      </Link>

      <p className="text-center text-[8px] font-bold text-slate-400 uppercase leading-relaxed px-4">
        Al hacer clic en "Confirmar y Pagar", aceptas nuestros términos de servicio y políticas de garantía automotriz.
      </p>
    </div>
  );
}

export default OrderSummary;