import React,{useState,useEffect}from 'react';
import axios from 'axios';
import Nav from '../components/nav';
const Cart = () => {
  const[cartCount,setCartCount]=useState(0);
      const[cartDetails,setCartDetails]=useState([]);
   useEffect(()=>{
          axios.get("https://688c929ccd9d22dda5cda5d0.mockapi.io/cart/cart").then(response=>{
            setCartDetails(response.data);
            setCartCount(cartCount+1);
          }
          ).catch(error=>{
            console.log(error.message);
          })
        },[onAddToCart]);
  return (
    <div className='bg-gradient-to-b  from-emerald-200 gap-x-2 to-blue-200 min-h-screen w-full'>
      
        <Nav/>
        <div>
          <h1 className='font-bold text-left text-5xl font-sans'>CART({cartCount})</h1>

        </div>
       
          
        <div>

        </div>
        
      </div>
    
  )
}

export default Cart;