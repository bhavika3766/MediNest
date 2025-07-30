import React from 'react';
import ProductCard from './productCard';
import ProductData from '../data/products.json';
const ProductList = ({products}) => {
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6  items-center justify-center p-6 '>
      {products.map(ProductData=>(<ProductCard key={ProductData.id} product={ProductData}/>))}
        
      
    </div>
  )
}

export default ProductList;