//src/app/shop/_components/ProductList.tsx

import ProductCard from '@/modules/catalog/components/shared/ProductCard';
import { Product } from '@/types';

const ProductList = ({products} : {products : Product[]}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ProductList;