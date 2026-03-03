'use client'
import { useState } from 'react';
import { MapPin, Plus, X } from 'lucide-react';
import AddressList from './_components/AddressList';
import AddressForm from './_components/AddressForm';

const AddressesPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
          <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100 min-h-[600px]">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
              <div>
                <h1 className="text-2xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#E3261E] rounded-full inline-block" />
                  Mis Direcciones
                </h1>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                  Gestiona tus puntos de entrega y facturación
                </p>
              </div>

              <button 
                onClick={() => setShowForm(!showForm)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-lg ${
                  showForm 
                  ? 'bg-slate-100 text-slate-500 shadow-none' 
                  : 'bg-[#E3261E] text-white shadow-red-200 hover:scale-105'
                }`}
              >
                {showForm ? <><X size={16} /> Cerrar</> : <><Plus size={16} /> Nueva Dirección</>}
              </button>
            </div>

            {/* FORMULARIO DINÁMICO (SE MUESTRA AL DAR CLIC EN NUEVA) */}
            {showForm && (
              <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-300">
                <AddressForm onSuccess={() => setShowForm(false)} />
                <div className="h-px bg-slate-100 my-12" />
              </div>
            )}

            <AddressList />
          </section>
       
  );
}

export default AddressesPage;