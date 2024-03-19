import { createSlice } from "@reduxjs/toolkit";

let productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        Cart: []
    },

    reducers: {
        initialData: (state, action) => {
            state.data = action.payload

        },
        addtocart: (state, action) => {
            state.Cart.push(action.payload)
        }

    }

});
export const { initialData, addtocart } = productSlice.actions;
export default productSlice.reducer