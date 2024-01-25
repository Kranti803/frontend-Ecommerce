import axios from "axios";
import { serverUrl } from "../store";
import { contactUsError, contactUsRequest, contactUsSuccess, updateProfileReject, updateProfileRequest, updateProfileSuccess } from "../slices/userSlice";

//update user profile
export const updateUserProfile = (formData) => async (dispatch) => {
    try {
        dispatch(updateProfileRequest())
        const { data } = await axios.put(`${serverUrl}/updateprofile`, formData, {
            headers: {
                'Content-type': 'application/json'
            },
            withCredentials: true,
        })
        dispatch(updateProfileSuccess(data))
    } catch (error) {
        dispatch(updateProfileReject(error?.response?.data?.message))
    }
}

//contact us
export const contactUs = (formData) => async (dispatch) => {
    try {
        dispatch(contactUsRequest())
        const { data } = await axios.post(`${serverUrl}/contact`, formData, {
            headers: {
                'Content-type': 'application/json'
            },
            withCredentials: true
        })
        dispatch(contactUsSuccess(data));
    } catch (error) {
        dispatch(contactUsError(error?.response?.data?.message))
    }
}