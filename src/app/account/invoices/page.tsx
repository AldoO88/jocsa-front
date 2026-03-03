//src/app/account/invoices/page.tsx
'use client'

import AccountSidebar from '@/components/account/AccountSidebar';
import InvoiceList from './_components/InvoiceList';
import InvoiceFilters from './_components/InvoiceFilters';

const InvoicesPage = () => {
  return (
          <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="mb-10">
              <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#E3261E] rounded-full inline-block" />
                Mis Facturas
              </h1>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                Historial fiscal y descarga de archivos CFDI 4.0
              </p>
            </div>

            <InvoiceFilters />
            
            <div className="mt-10">
              <InvoiceList />
            </div>
          </section>
  );
}

export default InvoicesPage;

