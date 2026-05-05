// src/components/account/Sections/AddressOvweview.tsx

'use client'
import { ChevronRight, MapPin, MapPinHouseIcon } from 'lucide-react';
import Link from 'next/link';

const AddressOverview = () => {
    return (
        <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between border-b-4 border-b-[#E3261E]">
      <div>
        <h3 className="font-black uppercase text-[11px] tracking-widest text-slate-400 mb-6 flex items-center gap-2">
          <MapPin size={18} /> Envío Predeterminado
        </h3>
        <div className='flex flex-row justify-around items-center'>
             <p className="text-sm font-bold text-slate-700 leading-relaxed">
          Av. Insurgentes Sur 1234, <br />
          Col. Del Valle, Benito Juárez <br />
          Ciudad de México, 03100
        </p>
        <p>
            <MapPinHouseIcon size={24} className="text-[#E3261E] inline-block mr-1" /> 
        </p>
        </div>
       
      </div>
      <Link href="/account/addresses" className="mt-8 text-[10px] font-black text-[#E3261E] uppercase tracking-widest flex items-center gap-2">
        Cambiar dirección <ChevronRight size={14} />
      </Link>
    </div>
    );
}

export default AddressOverview;