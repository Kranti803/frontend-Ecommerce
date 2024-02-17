import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        placeOrderRequest: (state) => {
            state.loading = true;
        },
        placeOrderSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        placeOrderReject: (state, action) => {
            state.error = action.payload;

        },
        clearError: (state) => {
            state.error = null;

        },
        clearMessage: (state) => {
            state.message = null;

        }
    }
});

export const { placeOrderRequest, placeOrderSuccess, placeOrderReject, clearError, clearMessage } = orderSlice.actions;
export default createSlice.reducer;