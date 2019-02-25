import { combineReducers } from "redux";
import UploadImage from "./reducers/productImage";

const BaseReducer = combineReducers({ UploadImage });

export default BaseReducer;