import React from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const WatermarkedImage: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {/* Imagen Principal */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />

      {/* Capa de Marca de Agua */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="flex flex-col items-center opacity-25 -rotate-12">
          {/* Logo de GM Ingeniería */}
          <img 
            src="/images/hero/logo.png" 
            alt="Watermark" 
            className="w-40 md:w-56 lg:w-64 grayscale"
          />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
            Propiedad de GM Ingeniería
          </span>
        </div>
      </div>

      {/* Overlay sutil al pasar el mouse (opcional) */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-4 right-4 opacity-85 group-hover:opacity-60 transition-opacity ">
         <img src="/images/hero/logo.png" className="w-16 h-16" alt="logo-small" />
      </div>
    </div>
  );
};

export default WatermarkedImage;