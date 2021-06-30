import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './Books.js';
import { cartReducer } from "./CartReducer.js";

const rootReducer = combineReducers ({
    items,
    itemsHasErrored,
    itemsIsLoading,
    cartReducer
});

export default rootReducer;