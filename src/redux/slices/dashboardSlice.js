import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        getDashboardStatRequest: (state) => {
            state.loading = true;
        },
        getDashboardStatSuccess: (state, action) => {
            state.loading = false;
            state.dashboardStats = action.payload;
        },
        getDashboardStatReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAllUsersRequest: (state) => {
            state.loading = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        getAllUsersReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAllProductsRequest: (state) => {
            state.loading = true;
        },
        getAllProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        getAllProductsReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearMessage: (state) => {
            state.message = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    }
})
export const { getDashboardStatRequest, getDashboardStatSuccess, getDashboardStatReject,
    getAllUsersReject, getAllUsersRequest, getAllUsersSuccess,
    getAllProductsReject, getAllProductsRequest, getAllProductsSuccess, clearError, clearMessage } = dashboardSlice.actions;
export default dashboardSlice.reducer;