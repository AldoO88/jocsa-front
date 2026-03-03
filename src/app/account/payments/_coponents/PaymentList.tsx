//src/app/account/payments/_coponents/PaymentList.tsx

'use client'
import { Trash2, Star, CreditCard } from 'lucide-react';

const CARDS = [
  { id: 1, brand: 'VISA', last4: '4242', exp: '12/26', holder: 'RICARDO JIMENEZ', isDefault: true },
  { id: 2, brand: 'MASTERCARD', last4: '8890', exp: '08/25', holder: 'RICARDO JIMENEZ', isDefault: false },
];

const PaymentList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {CARDS.map((card) => (
        <div 
          key={card.id}
          className={`relative overflow-hidden p-8 rounded-[2.5rem] border-2 transition-all group ${
            card.isDefault 
            ? 'bg-white border-[#E3261E] shadow-xl shadow-red-500/5' 
            : 'bg-white border-2 border-slate-100 text-slate-800 hover:border-slate-200'
          }`}
        >
          {/* LOGO DE MARCA (SIMULADO) */}
          <div className="flex justify-between items-start mb-12">
            <div className={`px-4 py-1.5 rounded-lg font-black italic text-sm border ${
              card.isDefault ? 'border-white/20 bg-slate-200' : 'border-slate-100 bg-slate-100'
            }`}>
              {card.brand}
            </div>
            <div className="flex gap-2">
               {!card.isDefault && (
                  <button className="p-2 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all text-slate-400">
                    <Trash2 size={18} />
                  </button>
               )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${card.isDefault ? 'text-slate-400' : 'text-slate-400'}`}>
                Número de Tarjeta
              </p>
              <p className="text-xl font-black tracking-[0.15em]">
                •••• •••• •••• {card.last4}
              </p>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className={`text-[9px] font-black uppercase tracking-widest ${card.isDefault ? 'text-slate-400' : 'text-slate-400'}`}>
                  Titular
                </p>
                <p className="text-xs font-bold uppercase">{card.holder}</p>
              </div>
              <div className="text-right">
                <p className={`text-[9px] font-black uppercase tracking-widest ${card.isDefault ? 'text-white/40' : 'text-slate-400'}`}>
                  Expira
                </p>
                <p className="text-xs font-bold">{card.exp}</p>
              </div>
            </div>
          </div>

          {/* ACCIÓN PREDETERMINADA */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            {card.isDefault ? (
              <span className="flex items-center gap-2 text-[9px] font-black uppercase text-[#E3261E]">
                <Star size={12} fill="currentColor" /> Método Principal
              </span>
            ) : (
              <button className="text-[9px] font-black uppercase text-slate-400 hover:text-slate-800 transition-colors">
                Marcar como principal
              </button>
            )}
            <CreditCard size={20} className={card.isDefault ? 'text-white/20' : 'text-slate-100'} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaymentList;