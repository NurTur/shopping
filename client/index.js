import React from 'react';
import ReactDOM from 'react-dom';

import HomePageCode from "./services/homePageCode";
//import LoginPageCode from "./services/loginPageCode";
import LoginPage from "./components/loginPage2";

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
import "./scss/homePage/homePage.scss";
import "./scss/homePage/headerOfPage.scss";
import "./scss/homePage/filters.scss";
import "./scss/homePage/mainOfPage.scss";
import "./scss/loginPage.scss";


const Books = ({ match }) => {
  return (<div>nur{match.params.id}</div>)
}

class Main extends React.Component {
  state = { HomePage: null }

  componentDidMount() {
    this.onLoad();
  }

  onLoad = async () => {
    const HomePage = await HomePageCode();
    this.setState({ HomePage });
  }

  render() {
    const { HomePage } = this.state;

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </Provider>);
  }
}


ReactDOM.render(<Main />,
  document.getElementById("app")
)



