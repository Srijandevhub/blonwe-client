import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers: {
        syncWishlistFromLocalStorage: (state) => {
            if (localStorage.getItem("blonwe_wishlist")) {
                state.data = JSON.parse(localStorage.getItem("blonwe_wishlist"));
            }
        }
    }
})

export const { syncWishlistFromLocalStorage } = wishlistSlice.actions
export default wishlistSlice.reducer