//src/app/cart/_components/CartItem.tsx

'use client'
import { Trash2, Plus, Minus, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const CartItem = ({ item }: any) =>{
  return (
    <div className="bg-white rounded-[2.5rem] p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative group">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* IMAGEN DEL PRODUCTO */}
        <div className="w-32 h-32 bg-slate-50 rounded-3xl overflow-hidden flex-shrink-0 border border-slate-50 group-hover:scale-105 transition-transform duration-300">
          <img src={item.image} alt={item.name} className="w-full h-full object-contain p-4" />
        </div>

        {/* INFO DEL PRODUCTO */}
        <div className="flex-1 space-y-2 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-start gap-2">
            <div>
              <p className="text-[10px] font-black text-[#E3261E] uppercase tracking-widest">{item.brand}</p>
              <h3 className="text-lg font-black text-slate-800 uppercase leading-tight tracking-tighter">{item.name}</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">SKU: {item.sku}</p>
            </div>
            <p className="text-xl font-black text-slate-800 hidden md:block">{item.price}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-4 gap-4">
            {/* SELECTOR DE CANTIDAD */}
            <div className="flex items-center bg-slate-50 rounded-2xl p-1 border border-slate-100">
              <button className="p-2 hover:bg-white rounded-xl transition-all text-slate-400 hover:text-[#E3261E]">
                <Minus size={16} />
              </button>
              <span className="px-6 font-black text-slate-800 text-sm">01</span>
              <button className="p-2 hover:bg-white rounded-xl transition-all text-slate-400 hover:text-[#E3261E]">
                <Plus size={16} />
              </button>
            </div>

            {/* ACCIONES Y TOTAL UNITARIO (MOBILE) */}
            <div className="flex items-center gap-6">
              <p className="text-xl font-black text-slate-800 md:hidden">{item.price}</p>
              <button className="text-slate-300 hover:text-red-500 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BADGE DE GARANTÍA */}
      <div className="absolute -top-2 -right-2 bg-green-50 text-green-600 px-3 py-1 rounded-full hidden items-center gap-1 border border-green-100 md:flex">
        <ShieldCheck size={12} />
        <span className="text-[8px] font-black uppercase tracking-widest">En Stock</span>
      </div>
    </div>
  );
}

export default CartItem;