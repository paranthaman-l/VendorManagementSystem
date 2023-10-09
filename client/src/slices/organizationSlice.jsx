/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
    organization: {},
};

export const OrganizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
        setOrganization: (state, action) => {
            const oldData = state.organization
            var newData = action.payload;
            newData = {...newData,...oldData}
            state.organization = newData;
        },
        logout: (state) => {
            state.organization = null
        }
    }
});

export const { setOrganization, logout } = OrganizationSlice.actions;
export const getOrganization = (state)=>state.organizationInfo.organization;
export default OrganizationSlice.reducer;