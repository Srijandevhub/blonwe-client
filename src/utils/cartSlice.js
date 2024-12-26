import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers: {
        syncCartFromLocalStorage: (state) => {
            if (localStorage.getItem("blonwe_cart")) {
                state.data = JSON.parse(localStorage.getItem("blonwe_cart"));
            }
        }
    }
})

export const { syncCartFromLocalStorage } = cartSlice.actions
export default cartSlice.reducer