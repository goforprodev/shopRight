// src/pages/SearchPage.tsx
import React from 'react';
import { IonCol, IonContent, IonGrid, IonList, IonRow } from '@ionic/react';
import ProductCard from '../components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../redux/slices/productsSlice';

const SearchPage: React.FC = () => {
    const filteredProducts = useSelector(selectFilteredProducts)
  return (
    <IonContent>
      <IonList>
        <IonGrid>
          <IonRow>
            {filteredProducts.map((product) => (
            <IonCol size='6' sizeMd='6' sizeLg='2' key={product.id}>
              <ProductCard key={product.id} product={product} />
            </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonList>
    </IonContent>
  );
};

export default SearchPage;
