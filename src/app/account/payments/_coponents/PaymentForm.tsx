//src/app/account/payments/_coponents/PaymentForm.tsx

'use client'
import { Input } from '@/components/ui/Input';
import { Lock, Save } from 'lucide-react';

const PaymentForm = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <Lock size={18} className="text-green-600" />
        </div>
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Añadir nueva tarjeta</h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-4 lg:col-span-2">
          <Input label="Número de Tarjeta" placeholder="0000 0000 0000 0000" />
        </div>
        <div className="md:col-span-4 lg:col-span-2">
          <Input label="Nombre en la Tarjeta" placeholder="Como aparece en el plástico" />
        </div>
        
        <div className="md:col-span-2">
          <Input label="Fecha de Expiración" placeholder="MM/YY" />
        </div>
        <div className="md:col-span-2">
          <Input label="Código CVC" placeholder="3 o 4 dígitos" type="password" />
        </div>

        <div className="md:col-span-4 flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <p className="text-[10px] text-slate-400 font-medium leading-relaxed max-w-md">
            Al guardar esta tarjeta, autorizas a <b>JOCSA</b> para procesar pagos de forma segura. Tus datos están protegidos por estándares bancarios.
          </p>
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              type="button" 
              onClick={onSuccess}
              className="flex-1 md:flex-none px-8 py-4 text-[10px] font-black uppercase text-slate-400"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="flex-1 md:flex-none bg-[#E3261E] text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-red-200 flex items-center justify-center gap-2"
            >
              <Save size={18} /> Guardar Tarjeta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;