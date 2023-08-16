import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title:string;
    price:string;
    image:string;
    quantity:number;
}

const initialState:CartItem[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<CartItem>)=>{
            const {id} = action.payload;
            const existingItem = state.find(item=>item.id === id);
            if(existingItem){
                existingItem.quantity++;
            }else{
                state.push({...action.payload,quantity:1});
            }
        },
        increaseQuantity:(state,action:PayloadAction<number>)=>{
            const id = action.payload;
            const item = state.find(item=>item.id === id);
            if(item){
                item.quantity++;
            }
        },
        decreaseQuantity:(state,action:PayloadAction<number>)=>{
            const id = action.payload;
            const item = state.find(item=>item.id === id);
            if(item && item.quantity > 0){
                item.quantity--;
            }else{
                return state.filter(item=>item.id !== id);
            }
        },
        removeFromCart:(state,action:PayloadAction<number>)=>{
            const id = action.payload;
            return state.filter(item=>item.id !== id);
        },
        clearCart:()=>{
            return [];
        }
    }
})

export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;