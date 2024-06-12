import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    tempData: {},
    message: null,
    error: null,
    ordersAdmin: [],
    orderDetail: {},
    ordersUser: [],
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
        getAllOrdersRequest: (state) => {
            state.loading = false;

        },
        getAllOrdersSuccess: (state, action) => {
            state.loading = true;
            state.ordersAdmin = action.payload;
        },
        getAllOrdersReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getOrderDetailRequest: (state) => {
            state.loading = true;
        },
        getOrderDetailSuccess: (state, action) => {
            state.loading = false;
            state.orderDetail = action.payload;
        },
        getOrderDetailReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getUserOrderRequest: (state) => {
            state.loading = true;
        },
        getUserOrderSuccess: (state, action) => {
            state.loading = false;
            state.ordersUser = action.payload;
        },
        getUserOrderReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        storeTempData: (state, action) => {
            state.tempData = action.payload;
        },
        changeOrderStatusRequest: (state) => {
            state.loading = true;
        },
        changeOrderStatusSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        changeOrderStatusReject: (state) => {
            state.loading = false;
        },
        deleteOrderRequest: (state) => {
            state.loading = true;
        },
        deleteOrderSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        deleteOrderReject: (state) => {
            state.loading = false;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;

        }
    }
});

export const { placeOrderRequest, placeOrderSuccess, placeOrderReject, storeTempData,
    getAllOrdersReject, getAllOrdersRequest, getAllOrdersSuccess,
    getOrderDetailReject, getOrderDetailRequest, getOrderDetailSuccess,
    getUserOrderReject, getUserOrderRequest, getUserOrderSuccess,
    changeOrderStatusRequest, changeOrderStatusReject, changeOrderStatusSuccess, deleteOrderReject, deleteOrderRequest, deleteOrderSuccess,
    clearError, clearMessage } = orderSlice.actions;
export default orderSlice.reducer;