// src/components/account/Sections/OrdersOverview.tsx

'use client'
import { Plus, CreditCard } from 'lucide-react';
import Link from 'next/link';

const PaymentsOverview = () => {
    return (
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl text-slate-800 flex flex-col justify-between relative overflow-hidden group mt-6">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#E3261E] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
      <div>
        <h3 className="font-black uppercase text-[12px] tracking-widest text-slate-800 mb-8 flex items-center gap-2">
          <CreditCard size={18} className='text-[#E3261E]'/> Métodos de Pago
        </h3>
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="p-2 rounded-lg text-slate-400">
            <CreditCard size={20} className='text'/>
          </div>
          <div>
            <p className="text-sm font-black italic">VISA •••• 4242</p>
            <p className="text-[10px] text-slate-400 uppercase font-bold">Exp: 12/26</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="p-2 rounded-lg text-slate-400">
            <CreditCard size={20} className='text'/>
          </div>
          <div>
            <p className="text-sm font-black italic">VISA •••• 4242</p>
            <p className="text-[10px] text-slate-400 uppercase font-bold">Exp: 12/26</p>
          </div>
        </div>
      </div>
      
      <Link href="/account/payments" className="mt-8 text-[10px] font-black text-[#E3261E] hover:text-[#E3261E] uppercase tracking-[0.2em] transition-colors inline-flex items-center gap-2">
        <Plus size={14} /> Gestionar Tarjetas
      </Link>
    </div>
    )
}

export default PaymentsOverview;