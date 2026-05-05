// src/modules/catalog/components/product-detail/ProductMainInfoOC.tsx
'use client';
import { Heart } from 'lucide-react';
import React, { useState } from 'react';

const ProductMainInfoOC: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col pt-2">
      {/* Cabecera Info */}
      <span className="text-[11px] font-semibold text-[#E3261E] uppercase tracking-[0.1em]">
        Performance Series
      </span>
      <h1 className="text-[32px] font-extrabold text-[#1D1D1D] mt-1 leading-[1.1] tracking-tight">
        Disco de Freno de Alto Rendimiento Carbono-Cerámico
      </h1>
      <p className="text-[13px] text-[#7A7A7A] mt-2 tracking-tight uppercase">SKU: BD-HP-99201-JOCSA</p>

      {/* Estrellas y reseñas */}
      <div className="flex items-center gap-3 mt-5 mb-8">
        <div className="flex text-[#E3261E]">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
          ))}
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>star_half</span>
        </div>
        <span className="text-[13px] text-[#A1A1A1]">(48 reseñas de clientes)</span>
      </div>

      {/* Precio */}
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-[40px] font-black text-[#1D1D1D] tracking-tighter">
          $2,450.00
        </span>
        <span className="text-[16px] font-bold text-[#1D1D1D]">MXN</span>
        <span className="text-[18px] text-[#A1A1A1] line-through tracking-tighter decoration-1">
          $2,850.00 MXN
        </span>
      </div>
      <p className="text-[12px] text-[#7A7A7A]">IVA incluido. Envío gratis a todo México.</p>

      {/* Stock y Cantidad */}
      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-3 text-green-600">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          <span className="text-[14px] font-bold">En stock / 5 unidades disponibles</span>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-bold uppercase text-[#7A7A7A] tracking-wider">Cantidad</label>
          <div className="flex items-center border border-[#E0E0E0] rounded-lg w-max bg-white">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 text-[#A1A1A1] hover:text-[#1D1D1D]">
              <span className="material-symbols-outlined text-[16px]">remove</span>
            </button>
            <span className="px-6 py-2.5 font-bold text-[#1D1D1D] border-x border-[#E0E0E0] min-w-[60px] text-center">
              {quantity}
            </span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 text-[#A1A1A1] hover:text-[#1D1D1D]">
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>
        </div>

        {/* Botones de Acción - Colores exactos */}
        <div className="flex flex-row sm:grid-cols-[1fr,auto] gap-3 pt-2">
          <button className="flex items-center justify-center gap-2.5 bg-[#E3261E] text-white font-bold py-4 px-6 rounded-xl text-[15px] hover:bg-[#891511] transition-all shadow-lg shadow-[#E25316]/10">
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            Agregar al carrito
          </button>
          <button className="bg-[#0e0d0f] text-white font-bold py-4 px-8 rounded-xl text-[15px] hover:bg-[#4b494c] transition-all">
            Comprar ahora
          </button>
          {/* Mobile Wishlist */}
          <button className="w-14 bg-slate-50 text-slate-400 py-5 rounded-2xl flex items-center justify-center hover:bg-white hover:text-primary hover:border-primary border-1 border-gray-400 transition-all">
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Info Boxes Inferiores */}
      <div className="grid grid-cols-2 gap-3 mt-10">
        <div className="flex items-center gap-3.5 p-4 bg-[#EDEDED] rounded-xl border border-[#E0E0E0]">
          <span className="material-symbols-outlined text-[#7A7A7A] text-[24px]">local_shipping</span>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-[#1D1D1D]">Envío Express</span>
            <span className="text-[11px] text-[#7A7A7A] tracking-tight">24-48 horas hábiles</span>
          </div>
        </div>
        <div className="flex items-center gap-3.5 p-4 bg-[#EDEDED] rounded-xl border border-[#E0E0E0]">
          <span className="material-symbols-outlined text-[#7A7A7A] text-[24px]">verified_user</span>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-[#1D1D1D]">Garantía JOCSA</span>
            <span className="text-[11px] text-[#7A7A7A] tracking-tight">Protección total</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMainInfoOC;