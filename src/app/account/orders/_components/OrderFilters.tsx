//src/app/account/orders/_components/OrderFilters.tsx
'use client'
import { Search, Check, Calendar } from 'lucide-react';
import { useState } from 'react';

const OrderFilters = () => {
  const [activeStatuses, setActiveStatuses] = useState<string[]>([]);

  const statuses = [
    { id: 'camino', label: 'En camino' },
    { id: 'entregado', label: 'Entregado' },
    { id: 'cancelado', label: 'Cancelado' }
  ];

  const toggleStatus = (id: string) => {
    setActiveStatuses(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-slate-100 space-y-8">
      
      {/* FILA 1: FOLIO Y CALENDARIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        
        {/* Folio de Pedido */}
        <div className="lg:col-span-4 space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Folio del Pedido
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="EJ: JO-9852"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold outline-none focus:border-[#E3261E] focus:bg-white transition-all uppercase"
            />
          </div>
        </div>

        {/* Rango de Fechas */}
        <div className="lg:col-span-6 space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Rango de Fechas (Desde / Hasta)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <input 
                type="date" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 text-[10px] font-black uppercase outline-none focus:border-[#E3261E] focus:bg-white transition-all"
              />
            </div>
            <div className="relative">
              <input 
                type="date" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 text-[10px] font-black uppercase outline-none focus:border-[#E3261E] focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* Botón de Aplicar (Alineado a la Fila 1) */}
        <div className="lg:col-span-2">
          <button className="w-full bg-[#0A0D10] text-white py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#E3261E] transition-all shadow-lg shadow-slate-200 active:scale-95">
            Buscar
          </button>
        </div>
      </div>

      {/* FILA 2: STATUS */}
      <div className="space-y-4">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
          Filtrar por Estado
        </label>
        <div className="flex flex-wrap gap-3">
          {statuses.map((status) => {
            const isActive = activeStatuses.includes(status.id);
            return (
              <button
                key={status.id}
                onClick={() => toggleStatus(status.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 transition-all group ${
                  isActive
                    ? 'border-[#E3261E] bg-red-50/30 text-[#E3261E]'
                    : 'border-slate-50 bg-slate-50 text-slate-500 hover:border-slate-200'
                }`}
              >
                <div className={`w-4 h-4 rounded shadow-inner flex items-center justify-center transition-colors ${
                  isActive ? 'bg-[#E3261E]' : 'bg-white border border-slate-200'
                }`}>
                  {isActive && <Check size={10} className="text-white" strokeWidth={4} />}
                </div>
                <span className="text-[10px] font-black uppercase tracking-tight">
                  {status.label}
                </span>
              </button>
            );
          })}

          {/* Opción de Limpiar Filtros */}
          {activeStatuses.length > 0 && (
            <button 
              onClick={() => setActiveStatuses([])}
              className="text-[9px] font-black text-slate-300 uppercase hover:text-[#E3261E] transition-colors ml-2"
            >
              Limpiar selección
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderFilters;
