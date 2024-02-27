import { placeOrderReject, placeOrderRequest, placeOrderSuccess } from "../slices/orderSlice";
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