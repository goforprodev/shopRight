// src/redux/productsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface Product {
  id: number;
  title: string;
  price: string; 
  category: string;
  description: string;
  image: string;
}

interface ProductsState {
  filteredProducts: Product[];
}

const initialState: ProductsState = {
  filteredProducts: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setFilteredProducts } = productsSlice.actions;

export const selectFilteredProducts = (state: RootState) => state.products.filteredProducts;

export default productsSlice.reducer;
