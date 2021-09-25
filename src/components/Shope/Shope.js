import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shope.css';

const Shope = () => {
    const [products,setProducts]= useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch("./products.JSON")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className="shope" >
            <div className="product">
        {
            products.map(product=><Product 
            key={product.id}
            handleAddToCart={handleAddToCart}
            product={product}/>)
        }
            </div>
        <div className="cart-container">
             <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shope;