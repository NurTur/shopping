import React from "react";
import GetExhange from "../services/getExhange";

class Exchange extends React.Component {
    state = {
        currencies: null,
    }

    componentDidMount() {
        this.onGetExhange();
    }

    onGetExhange = async () => {
        try {
            const currencies = await GetExhange();
            this.setState({ currencies });
        }
        catch (err) { console.log(err); }
    }

    render() {
        const { currencies } = this.state;
        return (currencies && <div className="exhange">
            <div className="rates">
                <img src="/dist/images/EUR.jpg" alt="EUR" />
                <h4>1 EUR = {(currencies.EUR.Value / currencies.KZT.Value * 100).toFixed(2)} KZT</h4>
            </div>
            <div className="rates">
                <img src="/dist/images/USD.jpg" alt="USD flag" />
                <h4>1 USD = {(currencies.USD.Value / currencies.KZT.Value * 100).toFixed(2)} KZT</h4>
            </div>
        </div>)
    }

}

export default Exchange;
