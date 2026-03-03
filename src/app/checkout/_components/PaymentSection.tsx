//src/app/checkout/_components/PaymentSection.tsx
'use client'
import { CreditCard, CheckCircle2 } from 'lucide-react';

const PaymentSection = () => {
  return (
    <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
      <h2 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3 mb-8">
        <span className="w-2 h-6 bg-[#E3261E] rounded-full" /> 2. Método de Pago
      </h2>

      <div className="space-y-4">
        {/* TARJETA GUARDADA */}
        <div className="flex items-center justify-between p-6 rounded-[2rem] bg-[#0A0D10] text-white shadow-xl shadow-slate-200 group cursor-pointer transition-all">
          <div className="flex items-center gap-6">
            <div className="w-14 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
              <span className="italic font-black text-xs">VISA</span>
            </div>
            <div>
              <p className="text-sm font-black tracking-widest">•••• •••• •••• 4242</p>
              <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Exp: 12/26</p>
            </div>
          </div>
          <CheckCircle2 className="text-[#E3261E]" size={24} />
        </div>

        {/* BOTÓN OTRO MÉTODO */}
        <button className="w-full p-6 border-2 border-dashed border-slate-100 rounded-[2rem] text-[10px] font-black uppercase text-slate-400 hover:border-[#E3261E] hover:text-[#E3261E] transition-all">
          Pagar con otra tarjeta o transferencia
        </button>
      </div>
    </section>
  );
}

export default PaymentSection;