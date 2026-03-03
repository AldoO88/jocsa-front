// src/components/account/Sections/FiscalOverview.tsx

'use client'
import { ExternalLink, FileText } from 'lucide-react';
import Link from 'next/link';

const FiscalOverview = () => {
    return (
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between">
      <div>
        <h3 className="font-black uppercase text-[11px] tracking-widest text-slate-400 mb-6 flex items-center gap-2">
          <FileText size={18} /> Datos Fiscales
        </h3>
        <div className="space-y-3">
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase">RFC</p>
            <p className="text-sm font-black text-slate-800 tracking-tight">XAXX010101000</p>
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase">Razón Social</p>
            <p className="text-sm font-bold text-slate-700 truncate">Ricardo Jiménez Estrada</p>
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase">Uso de CFDI</p>
            <p className="text-sm font-bold text-slate-700 truncate">PUBLICO EN GENERAL</p>
          </div>
        </div>
      </div>
      <Link href="/account/fiscal-information" className="mt-8 text-[10px] font-black text-[#E3261E] uppercase tracking-widest flex items-center gap-2">
        Actualizar datos <ExternalLink size={12} />
      </Link>
    </div>
    );
}

export default FiscalOverview;