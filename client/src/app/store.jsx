import { configureStore, combineReducers } from '@reduxjs/toolkit';
import VendorReducer from '../slices/vendorSlice';
const reducer = combineReducers({
    vendorInfo:VendorReducer
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});