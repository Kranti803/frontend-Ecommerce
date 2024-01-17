import {
    registerUserRequest, registerUserReject, loginUserRequest, loginUserSuccess, loginUserReject, registerUserSuccess,
    getProfileRequest, getProfileSuccess, verifyEmailRequest, verifyEmailError, verifyEmailSuccess, getProfileReject, logoutUserRequest, logoutUserSuccess, forgotPasswordReject, forgotPasswordSuccess, resetPasswordReject, resetPassswordSucess, resetPasswordRequest
} from "../slices/authSlice";
import { serverUrl } from "../store";
import axios from 'axios';

//register user
export const registerUser = (formData) => async (dispatch) => {

    try {
        dispatch(registerUserRequest());
        const { data } = await axios.post(`${serverUrl}/register`, formData, {
            headers: {
                'Content-type': 'application/json',
            },
            withCredentials: true

        });
        dispatch(registerUserSuccess(data));

    } catch (error) {
        dispatch(registerUserReject(error?.response?.data?.message));
    }

}

//verify email
export const verifyEmail = (id, token) => async (dispatch) => {
    try {
        dispatch(verifyEmailRequest());
        const { data } = await axios.get(`${serverUrl}/${id}/emailverify/${token}`, {
            withCredentials: true
        });
        dispatch(verifyEmailSuccess(data));

    } catch (error) {
        dispatch(verifyEmailError(error?.response?.data?.message))
    }
}

//login user
export const loginUser = (formData) => async (dispatch) => {

    try {
        dispatch(loginUserRequest());
            const { data } = await axios.post(`${serverUrl}/login`, formData, {
                headers: {
                    'Content-type': 'application/json',
                },
                withCredentials: true

            });
            dispatch(loginUserSuccess(data))

    } catch (error) {

        dispatch(loginUserReject(error?.response?.data?.message))
    }

}

//get userProfile
export const getUserProfile = () => async (dispatch) => {

    try {
        dispatch(getProfileRequest());
        const { data } = await axios.get(`${serverUrl}/profile`, {
            withCredentials: true

        });

        dispatch(getProfileSuccess(data));
    } catch (error) {
        dispatch(getProfileReject());
    }

}

//logout user
export const logoutUser = () => async (dispatch) => {
    try {
        dispatch(logoutUserRequest());
        const { data } = await axios.get(`${serverUrl}/logout`, {
            withCredentials: true
        })
        dispatch(logoutUserSuccess(data))
    } catch (error) {
        dispatch(loginUserReject(error?.response?.data?.message));
    }
}

//forgot password
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch(forgotPasswordReject());
        const { data } = await axios.post(`${serverUrl}/forgotpassword`, { email }, {
            headers: {
                'Content-type': 'application/json'
            },
            withCredentials: true
        })
        dispatch(forgotPasswordSuccess(data))
    } catch (error) {
        dispatch(forgotPasswordReject(error?.response?.data?.message));
    }
}

//reset passsword
export const resetPassword = (password, resetToken) => async (dispatch) => {
    try {
        dispatch(resetPasswordRequest());
        const { data } = await axios.post(`${serverUrl}/resetpassword/${resetToken}`, { password }, {
            withCredentials: true,
            headers: {
                'Content-type': 'application/json'
            }
        })
        dispatch(resetPassswordSucess(data))
    } catch (error) {
        dispatch(resetPasswordReject(error?.response?.data?.message))
    }
}