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
            const existingProduct = state.products.find(product => product.id === newProduct.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({...newProduct, quantity: 1});
            }
        },
    },
});

export const {addToCart} = cartSlice.actions; 

export default cartSlice.reducer; 