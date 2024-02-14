import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProductsRequest: () => {
        },
        getAllProductsSuccess: () => {

        },
        getAllProductsFailure: () => {

        },
        getSingleProductRequest: (state) => {
            state.loading = true;
        },
        getSingleProductSuccess: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        },
        getSingleProductReject: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { getSingleProductRequest, getSingleProductSuccess, getSingleProductReject } = productSlice.actions;
export default productSlice.reducer;