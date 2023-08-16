// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { IonCol, IonContent, IonGrid, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonRow } from '@ionic/react';
import ApiService from '../services/apiService';
import ProductCard from '../components/ProductCard/ProductCard';
import SearchInput from '../components/SearchInput/SearchInput';
import { useDispatch } from 'react-redux';
import { setFilteredProducts } from '../redux/slices/productsSlice';

export interface Product {
  id: number;
  title: string;
  price: string; 
  category: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [filteredProducts, setFiltered] = useState<Product[]>([]);

const dispatch = useDispatch();

  const fetchProducts = async () => {
    const newProducts = await ApiService.getProducts(page);
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    setPage(page + 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [filteredProducts]);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(lowerQuery)
    );
    setFiltered(filtered);
  dispatch(setFilteredProducts(filtered));
    console.log(filtered)
  };



  return (
    <IonContent>
      <SearchInput onSearch={handleSearch}  />
      <IonList>
        <IonGrid>
          <IonRow >
          {products.map((product) => (
            <IonCol size='6' sizeMd='6' sizeLg='2' key={product.id}>
                <ProductCard key={product.id} product={product} />
          </IonCol>
          ))}
          </IonRow>
        </IonGrid>
      </IonList>
      <IonInfiniteScroll threshold="100px" onIonInfinite={fetchProducts}>
        <IonInfiniteScrollContent loadingText="Loading more products..."></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
};

export default Home;
