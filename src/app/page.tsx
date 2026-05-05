// src/app/page.tsx
import { mockProducts } from '@/lib/mock-data';
import HeroCarousel from '@/shared/components/ui/HeroCarousel';// <-- 1. Importa el nuevo componente
import Hero from '@/modules/catalog/components/discovery/Hero';
import { ProductGrid } from '@/modules/catalog/components/product-list/ProductGrid';
import PopularCategories from '@/modules/catalog/components/discovery/PopularCategories';
import ContactBanner from '@/modules/catalog/components/discovery/ContactBanner';

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