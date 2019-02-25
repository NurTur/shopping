import { SELECTIMAGE } from "../actions/productImage";

const InitalState = { image: false, selectedFile: null }

function UploadImage(state = InitalState, action) {
    switch (action.type) {
        case SELECTIMAGE: return Object.assign({}, state, action.payload);
        default: return state;
    }
}

export default UploadImage;
