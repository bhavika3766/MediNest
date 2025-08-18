import React,{useState,useEffect}from 'react';
import Nav from '../components/nav';
import ProductList from '../components/productList';
import Dashboard from './dashboard';
import { useCart } from '../context/cartContext';
const Cart = () => {
      
      const {cartItems,DecreaseQuantity,IncreaseQuantity,cartCount}=useCart();
      
   
  return (
    <div className='bg-gradient-to-b  from-emerald-200 gap-x-2 to-blue-200 w-full h-full'>
      
        <Nav/>
        <div>
          <h1 className='font-bold text-left text-5xl font-sans'>CART({cartCount})</h1>
          <div className='m-5 p-5 space-x-5'>
      {cartItems.map(item=>(<div className='flex-1  space-y-4 items-center space-x-6 mb-4' key={item.id}>
        <div>
           <img src={item.image} className="w-16 h-16 object-cover rounded flex " />
        
       
      <div>
      <h3 className='text-lg flex font-semibold mt-2 '>&nbsp;{item.Prodname}</h3>
       <h5>Price: Rs.{item.price}</h5>       
       
       <h5>Quantity: <button className="cursor-pointer bg-white text-black outline-2 object-contain h-[20px] w-[15px]" onClick={DecreaseQuantity}><h1 className='font-extrabold'>-</h1></button> <span>{item.quantity}&nbsp;</span>
       <button className="cursor-pointer bg-white outline-2 text-black object-contain h-[20px] w-[15px]" onClick={()=>IncreaseQuantity(item.id)}><h1 className='font-extrabold'> + </h1></button> 
       </h5>
       </div>
       </div>
    </div>
      ))}
      </div>
        </div>
        </div>
  )
}

export default Cart;