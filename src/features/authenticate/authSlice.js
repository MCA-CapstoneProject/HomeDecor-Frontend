import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "string",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUsername: (state, action) =>{
            state.user = action.payload;
        }
    }
});

export const {setUsername} = authSlice.actions;

export default authSlice.reducer;