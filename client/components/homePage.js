import React from "react";
import GetProducts from "../services/getProducts";
import Product from "./product";
import Exchange from "./exchange";


class HomePage extends React.Component {
    state = { dataDB: null }

    componentDidMount() { this.onGetProducts(); }

    onGetProducts = async () => {
        try {
            const dataDB = await GetProducts();
            this.setState({ dataDB });
        }
        catch (err) { console.log(err); }
    }

    render() {
        const { dataDB } = this.state;
        return (<div id="homePage">
            <div className="headerHome">
                <header id="headerOfPage">
                    <img className="image" src="/dist/images/logotip.jpg" alt="logotip" />
                    {dataDB && <Exchange />}
                    <div className="link"><a href="/login">place an ad</a></div>
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
                {dataDB && <Product dataDB={dataDB} />}
            </div>
            <div className="footerHome"></div>
        </div>);
    }
}


export default HomePage;

