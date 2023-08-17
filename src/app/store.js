import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authenticate/authSlice';
import productReducer from '../features/product/product.slice';
import wishlistReducer from '../features/product/wishlist.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    wishlist: wishlistReducer
  },
})