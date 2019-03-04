import React from 'react';
import ReactDOM from 'react-dom';
//import ProductForm from "./components/productForm";
import HomePage from "./components/homePage";
import LoginPage from "./components/loginPage";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from "react-redux";
import BaseReducer from "./store/BaseReducer";


const store = createStore(BaseReducer);

store.subscribe(() => console.log("===>", store.getState()));

/*
import "./scss/uploadImage.scss";
import "./scss/form.scss";
*/
import "./scss/homePage.scss";
import "./scss/headerOfPage.scss";
import "./scss/filters.scss";
import "./scss/mainOfPage.scss";
import "./scss/loginPage.scss";

const Books = ({ match }) => {
  return (<div>nur{match.params.id}</div>)
}

class Main extends React.Component {
  state = { FormClass: null, GameClass: null, RecordClass: null }


  onLoad = async () => {
    const FormClass = await FormClassCode();
    const GameClass = await GameClassCode();
    const RecordClass = await RecordClassCode();
    this.setState({ FormClass, GameClass, RecordClass });
  }

  render() {
    const { FormClass, GameClass, RecordClass } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/user/:id" component={Books} />
          </Switch>
        </Router>
      </Provider>);
  }
}


ReactDOM.render(<Main />,
  document.getElementById("app")
)