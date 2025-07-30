import React from 'react'

const ProductCard = ({product, addToCart}) => {
  const {Prodname,image,price}= product;
    
  return (
    <div className='max-w-2xl m-4 space-x-6 '>
       <img src={image} className="outline-3 hover:drop-shadow-2xl hover:scale-105 hover:rounded  " alt={Prodname}/>
       <h3 className='text-xl font-semibold mt-3'>{Prodname}</h3>
       <h5>Price: Rs.{price}</h5>
       
       <button onClick={addToCart} className='hover:font-semibold cursor-pointer'>Add To Cart</button>
    </div>
  )
}

export default ProductCard;