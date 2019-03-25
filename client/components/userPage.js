import React from "react";
import ProductForm from "./productForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RemovePRODUCT } from "../store/actions/user";


class UserPage extends React.Component {
    state = { modalOpen: false }

    onOpenModal = () => this.setState({ modalOpen: true });
    onCloseModal = () => this.setState({ modalOpen: false });
    onRemove = (i) => this.props.RemovePRODUCT(i);


    render() {
        return (<div id="userPage">
            {this.props.User.products.length === 0 ?
                <div id="adsEmptyBox">You currently have no active ads</div> :
                <div id="adsBox">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">Picture</div>
                            <div className="col col-2">Name</div>
                            <div className="col col-3">Price</div>
                            <div className="col col-4">Date</div>
                            <div className="col col-6"></div>
                        </li>
                        {this.props.User.products.map((e, i) => <li key={i} className="table-row">
                            <div className="col col-1" data-label="Picture">
                                <img className="picture" src={e.productImage} alt="" /></div>
                            <div className="col col-2" data-label="Name"><div>{e.productName}</div>
                                <div>{e.productCategory}</div></div>
                            <div className="col col-3" data-label="Price">
                                {`${new Intl.NumberFormat(['ban', 'id']).format(parseFloat(e.productPrice))} ${e.productValuta}`}</div>
                            <div className="col col-4" data-label="Data">
                                <div>{new Date(parseInt(e.Date)).toLocaleDateString()}</div>
                                <div>{new Date(parseInt(e.Date)).toLocaleTimeString()}</div>
                            </div>
                            <div className="col col-5" data-label="Delete" onClick={() => this.onRemove(i)}></div>
                        </li>)}
                    </ul>
                </div>
            }
            <div className="buttonBox"><div className="add" onClick={this.onOpenModal}><button>ADD</button></div></div>
            <ProductForm onCloseModal={this.onCloseModal} modalOpen={this.state.modalOpen} />
        </div>)
    }
}


export default connect(state => ({ User: state.User }),
    dispatch => bindActionCreators({ RemovePRODUCT }, dispatch))(UserPage);



