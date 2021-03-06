import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = (props) => {
    const {cartIncrease} =props
    const[products,setproduct] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setproduct(data))
    },[])
    return (
        <div>
            <h1>All Products:{products.length}</h1>
            <div className="row container">
            {
                products.map(product => <SingleProduct key={product.id} product={product} cartIncrease={cartIncrease} ></SingleProduct>)
            }
            
            </div>
        </div>
    );
};

export default AllProducts;