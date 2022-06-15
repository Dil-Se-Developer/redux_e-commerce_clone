import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        loginStatus: authReducer
    }
})

export default store;