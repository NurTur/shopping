import React from "react";
import GetExchange from "../services/getExchange";


class Exchange extends React.Component {
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
        const style = { fontSize: "16px", fontWeight: "1000" };
        if (currencies === null) {
            return (<div></div>);
        } else {
            return (<div className="exhange">
                <div className="rates">
                    <img src="/dist/images/EUR.jpg" alt="EUR" />
                    <h4 style={style}>1 EUR = {(currencies.EUR.Value / currencies.KZT.Value * 100).toFixed(2)} KZT</h4>
                </div>
                <div className="rates">
                    <img src="/dist/images/USD.jpg" alt="USD" />
                    <h4 style={style}>1 USD = {(currencies.USD.Value / currencies.KZT.Value * 100).toFixed(2)} KZT</h4>
                </div>
            </div>)
        }
    }
}


export default Exchange;
