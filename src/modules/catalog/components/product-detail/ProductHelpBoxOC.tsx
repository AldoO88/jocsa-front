// src/modules/catalog/components/product-detail/ProductHelpBoxOC.tsx
'use client';
import React from 'react';

const ProductHelpBoxOC: React.FC = () => {
  return (
    <div className="bg-[#EDEDED] p-8 rounded-2xl border border-[#E0E0E0] space-y-3 relative">
      <h3 className="text-[16px] font-bold text-[#1D1D1D]">¿Necesitas ayuda?</h3>
      <p className="text-[13px] text-[#7A7A7A] leading-relaxed max-w-[280px]">
        Nuestros expertos están listos para confirmar la compatibilidad de esta pieza con tu vehículo.
      </p>
      
      {/* Botón WhatsApp - Color verde exacto */}
      <a 
        href="https://wa.me/XXXXXXXXXX" // Reemplazar con el número real
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold py-3.5 px-6 rounded-xl text-[14px] hover:bg-[#1EBE57] transition-all shadow-md shadow-[#25D366]/20 mt-5"
      >
        <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>message</span>
        Chat con Asesor
      </a>
    </div>
  );
};

export default ProductHelpBoxOC;