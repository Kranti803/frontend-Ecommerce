import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlice';
import userReducer from '../redux/slices/userSlice';
import cartReducer from '../redux/slices/cartSlice';
import productReducer from '../redux/slices/productSlice';
import dashboardReducer from '../redux/slices/dashboardSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    dashboard: dashboardReducer


  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})
export const serverUrl = 'http://localhost:8000/api/v1';