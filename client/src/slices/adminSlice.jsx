/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: null,
    vendors: [],
    organizations: [],
};
export const AdminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin: (state, action) => {
            state.admin = action.payload
        },
        logout: (state) => {
            state.admin = null
        },
        addOrganization: (state, action) => {
            state.organizations.push(action.payload);
        },
        addVendor: (state, action) => {
            state.vendors.push(action.payload);
        },
        removeOrganization: (state, action) => {
            state.organizations = state.organizations.filter((org,i) => i !== action.payload);
        },
        removeVendor: (state, action) => {
            state.vendors = state.vendors.filter((vendor,i) => i !== action.payload);
        }
    }
});

export const { setAdmin, logout, addOrganization, addVendor, removeOrganization, removeVendor } = AdminSlice.actions;
export const getAdmin = (state) => state.adminInfo.admin;
export const getVendors = (state) => state.adminInfo.vendors;
export const getOrganizations = (state) => state.adminInfo.organizations;
export default AdminSlice.reducer;