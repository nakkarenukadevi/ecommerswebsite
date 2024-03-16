import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./ProductSlice";

let Store = configureStore({
    reducer: {
        product: productReducer
    }


});
export default Store