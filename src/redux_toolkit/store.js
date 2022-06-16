import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import cartItemReducer from './slices/cartItemSlice';

const store = configureStore({
    reducer: {
        loginStatus: authReducer,
        cartItems: cartItemReducer
    }
})

export default store;