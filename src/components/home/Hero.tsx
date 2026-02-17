// src/components/home/Hero.tsx
'use client';

import Image from 'next/image';
import { Button } from '../ui/Button';
import HeroForm from './HeroForm';
import imageHero from '@/assets/images/auto-image-home.avif';

export default function Hero() {
    return (
        <section className="relative min-h-[650px] bg-[#0A0D10] flex items-center overflow-hidden">
        {/* Background Image con Next.js Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                src={imageHero} 
                alt="Hero Background"
                fill
                className="object-cover opacity-40 object-right"
                priority
                />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-6">
                    <span className="inline-block bg-[#E3261E] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-lg">
                        Nueva Temporada 2024
                    </span>
                    <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white leading-[1.1] uppercase italic">
                        Precisión en <br />
                        <span className=" text-[#E3261E] not-italic">Cada Pieza</span>
                    </h1>
                    <p className="text-gray-400 max-w-md text-xl">
                        Refacciones de alto rendimiento y accesorios certificados para mantener tu auto al máximo nivel. Calidad garantizada por JOCSA.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button className="bg-[#E3261E] hover:bg-red-700">EXPLORAR CATÁLOGO</Button>
                        <Button variant="secondary" className="bg-white/10 backdrop-blur-md">OFERTAS DEL MES</Button>
                    </div>
                </div>

                <HeroForm />
            </div>
        </section>
    );
}