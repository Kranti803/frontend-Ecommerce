import { addToCartReject, addToCartRequest, addToCartSuccess } from "../slices/cartSlice";
import { serverUrl } from "../store";
import axios from 'axios';

export const addToCart = (id) => async (dispatch) => {

    try {
        dispatch(addToCartRequest());

        const { data } = await axios.get(`${serverUrl}/product/${id}`, {
            withCredentials: true

        });

        if (data?.product.stock === 0) {
            dispatch(addToCartReject('Product is Out Of Stock'))
        } else {
            dispatch(addToCartSuccess(data?.product));
        }

    } catch (error) {
        dispatch(addToCartReject(error?.response?.data?.message));
    }

}