import { READDB } from "../actions/readDataMongo";
import { LOADDB } from "../actions/readDataMongo";

const InitalState = [];

export function DBProduct(state = InitalState, action) {
    switch (action.type) {
        case READDB: return [...action.payload];
        default: return state;
    }
}

export function DBTest(state = false, action) {
    switch (action.type) {
        case LOADDB: return action.payload;
        default: return state;
    }
}




