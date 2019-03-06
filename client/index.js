import React from 'react';
import ReactDOM from 'react-dom';

import HomePageCode from "./services/homePageCode";
import Header from "./components/headerPage";

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
import "./scss/homePage.scss";
import "./scss/headerPage.scss";
import "./scss/filters.scss";
import "./scss/mainOfPage.scss";
import "./scss/loginPage.scss";


/*const Books = ({ match }) => {
  return (<div>nur{match.params.id}</div>)
}*/

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
    return (<Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>);
  }
}

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

ReactDOM.render(<Router><App /></Router>,
  document.getElementById("app")
)



