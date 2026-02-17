// src/types/index.tsx

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  // ... cualquier otro campo necesario para el registro
}

export interface UpdateUserParams {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  imageUrl?: string; // URL de la imagen de perfil, opcional
}

// Interfaz para la dirección fiscal, si la usas
export interface IFiscalAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
// La interfaz principal para el objeto de Usuario
export interface IUser {
  userId: string; // El ID de MongoDB
  customerNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  imageUrl?: string;
  // Añadimos el objeto de datos fiscales
  datosFiscales?: {
    razonSocial?: string;
    rfc?: string;
    regimenFiscal?: string;
    direccionFiscal?: IFiscalAddress;
  };
  // Propiedades de timestamp de Mongoose
  createdAt: string; 
  updatedAt: string;
}

export interface UpdateUserPasswordParams {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
export interface FiscalData {
  urlConstancia?: string; // URL del PDF de la constancia
  razonSocial: string;
  rfc: string;
  regimenFiscal: string;
  calle: string;
  numeroExt: string;
  colonia: string;
  ciudad: string;
  estado: string;
  zipCode: string;
}

export interface Product {
  id: string;
  name: string;
  partNumber: string;
  description: string;
  price: number;
  imageUrl: string;
  brand: string;
  rating: number;
  reviews: number;
  isHot?: boolean;
  isBestseller?: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface Category {
  name: string;
  icon: string; // Puede ser un componente de Lucide-react o Heroicons
}