import React from "react";
import Product from "./product";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetDB } from "../store/actions/readDataMongo";
import { TestLoadDB } from "../store/actions/readDataMongo";
import GetProducts from "../services/getProducts";



class HomePage extends React.Component {

    componentDidMount() {
        if (this.props.DBTest === false) {
            this.onProducts();
            this.props.TestLoadDB(true);
        }
    }

    onProducts = async () => {
        try {
            const dataDB = await GetProducts();
            this.props.GetDB(dataDB);
        }
        catch (err) { console.log(err); }
    }


    render() {
        return (
            <div id="homePage">
                <div className="homeContainer">
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
                        {this.props.DBProduct.length > 0 && <Product />}
                    </div>
                </div></div>);
    }
}

export default connect(state => ({ DBProduct: state.DBProduct, DBTest: state.DBTest }),
    dispatch => bindActionCreators({ GetDB, TestLoadDB }, dispatch))(HomePage);

