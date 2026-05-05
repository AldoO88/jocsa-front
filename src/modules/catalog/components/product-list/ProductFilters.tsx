//src/app/shop/_components/ProductFilters.tsx
'use client'
const ProductFilters = () =>{
  const categories = ['Motor', 'Frenos', 'Suspensión', 'Iluminación', 'Transmisión'];
  const brands = ['Brembo', 'Bosch', 'Garrett', 'Mobil 1', 'Castrol'];

  return (
    <div className="space-y-10 sticky top-10">
      {/* CATEGORÍAS */}
      <div className="space-y-4">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#E3261E] rounded-full" /> Categorías
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-5 h-5 border-2 border-slate-100 rounded-lg group-hover:border-[#E3261E] transition-all flex items-center justify-center">
                <div className="w-2 h-2 bg-[#E3261E] rounded-sm opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase group-hover:text-slate-800 transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* RANGO DE PRECIO */}
      <div className="space-y-4">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#E3261E] rounded-full" /> Rango de Precio
        </h3>
        <div className="space-y-4 px-2">
          <input type="range" className="w-full accent-[#E3261E]" />
          <div className="flex justify-between text-[10px] font-black text-slate-400">
            <span>$0</span>
            <span>$50,000+</span>
          </div>
        </div>
      </div>

      {/* MARCAS */}
      <div className="space-y-4">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#E3261E] rounded-full" /> Marcas Premium
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {brands.map((brand) => (
            <button key={brand} className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-[9px] font-black uppercase text-slate-400 hover:border-[#E3261E] hover:text-[#E3261E] transition-all">
              {brand}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductFilters;