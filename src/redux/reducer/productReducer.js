import { ADD_TO_CART } from '../actionTypes/actionTypes'

export const initialState = {
    cart: []
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default: return state
    }
}