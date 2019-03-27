import { READ, GETPR } from "../actions/readDataMongo";

const initialState = { Users: [], Products: [], Test: false }

export function DB(state = initialState, action) {
    switch (action.type) {
        case READ: return action.payload;
        case GETPR: return Object.assign({}, state, { Products: action.payload });
        default: return state;
    }
}



/*export function DBUsers(state = [], action) {
    switch (action.type) {
        case READUSERS: return [...action.payload];
        default: return state;
    }
}

export function DBProducts(state = [], action) {
    switch (action.type) {
        case READPRODUCTS: return [...action.payload];
        default: return state;
    }
}

export function DBTest(state = false, action) {
    switch (action.type) {
        case LOADDB: return action.payload;
        default: return state;
    }
}*/




