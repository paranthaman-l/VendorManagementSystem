/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
    vendor: {},
    services:[],
};

export const VendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        setVendor: (state, action) => {
            const oldData = state.vendor
            var newData = action.payload;
            newData = {...newData,...oldData}
            state.vendor = newData;
        },
        logout: (state, action) => {
            state.vendor = null
        },
        addService(state, action) {
            state.services.push(action.payload);
        },
        removeService(state, action) {
            state.services.filter((x,i)=>i!==action.payload);
        }
    }
});

export const { setVendor, logout } = VendorSlice.actions;
export const getVendor = (state)=>state.vendorInfo.vendor;
export const getServices = (state)=>state.vendorInfo.services;
export default VendorSlice.reducer;