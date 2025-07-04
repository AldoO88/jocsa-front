// src/components/products/ProductCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { CartIcon } from '@/components/ui/Icon'; // Reutilizamos el icono del carrito

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden group transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link href={`/producto/${product.id}`} className="block">
        <div className="relative w-full aspect-square">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-300"
          />
          {/* --- Badges/Etiquetas --- */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">NUEVO</span>
            )}
            {product.isBestseller && (
              <span className="bg-amber-400 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">MÁS VENDIDO</span>
            )}
          </div>
          {product.originalPrice && (
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              OFERTA
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <Link href={`/producto/${product.id}`}>
          <h3 className="text-md font-semibold text-gray-800 truncate group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
          )}
        </div>
        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
          <CartIcon className="h-5 w-5" />
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;