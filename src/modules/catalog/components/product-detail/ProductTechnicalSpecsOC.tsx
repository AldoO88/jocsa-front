// src/modules/catalog/components/product-detail/ProductTechnicalSpecsOC.tsx
'use client';
import React from 'react';

const ProductTechnicalSpecsOC: React.FC = () => {
  // Datos exactos de image_7.png
  const specs = [
    { label: 'Material', value: 'Carbono-Cerámico Reforzado' },
    { label: 'Diámetro', value: '380mm' },
    { label: 'Tipo', value: 'Ventilado / Perforado' },
    { label: 'Grosor', value: '32mm' },
    { label: 'Compatibilidad', value: 'Audi R8, Porsche 911 (GT3)' },
    { label: 'Peso', value: '4.5 kg' },
    { label: 'Acabado', value: 'Anti-corrosión Geomet' },
    { label: 'Posición', value: 'Delantero' },
  ];

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E0E0E0] shadow-sm">
      <h2 className="text-[20px] font-bold text-[#1D1D1D] mb-8">Especificaciones Técnicas</h2>
      
      {/* Grid responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
        {specs.map((spec, i) => (
          <div key={i} className="flex justify-between items-center border-b border-[#F0F0F0] py-3.5">
            <span className="text-[14px] text-[#7A7A7A] font-medium">{spec.label}</span>
            <span className="text-[14px] text-[#1D1D1D] font-bold text-right">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTechnicalSpecsOC;