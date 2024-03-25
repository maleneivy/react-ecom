import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalCost: 0,
};

export const checkedOutSlice = createSlice({
    name: "checkedOut",
    initialState,
    reducers: {
        checkout: (state, action) => {
            state.products = action.payload.products;
            state.totalCost = action.payload.totalCost;
        },
        clearCheckedOutCart: (state) => {
            state.products = [];
            state.totalCost = 0;
        },
    },
});

export const {checkout, clearCheckedOutCart} = checkedOutSlice.actions; 

export default checkedOutSlice.reducer;
