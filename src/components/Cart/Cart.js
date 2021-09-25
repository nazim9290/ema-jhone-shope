import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    
let totalQuantity=0;
    let total=0;
    for(const product of props.cart){
        if(!product.quantity){
            product.quantity=1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart">
             <h3 style={{textAlign:"center"}}>Order Summary</h3>
            <h5 style={{textAlign:"center"}}>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;