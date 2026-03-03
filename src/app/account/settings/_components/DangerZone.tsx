'use client'
import { Trash2, AlertTriangle } from 'lucide-react';

const DangerZone = () =>{
  return (
    <div className="bg-red-50/50 rounded-[2.5rem] p-8 border border-red-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-red-100 p-3 rounded-2xl text-red-600">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-tight text-red-600">Eliminar Cuenta</h2>
            <p className="text-[10px] text-red-500 font-bold uppercase tracking-tighter max-w-sm">
              Esta acción es permanente. Se perderá tu historial de pedidos y beneficios acumulados.
            </p>
          </div>
        </div>
        <button className="w-full md:w-auto px-10 py-4 bg-red-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-red-200 hover:bg-red-700 transition-all flex items-center justify-center gap-2">
          <Trash2 size={16} /> Solicitar Baja
        </button>
      </div>
    </div>
  );
}

export default DangerZone;