// src/services/ApiService.ts
import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';
const PRODUCTS_PER_PAGE = 10; 


interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const ApiService = {
  getProducts: async (page: number) => {
    try {
      const response = await axios.get<Product[]>(
        `${API_BASE_URL}/products?_page=${page}&_limit=${PRODUCTS_PER_PAGE}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  },
  getProductById: async (productId: number) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
      return response.data;
  } catch (error: any) {
    throw new Error('Error fetching product',error);
    }
  },
};


export default ApiService;
