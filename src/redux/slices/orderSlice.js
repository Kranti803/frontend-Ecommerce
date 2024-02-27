import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    tempData: {},
    message: null,
    error: null
};

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
            state.tempData = null;
        },
        placeOrderReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        storeTempData: (state, action) => {
            state.tempData = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;

        }
    }
});

export const { placeOrderRequest, placeOrderSuccess, placeOrderReject, storeTempData, clearError, clearMessage } = orderSlice.actions;
export default orderSlice.reducer;