/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: null,
    vendors: [],
    organizations: [],
    newVendors: [],
    newOrganizations: [],
    contracts: [],
    contacts:[]
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
        addNewOrganization: (state, action) => {
            state.newOrganizations.push(action.payload);
        },
        addNewVendor: (state, action) => {
            state.newVendors.push(action.payload);
        },
        removeOrganization: (state, action) => {
            state.organizations = state.organizations.filter((org, i) => i !== action.payload);
        },
        removeVendor: (state, action) => {
            state.vendors = state.vendors.filter((vendor, i) => i !== action.payload);
        },
        removeNewVendor: (state, action) => {
            state.newVendors = state.newVendors.filter((vendor, i) => i !== action.payload);
        },
        addContract: (state, action) => {
            state.contracts.push(action.payload);
        }
    }
});

export const { setAdmin, logout, addOrganization, addVendor, addNewOrganization, addNewVendor, removeNewVendor,removeOrganization, removeVendor } = AdminSlice.actions;
export const getAdmin = (state) => state.adminInfo.admin;
export const getContracts = (state) => state.adminInfo.contracts;
export const getVendors = (state) => state.adminInfo.vendors;
export const getOrganizations = (state) => state.adminInfo.organizations;
export const getPendingVendors = (state) => state.adminInfo.newVendors;
export const getPendingOrganizations = (state) => state.adminInfo.newOrganizations;
export default AdminSlice.reducer;