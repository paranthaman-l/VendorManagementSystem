/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vendor: null,
};
export const VendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        setVendor: (state, action) => {
            state.vendor = action.payload
        },
        logout: (state, action) => {
            state.vendor = null
        }
    }
});

export const { setVendor, logout } = VendorSlice.actions;
export const getVendor = (state)=>state.vendorInfo.vendor;
export default VendorSlice.reducer;