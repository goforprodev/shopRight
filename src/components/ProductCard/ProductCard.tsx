
import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonCol, IonButton } from '@ionic/react';
import "./ProductCard.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { CartItem, addToCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state:RootState) => state.cart)

    const handleAddToCart = (product:CartItem) => {
    dispatch(addToCart(product))
    }

  return (
<>

    <IonCard>
     <Link to={`/product/${product.id}`} style={{textDecoration:"none"}}>
      <IonImg src={product.image} alt={product.title} className='product-image' />
      <IonCardHeader>
        <IonCardTitle className='product-title'>{product.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Price: ${product.price}
      </IonCardContent>
    </Link>
      <IonButton expand="full" color="primary" onClick={() => handleAddToCart({...product,quantity:0})} className='product-button'>Add to Cart</IonButton>
    </IonCard>
</>
  );
};

export default ProductCard
