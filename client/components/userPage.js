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
                <div>nur</div>}
            <div className="buttonBox"><div className="add" onClick={this.onOpenModal}><button>ADD</button></div></div>
            <ProductForm onCloseModal={this.onCloseModal} modalOpen={this.state.modalOpen} />
        </div>)
    }
}

export default connect(state => ({ User: state.User }))(UserPage);


