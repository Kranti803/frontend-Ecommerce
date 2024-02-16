import {
    addProductReject, addProductRequest, addProductSuccess, changeUserRoleReject, changeUserRoleRequest, changeUserRoleSuccess, deleteUserReject,
    deleteUserRequest, deleteUserSuccess, getAllProductsReject, getAllProductsSuccess, getAllUsersReject, getAllUsersRequest, getAllUsersSuccess,
    getDashboardStatReject, getDashboardStatRequest, getDashboardStatSuccess, updateProductReject, updateProductRequest, updateProductSuccess
} from "../slices/dashboardSlice";
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

//addProduct
export const addProduct = (myFormData) => async (dispatch) => {
    try {
        dispatch(addProductRequest());
        const { data } = await axios.post(`${serverUrl}/admin/addproducts`, myFormData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        })
        dispatch(addProductSuccess(data?.message));
    } catch (error) {
        dispatch(addProductReject(error?.response?.data?.message));
    }
}

//update product
export const updateProduct = (myFormData, id) => async (dispatch) => {
    try {
        dispatch(updateProductRequest());
        const { data } = await axios.put(`${serverUrl}/admin/updateproduct/${id}`, myFormData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        })
        dispatch(updateProductSuccess(data?.message));
        console.log(data)
    } catch (error) {
        dispatch(updateProductReject(error?.response?.data?.message));
    }
}

//deleteUser
export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch(deleteUserRequest());
        const { data } = await axios.delete(`${serverUrl}/admin/deleteuser/${id}`, {
            withCredentials: true
        });
        dispatch(deleteUserSuccess(data?.message))
    } catch (error) {
        dispatch(deleteUserReject(error?.response?.data?.message))
    }
};

//deleteUser
export const changeRole = (id) => async (dispatch) => {
    try {
        dispatch(changeUserRoleRequest());
        const { data } = await axios.put(`${serverUrl}/admin/changerole/${id}`, {}, { //always make sure to pass empty object {} if there is not data to be updated as a data else it throws error
            withCredentials: true
        });
        dispatch(changeUserRoleSuccess(data?.message));
    } catch (error) {
        dispatch(changeUserRoleReject(error?.response?.data?.message));
    }
};
