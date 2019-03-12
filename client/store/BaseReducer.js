import { combineReducers } from "redux";
import UploadImage from "./reducers/productImage";
import { DBProduct, DBTest } from "./reducers/readDataMongo";
import { User } from "./reducers/user";

const BaseReducer = combineReducers({ UploadImage, DBProduct, DBTest, User });

export default BaseReducer;