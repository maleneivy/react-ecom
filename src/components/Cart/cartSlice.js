import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

const updateLocalStorage = (products) => {
    localStorage.setItem("cart", JSON.stringify(products));
}


export const updateCartFromLocalStorage = (totalProducts) => {
    return {
        type: 'cart/updateCartFromLocalStorage',
        payload: totalProducts,
    };
};

const addToCartAction = (product) => {
    return {
        type: 'cart/addToCart',
        payload: product,
    };
};

const updateTotalProducts = (totalProducts) => {
    return {
        type: 'cart/updateTotalProducts',
        payload: totalProducts,
    };
};

export const addToCartAndUpdate = (product) => (dispatch, getState) => {
    dispatch(addToCartAction(product));
    const updatedCart = getState().cart.products;
    updateLocalStorage(updatedCart);
    updateTotalProducts(updatedCart); 
};

const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        updateCartFromLocalStorage(state) {
            const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
            if(cartFromLocalStorage) {
                state.products = cartFromLocalStorage;
            }
        },
        addToCart(state, action) {
            const newProduct = action.payload;
            const existingProductIndex = state.products.findIndex(product => product.id === newProduct.id);
        
            if (existingProductIndex !== -1) {
                state.products[existingProductIndex].quantity += 1;
            } else {
                state.products.push({ ...newProduct, quantity: 1 });
            }
            updateLocalStorage(state.products);
            const totalProducts = state.products.reduce((total, product) => total + product.quantity, 0);
            updateCartFromLocalStorage(totalProducts);
        },
        updateQuantity(state, action) {
            const {productId, quantity} = action.payload;
            const productToUpdate = state.products.find(product => product.id === productId);

            if(productToUpdate) {
                productToUpdate.quantity = quantity;
                updateLocalStorage(state.products);
            }
        },
        removeFromCart(state, action) {
            const productId = action.payload;
            state.products = state.products.filter(product => product.id !== productId);
            updateLocalStorage(state.products);
            const totalProducts = state.products.reduce((total, product) => total + product.quantity, 0);
            updateCartFromLocalStorage(totalProducts);
        },
        clearCart(state) {
            state.products = [];
            updateLocalStorage(state.products);
            updateCartFromLocalStorage(0);
        }
    },
});

export const {addToCart, updateQuantity,removeFromCart, clearCart} = cartSlice.actions; 

export default cartSlice.reducer; 