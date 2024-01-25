import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: null,
    message: null,
    error: null,
    isAuthenticated:false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUserRequest: (state) => {
            state.loading = true;
        },
        registerUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        registerUserReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        verifyEmailRequest: (state) => {
            state.loading = true

        },
        verifyEmailSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.newUser;
            state.isAuthenticated = true;

        },
        verifyEmailError: (state, action) => {
            state.loading = false;
            state.error = action.payload;

        },
        loginUserRequest: (state) => {
            state.loading = true;
        },
        loginUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.user = action.payload.newUser;
            state.isAuthenticated = true;

        },
        loginUserReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logoutUserRequest: (state) => {
            state.loading = true;
        },
        logoutUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.user = null;
            state.isAuthenticated = false;

        },
        logoutUserReject: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },
        forgotPasswordRequest: (state) => {
            state.loading = true;
        },
        forgotPasswordSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        forgotPasswordReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        resetPasswordRequest: (state) => {
            state.loading = true;
        },
        resetPassswordSucess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;

        },
        resetPasswordReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getProfileRequest: (state) => {
            state.loading = true;
        },
        getProfileSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.userProfile;
            state.isAuthenticated = true;

        },
        getProfileReject: (state) => {
            state.loading = false;

        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        }

    }

});

export const { registerUserRequest, registerUserSuccess, registerUserReject, loginUserRequest,
    loginUserSuccess, loginUserReject, getProfileReject, getProfileRequest, getProfileSuccess,
    verifyEmailError, verifyEmailRequest, verifyEmailSuccess, logoutUserReject, logoutUserSuccess,
    logoutUserRequest, forgotPasswordReject, forgotPasswordRequest, forgotPasswordSuccess,
    resetPassswordSucess, resetPasswordReject, resetPasswordRequest, clearError,
    clearMessage } = authSlice.actions;

export default authSlice.reducer;