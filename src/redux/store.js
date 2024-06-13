import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../redux/slices/authSlice';
import userReducer from '../redux/slices/userSlice';
import cartReducer from '../redux/slices/cartSlice';
import productReducer from '../redux/slices/productSlice';
import dashboardReducer from '../redux/slices/dashboardSlice';
import orderReducer from '../redux/slices/orderSlice';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'order'], // Only persist the 'cart' reducer
};


const rootReducer = {
  auth: authReducer,
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  dashboard: dashboardReducer,
  order: orderReducer,
};

const combinedReducer = combineReducers(rootReducer);
const persistedReducer = persistReducer(persistConfig, combinedReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

});
export const persistor = persistStore(store);





//base url
export const serverUrl = 'https://exclusive-exes.onrender.com/api/v1';