import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 2 * 60 * 60 * 1000; // 밀리초 단위로 표현된 2시간

export const tokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        authenticated: false,
        accessToken: null,
        expireTime: null
    },
    reducers: {
        SET_TOKEN: (state, action) => {
            state.authenticated = true;
            state.accessToken = action.payload;
            state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
        },
        DELETE_TOKEN: (state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null
        },
    }
})

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;