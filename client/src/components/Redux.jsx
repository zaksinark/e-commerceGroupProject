import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { products } from './Products.jsx';

const sessionReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_SESSION':
            return action.payload;
        case 'CLEAR_SESSION':
            return null;
        default:
            return state;
    }
};
// change products on the line below to [] when dummy data is no longer needed
const cartReducer = (state = products, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_PRODUCT_FROM_CART':
            return state.filter(product => product.id !== action.payload);
        case 'MOVE_PRODUCT_TO_SAVED_ITEMS_FROM_CART':
            return state.filter(product => product.id !== action.payload.id);
        case 'MOVE_PRODUCT_TO_CART_FROM_SAVED_ITEMS':
            return [...state, action.payload];
        default:
            return state;
    }
};

const savedItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_SAVED_ITEMS':
            return [...state, action.payload];
        case 'REMOVE_PRODUCT_FROM_SAVED_ITEMS':
            return state.filter(product => product.id !== action.payload);
        case 'MOVE_PRODUCT_TO_CART_FROM_SAVED_ITEMS':
            return state.filter(product => product.id !== action.payload.id);
        case 'MOVE_PRODUCT_TO_SAVED_ITEMS_FROM_CART':
            return [...state, action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    session: sessionReducer,
    cart: cartReducer,
    savedItems: savedItemsReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;