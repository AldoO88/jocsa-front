// src/modules/catalog/components/product-detail/ProductPageContainer.tsx
'use client';
import React from 'react';
import ProductGalleryOC from './ProductGalleryOC';
import ProductMainInfoOC from './ProductMainInfoOC';
import ProductTabsOC from './ProductTabsOC';
import ProductTechnicalSpecsOC from './ProductTechnicalSpecsOC';
import ProductHelpBoxOC from './ProductHelpBoxOC';

const ProductPageContainer: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#1D1D1D] pb-20">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0..1&display=block" />

      <main className="max-w-7xl mx-auto pt-4 px-6 font-sans">
        
        {/* BREADCRUMBS */}
        <nav className="flex items-center gap-1 text-[11px] font-medium text-[#7A7A7A] mb-6">
          <span>Inicio</span> <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span>Catálogo</span> <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span>Frenos</span> <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[#1D1D1D] font-bold">Disco de Freno de Alto Rendimiento</span>
        </nav>

        {/* --- GRID DE PRODUCTO (LA CLAVE ESTÁ AQUÍ) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-8 mb-16">
          
          {/* LADO IZQUIERDO: GALERÍA (6 de 12 columnas) */}
          <div className="lg:col-span-6">
            <ProductGalleryOC />
          </div>

          {/* LADO DERECHO: INFO (6 de 12 columnas) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ProductMainInfoOC />
          </div>

        </div>

        {/* SECCIÓN INFERIOR */}
        <div className="space-y-10">
          <ProductTabsOC />
          
          {/* Segundo Grid para Specs y Ayuda */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <ProductTechnicalSpecsOC />
            </div>
            <div className="lg:col-span-4">
                <div className='sticky top-4'>
                    <ProductHelpBoxOC />
                </div>
              
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ProductPageContainer;