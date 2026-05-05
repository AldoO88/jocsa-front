// src/app/catalog/[slug]/page.tsx
import ProductPageContainer from '@/modules/catalog/components/product-detail/ProductPageContainer';
import { Metadata } from 'next';


interface Props {
  params: { slug: string };
}

/**
 * METADATOS DINÁMICOS
 * Esto permite que el nombre del producto aparezca en la pestaña del navegador
 * y en las tarjetas de redes sociales/WhatsApp.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  
  // Aquí normalmente harías un fetch a tu API:
  // const product = await getProductBySlug(slug);
  
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} | JOCSA Auto Partes`,
    description: `Compra ${title} de alto rendimiento. Envíos express a todo México y garantía directa de fábrica.`,
    openGraph: {
      images: ['/og-image-jocsa.jpg'], // Imagen por defecto para compartir
    },
  };
}

export default function Page({ params }: Props) {
  // En Next.js 15 (o versiones recientes de la App Router), 
  // es buena práctica desestructurar params.
  const { slug } = params;

  return (
    <>
      {/* 
          Pasamos el slug al contenedor por si necesitas hacer 
          un fetch de datos específicos del producto dentro de los módulos.
      */}
      <ProductPageContainer />
    </>
  );
}