import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    message: null,
    error: null,
    products: [],
    subTotal: 0,
    shipping: 250,
    totalPrice: 0,

};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartRequest: (state) => {

            state.loading = true;
        },
        addToCartSuccess: (state, action) => {

            state.loading = false;
            state.message = 'Product added to cart successfully';

            let productIndex = state.products.findIndex((item) => item.product._id === action.payload._id);

            if (productIndex === -1) {
                state.products.push({ product: action.payload, quantity: 1 });
            } else {

                if (state.products[productIndex].quantity === state.products[productIndex].product.stock) {
                    state.products[productIndex].quantity = state.products[productIndex].product.stock;
                }
                else state.products[productIndex].quantity += 1;

            }

            const subTotal = state.products.reduce((sum, item) => {
                return sum + item.product.price * item.quantity;
            }, 0);

            state.subTotal = subTotal;
            state.totalPrice = subTotal + state.shipping;

        },
        addToCartReject: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        removeFromCart: (state, action) => {

            const products = state.products.filter((item) => item.product._id !== action.payload);
            state.products = products;

            const subTotal = state.products.reduce((sum, item) => {
                return sum + item.product.price * item.quantity;
            }, 0);

            state.subTotal = subTotal;
            state.totalPrice = subTotal + state.shipping;
        },
        incrementQuantity: (state, action) => {

            if (state.products[action.payload].quantity === state.products[action.payload].product.stock) {
                state.products[action.payload].quantity = state.products[action.payload].product.stock;
            }
            else state.products[action.payload].quantity += 1;

            const subTotal = state.products.reduce((sum, item) => {
                return sum + item.product.price * item.quantity;
            }, 0);

            state.subTotal = subTotal;
            state.totalPrice = subTotal + state.shipping;
        },
        decrementQuantity: (state, action) => {

            if (state.products[action.payload].quantity > 1) {
                state.products[action.payload].quantity -= 1;
                const subTotal = state.products.reduce((sum, item) => {
                    return sum + item.product.price * item.quantity;
                }, 0);

                state.subTotal = subTotal;
                state.totalPrice = subTotal + state.shipping;
            }
        },

        clearCart: (state) => {
            state.products = [];
            state.subTotal = 0;
            state.totalPrice = 0;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        }
    }
});

export const { addToCartRequest, addToCartSuccess, addToCartReject, clearCart, removeFromCart, incrementQuantity, decrementQuantity, clearError, clearMessage } = cartSlice.actions;

export default cartSlice.reducer;