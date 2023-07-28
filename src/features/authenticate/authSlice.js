import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined,
    accessToken: undefined
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUsername: (state, action) =>{
            state.user = action.payload;
        },
        setAccessToken:  (state, action) =>{
            state.accessToken = action.payload;
        }
    }
});

export default authSlice.reducer;
export const {setUsername, setAccessToken} = authSlice.actions;

export const authState = (state) => state.auth;