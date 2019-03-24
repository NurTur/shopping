import { CREATE, ADDPRODUCT } from "../actions/user";

const InitalState = { _id: "", username: "", email: "", phone: "", products: [] };

export function User(state = InitalState, action) {
    switch (action.type) {
        case CREATE: return Object.assign({}, state, action.payload);
        case ADDPRODUCT: return Object.assign({}, state, { products: [...state.products, action.payload] });
        default: return state;
    }
}

