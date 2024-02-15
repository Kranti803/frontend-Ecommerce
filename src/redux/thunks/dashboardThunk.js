import { getAllProductsReject, getAllProductsSuccess, getAllUsersReject, getAllUsersRequest, getAllUsersSuccess, getDashboardStatReject, getDashboardStatRequest, getDashboardStatSuccess } from "../slices/dashboardSlice";
import { serverUrl } from "../store";
import axios from 'axios';

//getDashboardStats
export const getDashboardStats = () => async (dispatch) => {
    try {
        dispatch(getDashboardStatRequest());
        const { data } = await axios.get(`${serverUrl}/dashboard_stats`, {
            withCredentials: true
        })
        dispatch(getDashboardStatSuccess(data));
    } catch (error) {
        dispatch(getDashboardStatReject(error?.response?.data?.message));
    }
}

//getAllUser
export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch(getAllUsersRequest());
        const { data } = await axios.get(`${serverUrl}/dashboard_stats/allusers`, {
            withCredentials: true
        })
        dispatch(getAllUsersSuccess(data?.users));
    } catch (error) {
        dispatch(getAllUsersReject(error?.response?.data?.message));
    }
};

//getAllProducts
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch(getAllProductsSuccess());
        const { data } = await axios.get(`${serverUrl}/dashboard_stats/allproducts`, {
            withCredentials: true
        })
        dispatch(getAllProductsSuccess(data?.products));
    } catch (error) {
        dispatch(getAllProductsReject(error?.response?.data?.message));
    }
}