// src/components/ui/CarouselControls.tsx
import React from 'react';

// Define un componente de flecha usando SVG (gráficos vectoriales).
const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
  </svg>
);

// Define las propiedades que aceptará nuestro componente de controles de carrusel.
interface CarouselControlsProps {
  canScrollPrev: boolean; // Indica si se puede hacer scroll hacia atrás
  canScrollNext: boolean; // Indica si se puede hacer scroll hacia adelante
  onPrev: () => void; // Función que se ejecuta cuando se hace scroll hacia atrás
  onNext: () => void; // Función que se ejecuta cuando se hace scroll hacia adelante
  className?: string; // Permite agregar clases CSS externas al contenedor.
}

// Define nuestro componente de controles de carrusel.
export const CarouselControls = ({
  canScrollPrev, 
  canScrollNext,
  onPrev,
  onNext,
  className = '' // Le estamos pasando por defecto className = '' para evitar errores si no se proporciona.
}: CarouselControlsProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={onPrev}
        disabled={!canScrollPrev}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition-all"
        aria-label="Anterior"
      >
        <Arrow className="h-6 w-6" />
      </button>
      <button
        onClick={onNext}
        disabled={!canScrollNext}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition-all"
        aria-label="Siguiente"
      >
        <Arrow className="h-6 w-6 transform rotate-180" />
      </button>
    </div>
  );
};