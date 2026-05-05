//src/app/cart/_components/CartSummary.tsx

'use client'
import { Ticket, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const CartSummary = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-700 text-white rounded-[3rem] p-10 shadow-2xl shadow-slate-300">
        <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
          Resumen <span className="w-1.5 h-6 bg-[#E3261E] rounded-full inline-block" />
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <span>Subtotal</span>
            <span className="text-white">$12,450.00</span>
          </div>
          <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <span>Envío Estimado</span>
            <span className="text-green-500">¡GRATIS!</span>
          </div>
          <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <span>Impuestos (IVA)</span>
            <span className="text-white">$1,992.00</span>
          </div>
          
          <div className="h-px bg-white/10 my-6" />
          
          <div className="flex justify-between items-end">
            <span className="text-sm font-black uppercase tracking-widest">Total</span>
            <span className="text-3xl font-black tracking-tighter">$14,442.00</span>
          </div>
        </div>

        {/* CUPÓN DE DESCUENTO */}
        <div className="relative mb-8 group">
          <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="CÓDIGO DE DESCUENTO"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-[10px] font-bold uppercase tracking-[0.2em] outline-none focus:border-[#E3261E] transition-all"
          />
        </div>
        <Link href="/checkout">
        <button className="w-full bg-[#E3261E] hover:bg-white hover:text-[#0A0D10] text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 group">
          Finalizar Compra
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </button>
         </Link>
      </div>

      {/* INFORMACIÓN DE CONFIANZA */}
      <div className="bg-white rounded-[2rem] p-6 border border-slate-100 flex items-center gap-4">
        <div className="bg-slate-50 p-3 rounded-2xl text-slate-400">
          <ShieldCheck size={24} />
        </div>
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-800">Compra Protegida</h4>
          <p className="text-[9px] text-slate-400 font-bold uppercase leading-relaxed">Garantía de devolución de 30 días en todas las piezas.</p>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;