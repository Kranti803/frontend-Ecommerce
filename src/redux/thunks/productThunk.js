import { getSingleProductReject, getSingleProductRequest, getSingleProductSuccess } from "../slices/productSlice";
import { serverUrl } from "../store";
import axios from 'axios';

export const getProductDetail = (id) => async (dispatch) => {

    try {
        dispatch(getSingleProductRequest());

        const { data } = await axios.get(`${serverUrl}/product/${id}`, {
            withCredentials: true

        });

        dispatch(getSingleProductSuccess(data?.product));

    } catch (error) {
        dispatch(getSingleProductReject(error?.response?.data?.message));
    }

}