import Link from 'next/link';
import { ProductCard } from './ProductCard';
import { Product } from '@/types';

export const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <section className="bg-gray-100">
      <div className='py-20 mx-auto px-6 container'>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Lo más vendido</h2>
          <p className="text-gray-500 text-sm mt-2">Calidad comprobada por nuestros clientes expertos</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`/producto/${product.id}`} key={product.id} className="block">
            <ProductCard key={product.id} product={product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};