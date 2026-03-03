//src/app/checkout/_components/ShippinSection.tsx
'use client'

import { MapPin, Plus, CheckCircle2 } from 'lucide-react';

const ShippingSection = () => {
  return (
    <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-black uppercase tracking-tighter flex items-center gap-3">
          <span className="w-2 h-6 bg-[#E3261E] rounded-full" /> 1. Envío
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* DIRECCIÓN SELECCIONADA */}
        <div className="border-2 border-[#E3261E] bg-red-50/10 p-6 rounded-[2rem] relative cursor-pointer">
          <CheckCircle2 className="absolute top-4 right-4 text-[#E3261E]" size={20} />
          <p className="text-[10px] font-black text-[#E3261E] uppercase mb-4">Dirección Principal</p>
          <h4 className="font-black text-slate-800 text-sm mb-1 uppercase">Ricardo Jiménez</h4>
          <p className="text-xs text-slate-500 font-bold leading-relaxed uppercase">
            Av. Insurgentes Sur 1234, Col. Del Valle<br />
            CDMX, 03100 | Tel: 55 1234 5678
          </p>
        </div>

        {/* OTRA DIRECCIÓN (MOCK) */}
        <div className="border-2 border-slate-50 bg-slate-50/50 p-6 rounded-[2rem] hover:border-slate-200 transition-all cursor-pointer flex items-center justify-center">
          <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Plus size={16} /> Agregar Nueva Dirección
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShippingSection;