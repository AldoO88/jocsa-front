// src/types/index.ts

export interface Product {
  id: string;
  name: string;
  partNumber: string; // Número de parte, esencial en este rubro
  price: number;
  originalPrice?: number; // Precio original para mostrar ofertas
  imageUrl: string;
  brand: string;
  // --- Banderas para las secciones ---
  isNew?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
}