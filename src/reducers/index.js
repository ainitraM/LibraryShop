import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './Books.js';

const rootReducer = combineReducers ({
    items,
    itemsHasErrored,
    itemsIsLoading
});

export default rootReducer;