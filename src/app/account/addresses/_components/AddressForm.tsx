'use client'
import { Input } from '@/components/ui/Input';
import { Save, Info } from 'lucide-react';

const AddressForm = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
      <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Nueva Dirección de Entrega</h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Input label="Nombre del Receptor" placeholder="Nombre completo de quien recibe" />
        </div>
        <Input label="Teléfono de Contacto" placeholder="10 dígitos" />
        
        <div className="lg:col-span-2">
          <Input label="Calle y Número" placeholder="Ej. Av. Principal 123 Int. 4" />
        </div>
        <Input label="Código Postal" placeholder="5 dígitos" />
        
        <Input label="Colonia / Asentamiento" placeholder="Nombre de la colonia" />
        <Input label="Ciudad / Municipio" placeholder="Ej. Naucalpan" />
        <Input label="Estado" placeholder="Ej. Estado de México" />

        <div className="lg:col-span-3">
          <Input label="Referencias Visuales (Opcional)" placeholder="Fachada color rojo, entre calle X y Y..." />
        </div>

        <div className="lg:col-span-3 bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-6 bg-slate-100 rounded-full relative p-1 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Establecer como predeterminada</span>
          </div>
          <div className="flex gap-4">
             <button type="button" onClick={onSuccess} className="text-[10px] font-black uppercase text-slate-400">Cancelar</button>
             <button type="submit" className="bg-[#0A0D10] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#E3261E] transition-all flex items-center gap-2">
               <Save size={16} /> Guardar Dirección
             </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;