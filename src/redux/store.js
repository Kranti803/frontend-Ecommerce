import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlice';
import userReducer from '../redux/slices/userSlice';



export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,

    },

})
export const serverUrl = 'http://localhost:8000/api/v1';