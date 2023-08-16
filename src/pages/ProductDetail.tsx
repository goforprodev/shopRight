// src/pages/ProductDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonSpinner } from '@ionic/react';
import ApiService from '../services/apiService';
import "./ProudctPage.css"

interface Product {
  id: number;
  title: string;
  price: string; 
  category: string;
  description: string;
  image: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await ApiService.getProductById(Number(productId));
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {product ? (
          <div className="product-details">
            <IonImg src={product.image} alt={product.title} className="product-image" />
            <IonText>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Category: {product.category}</p>
            </IonText>
          </div>
        ) : (
          <IonSpinner />
        )}
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
