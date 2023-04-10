import { Product } from 'models/product';

export interface ProductResponse {
  products: Product[];
  total: number;
}

export default class ProductService {
  static async getAll(limit?: number, skip?: number, query?: string, sort?: string) {
    const queries = query;

    if (queries && sort) {
      return;
    }
    if (queries) {
      return;
    }
    const params = new URLSearchParams();
    if (limit !== undefined) {
      params.append('limit', limit.toString());
    }
    if (skip !== undefined) {
      params.append('skip', skip.toString());
    }
    const response = await fetch(`https://dummyjson.com/products?${params.toString()}`);
    const data = await response.json();
    return data as ProductResponse;
  }

  static async getByQuery(query: string) {
    if (!query) {
      return;
    }
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await response.json();
    return data as ProductResponse;
  }
}
