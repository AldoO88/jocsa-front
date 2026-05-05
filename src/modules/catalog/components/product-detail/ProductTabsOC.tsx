// src/modules/catalog/components/product-detail/ProductTabsOC.tsx
'use client';
import React, { useState } from 'react';

const ProductTabsOC: React.FC = () => {
  const tabs = ['Caracteristicas', 'Descripción', 'Garantía'];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border-b border-[#E0E0E0]">
      <nav className="flex gap-10">
        {tabs.map((tab, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`pb-4 text-[13px] font-bold uppercase tracking-[0.15em] transition-all relative ${
              activeTab === idx ? 'text-[#1D1D1D]' : 'text-[#7A7A7A] hover:text-[#1D1D1D]'
            }`}
          >
            {tab}
            {/* Línea naranja inferior para el tab activo */}
            {activeTab === idx && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E25316] rounded-full"></div>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProductTabsOC;