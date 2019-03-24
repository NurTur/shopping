import { CREATE, ADDPRODUCT, REMOVEPRODUCT } from "../actions/user";


const InitalState = { _id: "", username: "", email: "", phone: "", products: [] };

export function User(state = InitalState, action) {
    switch (action.type) {
        case CREATE: return Object.assign({}, state, action.payload);
        case ADDPRODUCT: return Object.assign({}, state, { products: [...state.products, action.payload] });
        case REMOVEPRODUCT: return Object.assign({}, state, {
            products: [...state.products.slice(0, action.payload),
            ...state.products.slice(action.payload + 1)]
        });
        default: return state;
    }
}

