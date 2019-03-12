import { CREATE } from "../actions/user";

const InitalState = { _id: "", username: "", email: "", phone: "", products: [] };

export function User(state = InitalState, action) {
    switch (action.type) {
        case CREATE: return Object.assign({}, state, action.payload);
        default: return state;
    }
}

