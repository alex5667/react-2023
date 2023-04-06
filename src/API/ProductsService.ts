// import { products } from 'db/products';
import axios from 'axios';
import { Product } from 'models/product';
export interface ProductResponse {
  products: Product[];
  total: number;
}
export default class ProductService {
  static async getAll(limit?: number, skip?: number) {
    const response = await axios.get<ProductResponse>('https://dummyjson.com/products', {
      params: {
        limit: limit,
        skip: skip,
      },
    });
    return response.data;
  }

  static async getByQuery(query: string) {
    console.log(query);
    if (!query) {
      return;
    }
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    console.log(response);
    return response.data;
  }
}
