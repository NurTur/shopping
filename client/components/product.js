import React from "react";
import { connect } from "react-redux";

class Product extends React.Component {

    singleRefs = this.props.DBProduct.reduce((acc, value) => {
        acc[value._id] = React.createRef();
        return acc;
    }, {});

    options = {
        root: null,
        threshold: 0
    };

    callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    };
    observer = new IntersectionObserver(this.callback, this.options);

    componentDidMount() {
        if (!window['IntersectionObserver']) {
            Object.values(this.singleRefs).forEach(value => {
                value.current.src = value.current.dataset.src;
            }
            );
        } else {
            Object.values(this.singleRefs).forEach((value, index) => {
                if (index < 6) { value.current.src = value.current.dataset.src }
                else { this.observer.observe(value.current); }
            }
            );
        }
    }

    render() {
        const { DBProduct } = this.props;
        return (<div id="productsContainer">
            {DBProduct.map(e => <div className="flex-item" key={e._id}>
                <div className="productItem">
                    <div className="image">
                        <img ref={this.singleRefs[e._id]} data-src={e.productImage} alt="" />
                    </div>
                    <div className="title">{(e.productName.length > 20) ? e.productName.slice(0, 20) + '...' : e.productName}</div>
                    <div className="description">{(e.productDescription.length > 135) ? e.productDescription.slice(0, 135) + '...' :
                        e.productDescription}</div>
                    <div className="info">
                        <a href="#">View</a>
                        <div className="price">{e.productPrice}</div>
                    </div>
                </div>
            </div>)}
        </div>)
    }

}

export default connect(state => ({ DBProduct: state.DBProduct }))(Product);


