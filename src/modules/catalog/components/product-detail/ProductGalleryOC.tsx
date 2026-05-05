// src/modules/catalog/components/product-detail/ProductGalleryOC.tsx
'use client';
import React, { useState } from 'react';

const ProductGalleryOC: React.FC = () => {
  // URLs de imagen_7.png para fidelidad
  const images = [
    '/images/products/perilla/Autopartes-029.jpg', // Reemplazar con la imagen real de frenos
    '/images/products/perilla/Autopartes-030.jpg',
    '/images/products/perilla/Autopartes-031.jpg',
    '/images/products/perilla/Autopartes-032.jpg',
  ];
  
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Imagen Principal Grande con fondo oscuro */}
      <div className="aspect-[1.12] w-full rounded-2xl overflow-hidden bg-transparent border border-[#E0E0E0] shadow-sm flex items-center justify-center p-6">
        <img 
            src={selected} 
            alt="Producto" 
            className="max-w-full max-h-full object-contain" />
      </div>

      {/* Miniaturas con scroll en móvil */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setSelected(img)}
            // Borde naranja JOCSA exacto si está seleccionado
            className={`aspect-square rounded-xl overflow-hidden border-4 transition-all duration-200 p-2 ${
              selected === img ? 'border-[#E3261E]' : 'border-white'
            }`}
          >
            <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGalleryOC;