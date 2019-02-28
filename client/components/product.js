import React from "react";




class Product extends React.Component {




    render() {
        const { dataDB } = this.props;

        return (<div id="productsContainer">
            {dataDB.map(e => <div className="flex-item" key={e._id}>
                <div className="productItem">
                    <div className="image">



                        <img src={e.productImage} alt={e.productName} />

                    </div>



                    <div className="title">{(e.productName.length > 20) ? e.productName.slice(0, 20) + '...' : e.productName}</div>
                    <div className="description">{(e.productDescription.length > 135) ? e.productDescription.slice(0, 135) + '...' :
                        e.productDescription}</div>
                    <div className="info">
                        <a href="#">View</a>
                        <div className="price">{e.productPrice}</div>
                    </div></div>

            </div>)}
        </div>)
    }

}






export default Product;
