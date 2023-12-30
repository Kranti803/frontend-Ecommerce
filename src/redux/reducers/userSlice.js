import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getProfileRequest: (state) => {
            state.loading = true;
        },
        getProfileSuccess: (state, action) => {

            state.loading = false;
            state.user = action.payload;
        },
        getProfileFailure: (state, action) => {

            state.loading = false;
            state.error = action.payload;
        },
        clearMessage: (state) => {
            state.message = null;
        },
        clearError: (state) => {
            state.error = null
        }
    }

});


export const { getProfileRequest, getProfileSuccess, getProfileFailure, clearError, clearMessage } = userSlice.actions;
export default userSlice.reducer;