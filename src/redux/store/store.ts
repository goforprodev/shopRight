import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice"
import productsSlice from "../slices/productsSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products:productsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store