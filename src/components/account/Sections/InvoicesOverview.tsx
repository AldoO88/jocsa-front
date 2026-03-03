// src/components/account/Sections/InvoicesOverview.tsx

'use client'
import { FileStack, Download } from 'lucide-react';
import Link from 'next/link';

const InvoicesOverview = () => {
    const invoices = ['FAC-2024-001', 'FAC-2024-002', 'FAC-2024-003'];
    return (
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100">
      <h3 className="font-black uppercase text-[11px] tracking-widest text-slate-400 mb-8 flex items-center gap-2">
        <FileStack size={18} /> Facturas Recientes
      </h3>
      <div className="space-y-4">
        {invoices.map(inv => (
          <div key={inv} className="flex justify-between items-center group">
            <span className="text-xs font-bold text-slate-700">{inv}</span>
            <button className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover:bg-[#E3261E] group-hover:text-white transition-all">
              <Download size={14} />
            </button>
          </div>
        ))}
      </div>
      <Link href="/account/invoices" className="mt-8 inline-block text-[10px] font-black text-[#E3261E] uppercase tracking-widest hover:underline">Ver todas</Link>
    </div>
    );
}

export default InvoicesOverview;