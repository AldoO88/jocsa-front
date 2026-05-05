// src/components/ui/HeroCarousel.tsx
"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

// 1. Definimos los datos de nuestros slides
const slides = [
  {
    id: 1,
    title: "Las Mejores Ofertas de Julio",
    subtitle: "Hasta 30% de descuento en balatas y discos de freno.",
    imageUrl: "/images/hero/slide-frenos.jpg", // Debes tener estas imágenes
    ctaText: "Ver Ofertas",
    ctaLink: "/ofertas"
  },
  {
    id: 2,
    title: "Todo para tu Afinación",
    subtitle: "Kits completos con las mejores marcas: NGK, Bosch, Mann-Filter.",
    imageUrl: "/images/hero/slide-afinacion.jpg",
    ctaText: "Comprar Kits",
    ctaLink: "/categorias/motor"
  },
  {
    id: 3,
    title: "Amortiguadores de Alto Rendimiento",
    subtitle: "Maneja con seguridad y confort. Envío a todo Pachuca y alrededores.",
    imageUrl: "/images/hero/slide-suspension.jpg",
    ctaText: "Explorar Suspensión",
    ctaLink: "/categorias/suspension"
  },
];

const HeroCarousel = () => {
  // 2. Inicializamos Embla Carousel con el plugin de Autoplay
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' }, // loop: para que sea infinito
    [Autoplay({ delay: 5000 })]     // Autoplay: cambia cada 5 segundos
  );

  return (
    // 3. Estructura JSX del carrusel
    <section className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide) => (
          <div className="embla__slide relative" key={slide.id}>
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            />
            {/* Capa oscura para legibilidad */}
            <div className="absolute inset-0 bg-black opacity-50" />
            
            {/* Contenido del slide */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                {slide.subtitle}
              </p>
              <div className="mt-8">
                <Link
                  href={slide.ctaLink}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;