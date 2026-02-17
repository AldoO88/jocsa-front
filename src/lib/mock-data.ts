// src/lib/mock-data.ts
import { Product } from "@/types";

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Kit de Balatas Cerámicas Delanteras',
    partNumber: 'BOS-BC1451',
    price: 1250.99,
    imageUrl: '/images/products/balata.png', // Coloca tus imágenes en public/images/products/
    brand: 'Bosch',
    isFeatured: true,
    isBestseller: true,
    description: "",
    rating: 0,
    reviews: 0
  },
  {
    id: '2',
    name: 'Amortiguador de Gas Trasero',
    partNumber: 'KYB-349108',
    price: 980.00,
    imageUrl: '/images/products/amortiguador.jpg',
    brand: 'KYB',
    isFeatured: true,
    isNew: true,
    description: "",
    rating: 0,
    reviews: 0
  },
  {
    id: '3',
    name: 'Bomba de Agua con Junta',
    partNumber: 'GAT-45006',
    price: 1800.50,
    imageUrl: '/images/products/bombadeagua.jpg',
    brand: 'Gates',
    isBestseller: true,
    description: "",
    rating: 4,
    reviews: 10
  },
  {
    id: '4',
    name: 'Filtro de Aceite Sintético',
    partNumber: 'FRA-XG7317',
    price: 250.00,
    imageUrl: '/images/products/filtroAceite.jpg',
    brand: 'Fram',
    isFeatured: true,
    isBestseller: true,
    description: "",
    rating: 0,
    reviews: 0
  },
  {
    id: '5',
    name: 'Kit de Afinación Completo Jetta A4',
    partNumber: 'MAN-AFIN-A4',
    price: 1100.00,
    imageUrl: '/images/products/kitAfinacionA4.jpg',
    brand: 'Mann-Filter',
    isNew: true,
    description: "",
    rating: 0,
    reviews: 0
  },
  {
    id: '6',
    name: 'Bujía de Iridio Laser',
    partNumber: 'NGK-IFR5E11',
    price: 350.00,
    imageUrl: '/images/products/bujiaIridioLaser.jpg',
    brand: 'NGK',
    isNew: true,
    description: "",
    rating: 0,
    reviews: 0
  },
  {
    id: '7',
    name: 'Radiador de Aluminio',
    partNumber: 'TYC-13095',
    price: 2300.00,
    imageUrl: '/images/products/radiador.jpg',
    brand: 'TYC',
    isFeatured: true,
    description: "",
    rating: 0,
    reviews: 0
  },
  {
    id: '8',
    name: 'Sensor de Oxígeno (Sonda Lambda)',
    partNumber: 'DEN-234-4209',
    price: 1350.00,
    imageUrl: '/images/products/sensorOxigeno.jpg',
    brand: 'Denso',
    isFeatured: true,
    description: "",
    rating: 0,
    reviews: 0
  },
];