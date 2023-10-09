import { configureStore, combineReducers } from '@reduxjs/toolkit';
import VendorReducer from '../slices/vendorSlice';
import AdminReducer from '../slices/adminSlice';
import OrganizationReducer from '../slices/organizationSlice';
const reducer = combineReducers({
    vendorInfo:VendorReducer,
    adminInfo:AdminReducer,
    organizationInfo:OrganizationReducer,
});

export const store = configureStore({
    reducer, 
});