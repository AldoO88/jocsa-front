// src/app/page.tsx
import { mockProducts } from '@/lib/mock-data';
import HeroCarousel from '@/components/ui/HeroCarousel';// <-- 1. Importa el nuevo componente
import Hero from '@/components/home/Hero';
import { ProductGrid } from '@/components/home/ProductGrid';
import PopularCategories from '@/components/home/PopularCategories';
import ContactBanner from '@/components/home/ContactBanner';

export default function HomePage() {
  const featuredProducts = mockProducts.filter(p => p.isFeatured);
  const bestsellers = mockProducts.filter(p => p.isBestseller);
  const newArrivals = mockProducts.filter(p => p.isNew);

  return (
    <>
      <Hero />
      <PopularCategories />
      <ProductGrid products={mockProducts.slice(0,10)} /> {/* Muestra los primeros 6 productos en una cuadrícula */}
      <ContactBanner />

    </>
  );
}