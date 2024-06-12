import { changeOrderStatusReject, changeOrderStatusRequest, changeOrderStatusSuccess, deleteOrderReject, deleteOrderRequest, deleteOrderSuccess, getAllOrdersReject, getAllOrdersRequest, getAllOrdersSuccess, getOrderDetailReject, getOrderDetailRequest, getOrderDetailSuccess, getUserOrderReject, getUserOrderRequest, getUserOrderSuccess, placeOrderReject, placeOrderRequest, placeOrderSuccess } from "../slices/orderSlice";
import { serverUrl } from "../store";
import axios from "axios";


//place a order
export const placeOrder = (formdata) => async (dispatch) => {
    try {

        dispatch(placeOrderRequest());
        const { data } = await axios.post(`${serverUrl}/placeorder`, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
        dispatch(placeOrderSuccess(data?.message));
    } catch (error) {
        dispatch(placeOrderReject(error?.response?.data?.message));
    }
}

//get all orders
export const getAllOrders = () => async (dispatch) => {
    try {
        dispatch(getAllOrdersRequest());
        const { data } = await axios.get(`${serverUrl}/get_all_orders`, {
            withCredentials: true
        })
        dispatch(getAllOrdersSuccess(data?.orders))
    } catch (error) {
        dispatch(getAllOrdersReject(error?.response?.data?.message))
    }
}

//get  order details
export const getOrderDetail = (id) => async (dispatch) => {
    try {
        dispatch(getOrderDetailRequest());
        const { data } = await axios.get(`${serverUrl}/orderdetails/${id}`, {
            withCredentials: true
        })
        dispatch(getOrderDetailSuccess(data?.order))
    } catch (error) {
        dispatch(getOrderDetailReject(error?.response?.data?.message))
    }
}


//get all orders of user
export const getUserOrders = (id) => async (dispatch) => {
    try {
        dispatch(getUserOrderRequest());
        const { data } = await axios.get(`${serverUrl}/orders`, {
            withCredentials: true
        })
        dispatch(getUserOrderSuccess(data?.orders))

    } catch (error) {
        dispatch(getUserOrderReject(error?.response?.data?.message))
    }
}

//change order status
export const changeOrderstatus = (id) => async (dispatch) => {
    try {
        dispatch(changeOrderStatusRequest());
        const { data } = await axios.put(`${serverUrl}/updateorder/${id}`, {}, {
            withCredentials: true
        })
        dispatch(changeOrderStatusSuccess(data?.message))

    } catch (error) {
        dispatch(changeOrderStatusReject(error?.response?.data?.message))
    }
}

//change order status
export const deleteOrder = (id) => async (dispatch) => {
    try {
        dispatch(deleteOrderRequest());
        const { data } = await axios.delete(`${serverUrl}/deleteorder/${id}`, {
            withCredentials: true
        })
        dispatch(deleteOrderSuccess(data?.message));

    } catch (error) {
        dispatch(deleteOrderReject(error?.response?.data?.message))
    }
}
