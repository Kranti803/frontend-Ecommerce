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
        addProductRequest: (state) => {
            state.loading = true;
        },
        addProductSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        addProductReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateProductRequest: (state) => {
            state.loading = true;
        },
        updateProductSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateProductReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        changeUserRoleRequest: (state) => {
            state.loading = true;
        },
        changeUserRoleSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        changeUserRoleReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserRequest: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteUserReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteProductRequest: (state) => {
            state.loading = true;
        },
        deleteProductSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteProductReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateFeaturedReqest: (state) => {
            state.loading = true;
        },
        updateFeaturedSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        updateFeaturedReject: (state, action) => {
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
    getAllUsersReject, getAllUsersRequest, getAllUsersSuccess, getAllProductsReject,
    addProductReject, addProductRequest, addProductSuccess, getAllProductsRequest,
    updateProductReject, updateProductRequest, updateProductSuccess, getAllProductsSuccess,
    clearError, clearMessage, changeUserRoleReject, changeUserRoleRequest, changeUserRoleSuccess,
    deleteUserReject, deleteUserRequest, deleteUserSuccess, deleteProductReject, deleteProductRequest, updateFeaturedReject
    ,updateFeaturedReqest, updateFeaturedSuccess, deleteProductSuccess } = dashboardSlice.actions;

export default dashboardSlice.reducer;