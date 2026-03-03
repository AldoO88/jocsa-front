//src/app/account/fiscal-information/page.tsx
'use client'

import { ShieldCheck } from "lucide-react";
import FiscalForm from "./_components/FiscalForm";

const FiscalInformationPage = () => {
    return (
        <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#E3261E] rounded-full inline-block" />
                  Información Fiscal
                </h1>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                  Configura tus datos para la emisión de facturas CFDI 4.0
                </p>
              </div>
              
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-600 border border-green-100">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Conexión Segura SAT</span>
              </div>
            </div>

            <FiscalForm/>
          </section>
    );
}

export default FiscalInformationPage;