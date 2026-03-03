//src/app/account/payments/page.tsx
'use client'
import { useState } from 'react';
import AccountSidebar from '@/components/account/AccountSidebar';
import { CreditCard, Plus, ShieldCheck, X } from 'lucide-react';
import PaymentList from './_coponents/PaymentList';
import PaymentForm from './_coponents/PaymentForm';

const PaymentsPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (

          <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
              <div>
                <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#E3261E] rounded-full inline-block" />
                  Métodos de Pago
                </h1>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                  Gestiona tus tarjetas guardadas para compras rápidas
                </p>
              </div>

              <button 
                onClick={() => setShowForm(!showForm)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all ${
                  showForm 
                  ? 'bg-slate-100 text-slate-500' 
                  : 'bg-[#0A0D10] text-white hover:bg-[#E3261E] shadow-xl shadow-slate-200'
                }`}
              >
                {showForm ? <><X size={16} /> Cancelar</> : <><Plus size={16} /> Nueva Tarjeta</>}
              </button>
            </div>

            {showForm && (
              <div className="mb-12 animate-in fade-in zoom-in duration-300">
                <PaymentForm onSuccess={() => setShowForm(false)} />
                <div className="h-px bg-slate-100 my-10" />
              </div>
            )}

            <PaymentList />

            {/* BADGES DE SEGURIDAD */}
            <div className="mt-12 pt-8 border-t border-slate-50 flex flex-wrap gap-6 items-center justify-center opacity-50">
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck size={20} />
                <span className="text-[9px] font-black uppercase tracking-widest">Encriptación SSL 256-bit</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CreditCard size={20} />
                <span className="text-[9px] font-black uppercase tracking-widest">PCI-DSS Compliant</span>
              </div>
            </div>
          </section>
  );
}

export default PaymentsPage;