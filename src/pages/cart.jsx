import React,{useState,useEffect}from 'react';
import Nav from '../components/nav';
import ProductList from '../components/productList';
import Dashboard from './dashboard';
import { useCart } from '../context/cartContext';
const Cart = () => {
      
      const {cartItems}=useCart();
      const cartCount=cartItems.length;
   
  return (
    <div className='bg-gradient-to-b  from-emerald-200 gap-x-2 to-blue-200 min-h-screen w-full'>
      
        <Nav/>
        <div>
          <h1 className='font-bold text-left text-5xl font-sans'>CART({cartCount})</h1>
      <ul className=' p-6 ml-15'>{cartItems.map(item=>(<li className="grid" key={item.id}>
        <img src={item.image} className="outline-2 outline-gray-700 hover:drop-shadow-2xl shadow-2xl object-cover h-[50px] w-[50px] shadow-gray-500 hover:scale-105 hover:rounded-xl  " />
       <h3 className='text-xl font-semibold mt-2 '>{item.Prodname}</h3>
       <h5>Price: Rs.{item.price}</h5>
       <h5>Quantity:{item.quantity}</h5>
      </li>)
      )}</ul>
        </div>
       
        
        </div>
        
      
    
  )
}

export default Cart;