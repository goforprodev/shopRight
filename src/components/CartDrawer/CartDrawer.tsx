import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonModal, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart, CartItem } from '../../redux/slices/cartSlice';
import { add, close, remove } from 'ionicons/icons';
import "./CartDrawer.css"
import GuestCheckout from '../GuestCheckout/GuestCheckout';


interface CartDrawerProps {
    isOpen:boolean;
    onClose: () => void;
}

const CartDrawer:React.FC<CartDrawerProps> = ({isOpen,onClose}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state:RootState) => state.cart);

    const handleIncrease = (product:CartItem) => {
      dispatch(increaseQuantity(product.id));
    };

    const handleDecrease = (product:CartItem) => {
        dispatch(decreaseQuantity(product.id));
    };

    const handleRemove = (productId: number) => {
        dispatch(removeFromCart(productId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalAmount = cartItems.reduce((total,item) => total + parseFloat(item.price) * item.quantity,0)

    return (
        <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
          <IonButton slot="end" onClick={onClose}>
            <IonIcon icon={close} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
        <IonContent className='ion-padding'>
              {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <IonImg src={item.image} alt={item.title} className='cart-img' />
            <div className="item-details">
              <h2>{item.title}</h2>
              <IonText>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </IonText>
              <IonButton color="danger" size="small" onClick={() => handleRemove(item.id)}>
                <IonIcon icon={remove} />
              </IonButton>
              <IonButton size="small" onClick={() => handleIncrease(item)}>
                <IonIcon icon={add} />
              </IonButton>
              <IonButton size="small" onClick={() => handleDecrease(item)}>
                <IonIcon icon={remove} />
              </IonButton>
            </div>
          </div>
        ))} 
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        <GuestCheckout />
      </IonContent>
    </IonModal>
  );
};
 

export default CartDrawer