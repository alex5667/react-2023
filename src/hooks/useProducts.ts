import { useMemo } from 'react';
import { Product } from 'models/product';
// import { searchProducts } from 'utils/searchProducts';
type ProductSortKey = keyof Product;

export const useSortedProducts = (
  products: Product[],
  sort: ProductSortKey | '',
  query: string
): Product[] => {
  const sortedProducts = useMemo(() => {
    if (sort) {
      return [...products].sort((a, b) => +b[sort] - +a[sort]);
    } else if (query) {
      return products;
    }
    return products;
  }, [sort, products, query]);
  return sortedProducts;
};

// export const useSortedSearchedProducts = (
//   products: Product[],
//   sort: ProductSortKey | '',
//   query: string
// ): Product[] => {
//   const sortedProducts = useSortedProducts(products, sort);
//   const sortedSearchedProducts = useMemo(() => {
//     return searchProducts(sortedProducts, query);
//   }, [query, sortedProducts]);
//   return sortedSearchedProducts;
// };
