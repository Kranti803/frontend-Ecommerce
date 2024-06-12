import { deleteReviewReject, deleteReviewReqest, deleteReviewSuccess, getSingleProductReject, getSingleProductRequest, getSingleProductSuccess, submitReviewReject, submitReviewReqest, submitReviewSuccess } from "../slices/productSlice";
import { serverUrl } from "../store";
import axios from 'axios';

//get a single product detail
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

//add rating and review
export const addReviewAndRating = (productId, review, rating) => async (dispatch) => {
    try {
        dispatch(submitReviewReqest());
        const { data } = await axios.post(`${serverUrl}/product_details/addreview_and_rating/${productId}`, { review, rating }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });
        dispatch(submitReviewSuccess(data));
    } catch (error) {
        dispatch(submitReviewReject(error?.response?.data?.message))
    }

}

//delete rating and review
export const deleteReviewAndRating = (productId) => async (dispatch) => {
    try {
        dispatch(deleteReviewReqest());
        const { data } = await axios.delete(`${serverUrl}/product_details/deletereview_and_rating/${productId}`, {
            withCredentials: true
        });
        dispatch(deleteReviewSuccess(data));
    } catch (error) {
        dispatch(deleteReviewReject(error?.response?.data?.message))
    }

}
