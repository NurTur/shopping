import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SetIMAGE } from "../store/actions/productImage";
import UploadImage from "./uploadImage";
import PostProduct from "../services/postProduct";


class ProductForm extends React.Component {

    state = { productValuta: "Т" }
    productNameRef = React.createRef();
    productDescriptionRef = React.createRef();
    productCategoryRef = React.createRef();
    productPriceRef = React.createRef();


    handleSubmit = e => {
        e.preventDefault();
        const { image, info } = this.props.UploadImage;
        const formatCurrency = new Intl.NumberFormat(['ban', 'id']).format(parseFloat(this.productPriceRef.current.value));
        if (image && info) {
            const obj = {
                productName: this.productNameRef.current.value,
                productDescription: this.productDescriptionRef.current.value,
                productCategory: this.productCategoryRef.current.value,
                productPrice: `${formatCurrency} ${this.state.productValuta}`
            };
            PostProduct(this.props.UploadImage.selectedFile, obj).then(res => console.log(res.data));
        }
        else {
            const obj = {
                productName: this.productNameRef.current.value,
                productDescription: this.productDescriptionRef.current.value,
                productCategory: this.productCategoryRef.current.value,
                productPrice: `${formatCurrency} ${this.state.productValuta}`
            };
            PostProduct(null, obj).then(res => console.log(res.data));
        }

    };

    render() {

        const arr = ["Property", "Transport", "Electronics", "Clothes", "Other"];
        return (
            <div id="form-outer">
                <h1>Product Form</h1>
                <p>Please, fill in the form of your product for the bulletin board</p>
                <form id="survey-form" onSubmit={this.handleSubmit}>
                    <div className="rowTab">
                        <div className="labels">
                            <label id="name-label" htmlFor="name">* Product Name </label>
                        </div>
                        <div className="rightTab">
                            <input type="text" id="name" className="input-field" placeholder="Enter product name"
                                ref={this.productNameRef} required />
                        </div>
                    </div>


                    <div className="rowTab">
                        <div className="labels">
                            <label htmlFor="currentPos">* Product Category </label>
                        </div>
                        <div className="rightTab">
                            <select id="dropdown" className="dropdown" ref={this.productCategoryRef}>
                                <option disabled>Select an category...</option>
                                {arr.map((d, i) => <option value={d} key={i}>{d}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="rowTab">
                        <div className="labels">
                            <label htmlFor="comments">Describe your product </label>
                        </div>
                        <div className="rightTab">
                            <textarea id="comments" className="input-field" style={{ height: "150px", resize: "vertical" }}
                                placeholder="Enter your description here..." ref={this.productDescriptionRef}></textarea>
                        </div>
                    </div>

                    <div className="rowTab">
                        <div className="labels">
                            <label id="name-label" htmlFor="price">* Product price </label>
                        </div>
                        <div className="rightTab">
                            <input type="number" id="price" className="input-field" placeholder="Enter your product price"
                                ref={this.productPriceRef} required />
                        </div>
                    </div>


                    <div className="rowTab">
                        <div className="labels">
                        </div>
                        <div className="rightTab">
                            <label><input value="Т" name="radio" type="radio" defaultChecked={true}
                                onChange={(event) => this.setState({ productValuta: event.target.value })} /> Тенге  </label>
                            <label><input value="€" name="radio" type="radio"
                                onChange={(event) => this.setState({ productValuta: event.target.value })} /> Eur  </label>
                            <label><input value="$" name="radio" type="radio"
                                onChange={(event) => this.setState({ productValuta: event.target.value })} /> Usd </label>
                        </div>
                    </div>
                    <br />
                    <div className="center"><UploadImage /></div>
                    <br />
                    <button id="submit" type="submit">Submit</button>
                </form>
            </div>

        );
    }
}

export default connect(state => ({ UploadImage: state.UploadImage }),
    dispatch => bindActionCreators({ SetIMAGE }, dispatch))(ProductForm);







