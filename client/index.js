import React from 'react';
import ReactDOM from 'react-dom';
//import UploadImage from "./components/uploadImage";
import ProductForm from "./components/productForm";


import { createStore } from 'redux';
import { Provider } from "react-redux";
import BaseReducer from "./store/BaseReducer";


const store = createStore(BaseReducer);

store.subscribe(() => console.log("===>", store.getState()));

import "./scss/uploadImage.scss";
import "./scss/form.scss";

ReactDOM.render(<Provider store={store}><ProductForm /></Provider>,
  document.getElementById("app")
)