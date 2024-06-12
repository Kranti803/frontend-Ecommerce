import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getSingleProductRequest: (state) => {
            state.loading = true;
        },
        getSingleProductSuccess: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        },
        getSingleProductReject: (state, action) => {
            state.error = action.payload;
        },
        submitReviewReqest: (state) => {
            state.loading = true;
        },
        submitReviewSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        submitReviewReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteReviewReqest: (state) => {
            state.loading = true;
        },
        deleteReviewSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteReviewReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
     
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        }
    }
})

export const { getSingleProductRequest, getSingleProductSuccess, getSingleProductReject,
    submitReviewReqest, submitReviewSuccess, submitReviewReject, clearError, clearMessage,
    deleteReviewReject, deleteReviewReqest, deleteReviewSuccess } = productSlice.actions;
export default productSlice.reducer;