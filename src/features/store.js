import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authenticate/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})