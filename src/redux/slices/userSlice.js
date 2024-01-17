import { createSlice } from '@reduxjs/toolkit';

const initialState = {}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateProfileRequest: (state) => {
            state.loading = true
        },
        updateProfileSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.updatedUser = action.payload.updatedUser;
        },
        updateProfileReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        }
    }
})
export const { updateProfileRequest, updateProfileSuccess, updateProfileReject, clearError, clearMessage } = userSlice.actions;

export default userSlice.reducer;