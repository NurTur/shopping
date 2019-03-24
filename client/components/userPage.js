import React from "react";
import { connect } from "react-redux";
import ProductForm from "./productForm";


class UserPage extends React.PureComponent {
    state = { modalOpen: false }

    onOpenModal = () => this.setState({ modalOpen: true });
    onCloseModal = () => this.setState({ modalOpen: false });

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
                            <div className="col col-5"></div>

                        </li>
                        {this.props.User.products.map((e, i) => <li key={i} className="table-row">
                            <div className="col col-1" data-label="Picture"></div>
                            <div className="col col-2" data-label="Name"><div>{e.productName}</div>
                                <div>{e.productCategory}</div></div>
                            <div className="col col-3" data-label="Price">{e.productPrice}</div>
                            <div className="col col-4" data-label="Data">{Date(e.Date).toString()}</div>
                            <div className="col col-5" data-label="Delete"></div>
                        </li>)}


                    </ul>

                </div>
            }
            <div className="buttonBox"><div className="add" onClick={this.onOpenModal}><button>ADD</button></div></div>
            <ProductForm onCloseModal={this.onCloseModal} modalOpen={this.state.modalOpen} />
        </div>)
    }
}

export default connect(state => ({ User: state.User }))(UserPage);


