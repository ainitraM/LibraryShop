import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from './Cart.js';

//inside cart: objects of book with id and quantity {id: , quantity: }
const initialState = {
    cart: [{ id: 0, quantity: 0 }]
}

export function cartReducer (state = initialState, action) {
    switch(action.type) {
        case(ADD_TO_CART):
            let addedItem = state.cart.indexOf(action.id);

            if(addedItem !== -1) {
                addedItem.quantity += 1;
                return {
                    ...state
                }
            } else {
                let newItem = {
                    id: action.id,
                    quantity: 1
                };
                return {
                    ...state,
                    cart: [...state.cart, {id: action.id, quantity: 1}]
                }
            }
        case(REMOVE_ITEM):

            return {
                ...state
            }
        default:
            return state;
    }

}