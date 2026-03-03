//src/app/account/addresses/_components/AddressList.tsx

'use client'
import { Home, Briefcase, MapPin, Trash2, Edit3, Star } from 'lucide-react';

const ADDRESSES = [
  {
    id: 1,
    type: 'Principal',
    tag: 'Casa',
    isDefault: true,
    name: 'Ricardo Jiménez',
    street: 'Av. Insurgentes Sur 1234',
    suburb: 'Col. Del Valle',
    city: 'Benito Juárez, CDMX',
    cp: '03100',
    phone: '55 1234 5678'
  },
  {
    id: 2,
    type: 'Taller',
    tag: 'Trabajo',
    isDefault: false,
    name: 'JOCSA Motors',
    street: 'Calle 5 de Mayo #45',
    suburb: 'Naucalpan Centro',
    city: 'Naucalpan, Edo. Méx',
    cp: '53000',
    phone: '55 9876 5432'
  }
];

const AddressList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ADDRESSES.map((addr) => (
        <div 
          key={addr.id} 
          className={`relative p-8 rounded-[2.5rem] border-2 transition-all group ${
            addr.isDefault 
            ? 'border-[#E3261E] bg-white shadow-xl shadow-red-500/5' 
            : 'border-slate-100 bg-slate-50/30 hover:border-slate-200'
          }`}
        >
          {/* BADGE PREDETERMINADA */}
          {addr.isDefault && (
            <div className="absolute -top-3 left-8 bg-[#E3261E] text-white text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-2">
              <Star size={10} fill="currentColor" /> Predeterminada
            </div>
          )}

          <div className="flex justify-between items-start mb-6">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-50 text-slate-400 group-hover:text-[#E3261E] transition-colors">
              {addr.tag === 'Casa' ? <Home size={24} /> : <Briefcase size={24} />}
            </div>
            <div className="flex gap-2">
              <button className="p-2.5 bg-white rounded-xl text-slate-400 hover:text-blue-600 border border-slate-50 shadow-sm transition-all">
                <Edit3 size={16} />
              </button>
              {!addr.isDefault && (
                <button className="p-2.5 bg-white rounded-xl text-slate-400 hover:text-red-600 border border-slate-50 shadow-sm transition-all">
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="font-black text-slate-800 text-sm uppercase tracking-tight">{addr.name}</h3>
            <p className="text-xs font-bold text-slate-500 leading-relaxed">
              {addr.street}, {addr.suburb} <br />
              {addr.city}, CP {addr.cp}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
             <span className="text-[10px] font-black text-slate-400 flex items-center gap-1">
               <MapPin size={12} className="text-[#E3261E]" /> {addr.phone}
             </span>
             {!addr.isDefault && (
               <button className="text-[9px] font-black uppercase text-[#E3261E] hover:underline tracking-widest">
                 Hacer Principal
               </button>
             )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddressList;