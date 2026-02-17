// src/components/home/ProductCard.tsx

import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white p-1 rounded-xl border border-gray-100 group transition-all hover:shadow-xl">
      <div className="relative h-72 w-full mb-4 overflow-hidden">
        {product.isHot && (
          <span className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 z-10">HOT</span>
        )}
        <Image src={product.imageUrl} alt={product.name} fill className="object-contain transition-transform duration-300 group-hover:scale-120" />
      </div>
      <div className="flex px-5 text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} fill={i < product.rating ? "currentColor" : "none"} />
        ))}
        <span className="text-gray-400 text-[10px] ml-2">({product.reviews})</span>
      </div>
      <h3 className="font-bold px-5 text-gray-900 mb-1 uppercase tracking-tight line-clamp-1">{product.name}</h3>
      <p className="text-gray-400 text-xs mb-4 px-4">{product.description}</p>
      <div className="flex px-5 justify-between items-center pt-4 border-t border-gray-50">
        <span className="text-2xl font-black text-[#E3261E]">${product.price.toLocaleString()}</span>
        <button className="bg-[#1A2530] text-white p-3 rounded-lg hover:bg-[#f4312a] transition-all mb-4">
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};