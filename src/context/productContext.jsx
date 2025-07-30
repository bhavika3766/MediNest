import React, { createContext, useState } from 'react';
import Product from '../data/products.json';

const productContext = () => {
    const handleCart=(addToCart)=>{
        const[quantity, setQuantity]=useState(0);
        Product.find(item=>{itemid==product.id})
    }
  return (
    <div>
        
    </div>
  )
}

export default productContext;