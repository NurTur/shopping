import React from "react";

class Product extends React.Component {

    singleRefs = this.props.DBProducts.reduce((acc, value) => {
        acc[value._IdUser + value.Date] = React.createRef();
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
                if (index < 2) { value.current.src = value.current.dataset.src }
                else { this.observer.observe(value.current); }
            }
            );
        }
    }


    render() {
        return (<div id="productsContainer">
            {this.props.DBProducts.map((e, i) => <div className="flex-item" key={e._IdUser + e.Date}>
                <div className="productItem">
                    <div className="image">
                        <img ref={this.singleRefs[e._IdUser + e.Date]} data-src={e.productImage} alt="" />
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

export default Product;