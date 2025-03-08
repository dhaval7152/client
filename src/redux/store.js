import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import pdfReducer from "./slices/pdfSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pdf: pdfReducer,
    products: productReducer,
  },
});

export default store;
