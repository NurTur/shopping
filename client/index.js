import React from 'react';
import ReactDOM from 'react-dom';

import HomePageCode from "./services/homePageCode";
import LoginPageCode from "./services/loginPageCode";
import RegisterPageCode from "./services/registerPageCode";
import UserPage from "./components/userPage";
import Header from "./components/headerPage";

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
import "./scss/headerPage.scss";
import "./scss/filters.scss";
import "./scss/mainOfPage.scss";
import "./scss/loginPage.scss";
import "./scss/registerPage.scss";
import "./scss/userPage.scss";




function Users() { return (<Route path="/users/:id" component={UserPage} />) }






class Main extends React.Component {
  state = { HomePage: null, LoginPage: null, RegisterPage: null }

  componentDidMount() {
    this.onLoad()
  }

  onLoad = async () => {
    const HomePage = await HomePageCode();
    const LoginPage = await LoginPageCode();
    const RegisterPage = await RegisterPageCode();
    this.setState({ HomePage, LoginPage, RegisterPage });
  }

  render() {
    const { HomePage, LoginPage, RegisterPage } = this.state;
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/users" component={Users} />
      </Switch>
    );
  }
}

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>,
  document.getElementById("app")
)



