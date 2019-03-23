import React from "react";
import GetExchange from "../services/getExchange";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HeaderPage extends React.PureComponent {
    state = { currencies: null }

    componentDidMount() {
        this.onExchange();
    }

    onExchange = async () => {
        const currencies = await GetExchange();
        this.setState({ currencies });
    }

    render() {
        const { currencies } = this.state;
        return (
            <div id="headerPage">
                <div className="headerContainer">
                    <header id="headerOfPage">
                        <img className="image" src="/dist/images/logotip3.jpg" alt="logotip" />
                        {currencies &&
                            <div className="exchange">
                                <div className="rates">1 EUR = {(currencies.EUR.Value / currencies.KZT.Value * 100).toFixed(2)} KZT</div>
                                <div className="rates">1 USD = {(currencies.USD.Value / currencies.KZT.Value * 100).toFixed(2)} KZT</div>
                            </div>}
                        <nav className="navig">
                            <Link to={"/"}>show adverts</Link>
                            {this.props.User._id === "" ?
                                <Link to={"/login"}>add advert</Link> :
                                <Link to={"/zapas"}>add advert</Link>
                                /*<Link to={`/users/${this.props.User._id}`}>add advert</Link>*/}
                        </nav>

                    </header>
                </div></div>)
    }
}

export default connect(state => ({ User: state.User }))(HeaderPage);