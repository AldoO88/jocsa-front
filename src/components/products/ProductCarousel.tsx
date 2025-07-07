// src/components/products/ProductCarousel.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import { CarouselControls } from '../ui/CarouselControls';

// Define las propiedades que aceptará nuestro componente de carrusel de productos.
interface ProductCarouselProps {
  title: string;
  products: Product[];
  bgColor?: 'light' | 'dark';
}

// Define nuestro componente de carrusel de productos.
const ProductCarousel = ({ title, products, bgColor = 'light' }: ProductCarouselProps) => {
  // Opciones para Embla: alinear al inicio y no permitir scroll "vacío"
  const options: EmblaOptionsType = { align: 'start', containScroll: 'trimSnaps' };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  
  // Estados para saber si se puede hacer scroll
  const [canScrollPrev, setCanScrollPrev] = useState(false); // Indica si se puede hacer scroll hacia atrás
  const [canScrollNext, setCanScrollNext] = useState(false); // Indica si se puede hacer scroll hacia adelante

  // emblaApi && emblaApi.scrollPrev() es una forma de evitar que se renderice el componente si el estado de emblaApi cambia
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]); // useCallback para evitar re-renderizaciones en caso de cambiar el estado
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Hook para actualizar el estado de los botones
  useEffect(() => {
    // Si emblaApi no existe, no hacer nada
    if (!emblaApi) return;
    // Definir el estado de los botones
    const onSelect = () => { // onSelect es una función que se ejecuta cada vez que cambia el estado
      setCanScrollPrev(emblaApi.canScrollPrev()); // Llamar a emblaApi.canScrollPrev() para actualizar el estado de canScrollPrev
      setCanScrollNext(emblaApi.canScrollNext()); // Llamar a emblaApi.canScrollNext() para actualizar el estado de canScrollNext
    };
    emblaApi.on('select', onSelect); // Llamar a emblaApi.on('select', onSelect) para actualizar el estado de los botones
    emblaApi.on('reInit', onSelect); // Llamar a emblaApi.on('reInit', onSelect) para actualizar el estado de los botones
    onSelect(); // Llamar a onSelect() para actualizar el estado de los botones
  }, [emblaApi]);

  // Determinar colores basados en el fondo
  const isDark = bgColor === 'dark'; // Si el fondo es oscuro, usar el color negro, sino, el color blanco
  const textColor = isDark ? 'text-white' : 'text-gray-800'; // Determinar el color del texto basado en el fondo

  return (
    <section className={`py-12 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección con título y controles */}
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-3xl font-bold ${textColor}`}>{title}</h2>
          <CarouselControls
            canScrollPrev={canScrollPrev}
            canScrollNext={canScrollNext}
            onPrev={scrollPrev}
            onNext={scrollNext}
          />
        </div>
        
        {/* Carrusel */}
        <div className="embla--product" ref={emblaRef}>
          <div className="embla__container--product">
            {products.map(product => (
              <div key={product.id} className="embla__slide--product">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;