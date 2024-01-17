import axios from "axios";
import { serverUrl } from "../store";
import { updateProfileReject, updateProfileRequest, updateProfileSuccess } from "../slices/userSlice";

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