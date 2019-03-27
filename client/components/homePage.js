import React from "react";
import Product from "./product";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GETDB, GETProducts } from "../store/actions/readDataMongo";
import GetUsers from "../services/getUsers";
import UpdateProducts from "../services/updateProducts";
import DeleteImages from "../services/deleteImages";
import HandleProducts from "../container/handleProducts";

class HomePage extends React.Component {

    AllProductsArray = (arr) => arr.reduce(function (a, b) {
        return a.concat(b);
    }, []);

    componentWillMount() {

        if (this.props.User._id !== "") {
            const { test, arr } = HandleProducts(this.props.DB.Products, this.props.User);
            if (test) {
                this.props.DB.Products = arr;
            }
            /*if (z > 0) { this.onDeleteImages(deleteImageArr); }
            if (z > 0 || x > 0) {
                this.props.DB.Products = arr;
                this.onUpdateProducts({ _id: this.props.User._id, products: this.props.User.products });
            }*/
        }
    }

    componentDidMount() {
        if (this.props.DB.Test === false) {
            this.onUsers();
        }
    }

    onUsers = async () => {
        try {
            const dataDB = await GetUsers();
            const Products = await this.AllProductsArray(dataDB.map(e => { return e.products }));
            const Users = await dataDB.map(e => { return { _IdUser: e._id, username: e.username, email: e.email, phone: e.phone } });
            this.props.GETDB({ Users, Products, Test: true });
        }
        catch (err) { console.log(err); }
    }


    onUpdateProducts = async (obj) => {
        try {
            const result = await UpdateProducts(obj);
            console.log(result);
        }
        catch (err) { console.log(err); }
    }

    onDeleteImages = async (arr) => {
        try {
            const result = await DeleteImages(arr);
            console.log(result);
        }
        catch (err) { console.log(err); }
    }

    render() {
        return (<div id="homePage">
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
                    {this.props.DB.Products.length > 0 && <Product DBProducts={this.props.DB.Products} />}
                </div>
            </div></div>);
    }
}

export default connect(state => ({ DB: state.DB, User: state.User }),
    dispatch => bindActionCreators({ GETDB, GETProducts }, dispatch))(HomePage);

