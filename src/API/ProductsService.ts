import axios from 'axios';
export default class ProductService {
  static async getAll(limit?: number, skip?: number) {
    const response = await axios.get('https://dummyjson.com/products', {
      params: {
        limit: limit,
        skip: skip,
      },
    });
    return response;
  }

  static async getByQuery(query: string) {
    if (!query) {
      return;
    }
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    return response;
  }
}
