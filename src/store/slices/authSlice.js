import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logoutLoading: false,
    loading: false,
    loggedIn: false,
    userData: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.userData = action.payload;
            state.loggedIn = true;
        },
        loginFail: (state) => {
            state.loading = false;
        },
    },
});

export const { loginStart, loginSuccess, loginFail } = authSlice.actions;

export default authSlice.reducer;