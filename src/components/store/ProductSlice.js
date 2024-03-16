import { createSlice } from "@reduxjs/toolkit";

let productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
    },

    reducers: {
        initialData: (state, action) => {
            state.data = action.payload

        }

    }

});
export const { initialData } = productSlice.actions;
export default productSlice.reducer