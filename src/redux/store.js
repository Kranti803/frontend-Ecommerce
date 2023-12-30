import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';


export const store = configureStore({
    
    reducer: {
        user: userReducer,
    }
    
});

export const serverUrl = 'http://localhost:8000/api/v1';
