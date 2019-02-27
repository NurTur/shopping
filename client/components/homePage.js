import React from "react";
import GetProducts from "../services/getProducts";
import GetExhange from "../services/getExhange";
import Product from "./product";

class HomePage extends React.Component {
    state = { dataDB: null, currencies: null }

    componentDidMount() {
        this.onGetProducts().then(() => this.onGetExhange());

    }

    onGetProducts = async () => {
        try {
            const dataDB = await GetProducts();
            this.setState({ dataDB });
        }
        catch (err) { console.log(err); }
    }

    onGetExhange = async () => {
        try {
            const currencies = await GetExhange();
            this.setState({ currencies });
        }
        catch (err) { console.log(err); }
    }

    render() {
        const { dataDB, currencies } = this.state;
        console.log("dataDB", dataDB);
        if (currencies) {
            console.log("currencies");
        }
        console.log("--------------------");
        return (<div id="homePage">
            <div className="headerHome">
                <header id="headerOfPage">
                    <img className="image" src="/dist/images/logotip.jpg" alt="logotip" />
                    {currencies &&
                        <div className="exhange">
                            <div className="rates">
                                <img src="/dist/images/EUR.jpg" alt="EUR" />
                                <h4>1 EUR = {(currencies.EUR.Value / currencies.KZT.Value * 100).toFixed(2)} KZT</h4>
                            </div>
                            <div className="rates">
                                <img src="/dist/images/USD.jpg" alt="USD flag" />
                                <h4>1 USD = {(currencies.USD.Value / currencies.KZT.Value * 100).toFixed(2)} KZT</h4>
                            </div>
                        </div>
                    }
                    <div className="link"><a href="#">Login</a></div>


                </header>
            </div>
            <section className="filters">
                <div id="dataOfField">
                    <h2>Filters :</h2>
                    <div className="condition">
                        <label htmlFor="dropdown">By Category :</label>
                        <select id="dropdown" name="dropdown" >
                            <option value="1">ddd</option>
                            <option value="2">ddd</option>
                        </select>
                    </div>

                    <div className="condition">
                        <label htmlFor="input">By Price ($) :</label>
                        <div id="input">
                            <label id="text1" htmlFor="from">from</label>
                            <input id="from" type="number" />
                            <label id="text2" htmlFor="to">to</label>
                            <input id="to" type="number" />
                        </div>
                    </div>

                    <div className="condition">
                        <label htmlFor="input">By Date :</label>
                        <div id="input">
                            <label id="text1" htmlFor="from">from</label>
                            <input id="from" type="number" />
                            <label id="text2" htmlFor="to">to</label>
                            <input id="to" type="number" />
                        </div>
                    </div>


                </div>
            </section>
            <div className="mainHome">
                {dataDB !== null ? <Product dataDB={dataDB} /> : "ttt"}
            </div>
            <div className="footerHome"></div>
        </div>);
    }
}


export default HomePage;

