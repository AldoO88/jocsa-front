// src/app/page.tsx
import { mockProducts } from '@/lib/mock-data';
import ProductCard from '@/components/products/ProductCard';
import HeroCarousel from '@/components/ui/HeroCarousel';

// Componente para renderizar una sección de productos
const ProductSection = ({ title, products }: { title: string, products: any[] }) => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);


export default function HomePage() {
  // Filtramos los productos para cada sección
  const featuredProducts = mockProducts.filter(p => p.isFeatured);
  const bestsellers = mockProducts.filter(p => p.isBestseller);
  const newArrivals = mockProducts.filter(p => p.isNew);

  return (
    <>
      {/* ===== Sección Hero (Banner Principal) ===== */}
      <HeroCarousel />

      {/* ===== Secciones de Productos ===== */}
      <ProductSection title="Productos Destacados" products={featuredProducts} />

      {/* Separador visual */}
      <div className="bg-gray-800">
        <ProductSection title="Los Más Vendidos" products={bestsellers} />
      </div>

      <ProductSection title="Nuevos Productos" products={newArrivals} />
    </>
  );
}