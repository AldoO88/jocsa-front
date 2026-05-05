import { mockProducts } from '@/lib/mock-data';
import ProductFilters from '@/modules/catalog/components/product-list/ProductFilters';
import ProductList from '@/modules/catalog/components/product-list/ProductList';
import { SlidersHorizontal } from 'lucide-react';

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* HEADER DEL CATÁLOGO */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-4">
              <span className="w-3 h-10 bg-[#E3261E] rounded-full inline-block" />
              Refacciones
            </h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              Explora más de 5,000 autopartes de alto rendimiento
            </p>
          </div>

          {/* BOTÓN FILTROS MÓVIL (Visible solo en < lg) */}
          <button className="lg:hidden w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-sm">
            <SlidersHorizontal size={16} /> Filtrar Resultados
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* ASIDE DE FILTROS (Desktop) */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <ProductFilters />
          </aside>

          {/* LISTADO DE PRODUCTOS */}
          <main className="flex-1">
            <ProductList products={mockProducts.slice(0,10)} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;