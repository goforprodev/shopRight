import { IonHeader, IonToolbar, IonButtons, IonTitle, IonButton, IonIcon } from '@ionic/react';
import {cartOutline} from 'ionicons/icons'
import "./Navbar.css"
import { useState } from 'react';
import CartDrawer from '../CartDrawer/CartDrawer';
import { RootState } from '../../redux/store/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItemsCount = useSelector((state:RootState) => state.cart.length)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <Link to="/home" style={{textDecoration:"none",fontWeight:"bolder"}}>
          <IonTitle>ShopRight</IonTitle>
          </Link>
        </IonButtons>
        <IonButtons slot="end">
          <IonButton onClick={toggleCart}>
            <div className="cart-icon">
            <IonIcon slot="icon-only" icon={cartOutline} className='icon' />
            <span className="cart-count">
              {cartItemsCount}
              </span>
          </div>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
}

export default Navbar