import { Product } from '../models/product';

export const searchProducts = (products: Product[], query: string): Product[] => {
  return products.filter((product) => {
    const title: string = product.title.toLowerCase();
    const brand: string = product.brand.toLowerCase();
    const description: string = product.description.toLowerCase();
    const category: string = product.category.toLowerCase();
    const isExist = (prop: string): boolean => prop.indexOf(query) > -1;
    return isExist(category) || isExist(brand) || isExist(description) || isExist(title);
  });
};
