import { configureStore, combineReducers } from '@reduxjs/toolkit';
import VendorReducer from '../slices/vendorSlice';
import AdminReducer from '../slices/adminSlice';
const reducer = combineReducers({
    vendorInfo:VendorReducer,
    adminInfo:AdminReducer
});

export const store = configureStore({
    reducer, 
});