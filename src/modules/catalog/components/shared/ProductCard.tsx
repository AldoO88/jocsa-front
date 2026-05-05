'use client'
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '@/types';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) =>{
  return (
    <Link href={`/catalog/${product.slug}`}>
    <div className="group bg-white rounded-[2.5rem] p-5 border border-slate-100 hover:border-[#E3261E]/20 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 relative flex flex-col h-full">
      
      {/* IMAGEN Y BADGES */}
      <div className="relative aspect-square bg-slate-50 rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center p-8">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* OVERLAY DE ACCIÓN RÁPIDA */}
        <div className="absolute inset-0 bg-[#0A0D10]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="p-4 bg-white rounded-2xl hover:bg-[#E3261E] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
            <Eye size={20} />
          </button>
        </div>

        {product.isNew && (
          <span className="absolute top-4 left-4 bg-[#E3261E] text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
            Nuevo
          </span>
        )}
      </div>

      {/* DETALLES */}
      <div className="space-y-2 flex-1">
        <div className="flex justify-between items-center">
          <p className="text-[10px] font-black text-[#E3261E] uppercase tracking-widest">{product.brand}</p>
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
            <Star size={10} fill={i < product.rating ? "currentColor" : "none"} />
            ))}
            <span className="text-[10px] font-black text-slate-400">4.8</span>
          </div>
        </div>
        
        <h3 className="text-sm font-black text-slate-800 uppercase tracking-tighter leading-tight line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-[9px] font-bold text-slate-400 uppercase">SKU: {product.partNumber}</p>
      </div>

      {/* PRECIO Y COMPRA */}
      <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-black text-slate-400 uppercase block leading-none">Precio</span>
          <span className="text-xl font-black text-slate-800 tracking-tighter">{product.price}</span>
        </div>
        
        <button className="bg-[#0A0D10] text-white p-4 rounded-2xl hover:bg-[#E3261E] transition-all shadow-lg shadow-slate-100 active:scale-90">
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
    </Link>
  );
}

export default ProductCard;