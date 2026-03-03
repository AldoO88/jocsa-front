//src/app/account/invoices/_componentes/InvoiceFilters.tsx

'use client'
import { Search, Check } from 'lucide-react';
import { useState } from 'react';

const InvoiceFilters = () => {
  const [activeStatuses, setActiveStatuses] = useState<string[]>([]);

  const statuses = [
    { id: 'pagada', label: 'Pagada' },
    { id: 'pendiente', label: 'Pendiente' },
    { id: 'cancelada', label: 'Cancelada' }
  ];

  return (
    <div className="w-full bg-slate-50/50 rounded-[2.5rem] p-6 md:p-8 border border-slate-100 space-y-8">
      {/* FILA 1: FOLIO Y CALENDARIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-4 space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Folio de Factura</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="EJ: FAC-1234" className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold outline-none focus:border-[#E3261E] transition-all uppercase" />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Periodo Facturado</label>
          <div className="grid grid-cols-2 gap-3">
            <input type="date" className="w-full bg-white border border-slate-200 rounded-2xl py-3 px-4 text-[10px] font-black uppercase outline-none focus:border-[#E3261E]" />
            <input type="date" className="w-full bg-white border border-slate-200 rounded-2xl py-3 px-4 text-[10px] font-black uppercase outline-none focus:border-[#E3261E]" />
          </div>
        </div>

        <div className="lg:col-span-2">
          <button className="w-full bg-[#0A0D10] text-white py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#E3261E] transition-all shadow-lg shadow-slate-200">
            Filtrar
          </button>
        </div>
      </div>

      {/* FILA 2: STATUS */}
      <div className="space-y-4">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Estado del Pago</label>
        <div className="flex flex-wrap gap-3">
          {statuses.map((status) => (
            <button
              key={status.id}
              onClick={() => setActiveStatuses(prev => prev.includes(status.id) ? prev.filter(s => s !== status.id) : [...prev, status.id])}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 transition-all ${
                activeStatuses.includes(status.id) ? 'border-[#E3261E] bg-red-50/30 text-[#E3261E]' : 'border-white bg-white text-slate-500 hover:border-slate-100'
              }`}
            >
              <div className={`w-4 h-4 rounded flex items-center justify-center ${activeStatuses.includes(status.id) ? 'bg-[#E3261E]' : 'bg-slate-100'}`}>
                {activeStatuses.includes(status.id) && <Check size={10} className="text-white" strokeWidth={4} />}
              </div>
              <span className="text-[10px] font-black uppercase tracking-tight">{status.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InvoiceFilters;