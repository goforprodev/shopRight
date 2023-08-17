// src/components/GuestCheckout/GuestCheckout.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { clearCart } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store/store';

const GuestCheckout: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();

  const cartItems = useSelector((state:RootState) => state.cart);

  const handleCheckout = () => {
        alert('Please add items to cart');
        if( name === '' || email === '' || address === ''){
            alert('Please fill all the fields');
        }
        return;
    }
    dispatch(clearCart());
    alert('Order placed successfully! Thank you for your purchase.');
  };

  return (
    <div style={{padding:"0 1rem"}}>
        <h3 style={{textAlign:"center",padding:"1rem 0"}}>Guest Checkout</h3>
      <IonItem className='ion-margin'>
        <IonLabel position="floating">Name</IonLabel>
        <IonInput value={name} aria-label='Name' onIonChange={(e) => setName(e.detail.value!)} />
      </IonItem>
      <IonItem className='ion-margin'>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput value={email} aria-label='Email' onIonChange={(e) => setEmail(e.detail.value!)} />
      </IonItem>
      <IonItem className='ion-margin'>
        <IonLabel position="floating">Address</IonLabel>
        <IonInput value={address} aria-label='Address'onIonChange={(e) => setAddress(e.detail.value!)} />
      </IonItem>
      <IonButton expand="full" onClick={handleCheckout} className='ion-margin'>
        Place Order
      </IonButton>
    </div>
  );
};

export default GuestCheckout;
