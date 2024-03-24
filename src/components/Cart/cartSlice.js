import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        addToCart(state, action) {
            const newProduct = action.payload;
            state.products.push(newProduct)
        },
    },
});

export const {addToCart} = cartSlice.actions; 

export default cartSlice.reducer; 