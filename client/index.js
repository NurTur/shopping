import React from 'react';
import ReactDOM from 'react-dom';
//import UploadImage from "./components/uploadImage";
//import ProductForm from "./components/productForm";
import HomePage from "./components/homePage";

import { createStore } from 'redux';
import { Provider } from "react-redux";
import BaseReducer from "./store/BaseReducer";


const store = createStore(BaseReducer);

store.subscribe(() => console.log("===>", store.getState()));

//import "./scss/uploadImage.scss";
//import "./scss/form.scss";
import "./scss/homePage.scss";
import "./scss/headerOfPage.scss";
import "./scss/filters.scss";
import "./scss/mainOfPage.scss";

ReactDOM.render(<Provider store={store}><HomePage /></Provider>,
  document.getElementById("app")
)