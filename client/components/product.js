import React from "react";


class Product extends React.Component {
    el = React.createRef();

    lazyLoad = (el) => {

        function loadImage() {
            el.src = el.dataset.src;
        }

        function createIntersectionObserver() {
            const options = {
                root: null,
                threshold: 0
            };

            const callback = function (entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadImage();
                        observer.unobserve(el);
                    }
                });

            };

            const observer = new IntersectionObserver(callback, options);
            observer.observe(el);
        }

        if (!window['IntersectionObserver']) {
            loadImage();
        } else {
            createIntersectionObserver();
        }
    }


    render() {
        const { dataDB } = this.props;

        return (<div id="productsContainer" >
            {dataDB.map(e => <div className="flex-item" key={e._id}>

                <div className="productItem">
                    <div className="image">
                        <img ref={el => this.lazyLoad(el)} data-src={e.productImage} alt={e.productName} />
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
