import { createSlice } from "@reduxjs/toolkit";

let productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        Cart: [],

    },

    reducers: {
        initialData: (state, action) => {
            state.data = action.payload

        },
        addtocart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.Cart.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.Qty++;
            } else {
                state.Cart.push({ ...newItem, Qty: 1 });
            }
        },

        removeItem(state, action) {
            const itemId = action.payload;
            state.Cart = state.Cart.filter(item => item.id !== itemId.id);
        },

        incrementItem(state, action) {
            const itemId = action.payload;
            const item = state.Cart.find(item => item.id === itemId.id);
            if (item) {
                item.Qty++;

            } else {
                state.Cart.push({ ...itemId, Qty: 1 });
            }
        },

        decrementItem(state, action) {
            const itemId = action.payload;
            const item = state.Cart.find(item => item.id === itemId.id);
            if (item && item.Qty > 1) {
                item.Qty--

            } else {
                state.Cart.push({ ...itemId, Qty: 1 });
            }
        }

    }

});
export const { initialData, addtocart, incrementItem, decrementItem
    , removeItem } = productSlice.actions;
export default productSlice.reducer