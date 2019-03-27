import { combineReducers } from "redux";
import UploadImage from "./reducers/productImage";
import { DB } from "./reducers/readDataMongo";
import { User } from "./reducers/user";

const BaseReducer = combineReducers({ UploadImage, DB, User });

export default BaseReducer;