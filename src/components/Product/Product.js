import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';


const Product = (props) => {
    const {name,price,img,stock,seller,star}=props.product;
    console.log(props.product);
    return (
        <div className="product-container">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="product-des">
                <h3 className="product-title">{name}</h3>
                <p><small>by: {seller}</small></p>
                <div className="product-body">
                    <div>
                        <p>price {price}</p>
                             <p><small>only {stock} left in stock - order soon</small></p>
                             <button className="reguler-btn" onClick={()=>props.handleAddToCart(props.product)}><FontAwesomeIcon icon={ faShoppingCart } /> buy now</button>
                </div>
                <div className="rating">
                <Rating
                     initialRating={star}
                     emptySymbol="far fa-star fill"
                    fullSymbol="fas fa-star fill"
                        readonly
                        />
                        <h4>Features</h4>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Product;