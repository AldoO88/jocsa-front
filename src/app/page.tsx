// src/app/page.tsx
import { mockProducts } from '@/lib/mock-data';
import HeroCarousel from '@/components/ui/HeroCarousel';
import ProductCarousel from '@/components/products/ProductCarousel'; // <-- 1. Importa el nuevo componente

// Ya no necesitamos el componente ProductSection, lo borramos o comentamos.

export default function HomePage() {
  const featuredProducts = mockProducts.filter(p => p.isFeatured);
  const bestsellers = mockProducts.filter(p => p.isBestseller);
  const newArrivals = mockProducts.filter(p => p.isNew);

  return (
    <>
      <HeroCarousel />

      {/* ===== 2. Reemplaza las secciones por el nuevo ProductCarousel ===== */}
      <ProductCarousel
        title="Productos Destacados"
        products={featuredProducts}
        bgColor="light"
      />

      <ProductCarousel
        title="Los Más Vendidos"
        products={bestsellers}
        bgColor="dark"
      />

      <ProductCarousel
        title="Nuevos Productos"
        products={newArrivals}
        bgColor="light"
      />
    </>
  );
}