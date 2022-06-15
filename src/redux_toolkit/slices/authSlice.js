import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
    isLoggedIn: false,
    isLoggedOut: true
};

const authSlice = createSlice({
    name: "loginStatus",
    initialState: defaultCartState,
    reducers: {
        setLoggedInStatus(state, action) {
            return { ...state, isLoggedIn: action.payload }
        },
        
        setLoggedOutStatus(state, action) {
            return { ...state, isLoggedOut: action.payload }
        }
    }
})

export const { setLoggedInStatus, setLoggedOutStatus } = authSlice.actions;
export default authSlice.reducer;