import React,{useState,useEffect,useContext,createContext} from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
 const cartContext= createContext();
export const useCart=()=>useContext(cartContext);
 
export const CartProvider = ({children}) => {
    const[cartItems,setCartItems]=useState([]);
    const cartURL="https://688c929ccd9d22dda5cda5d0.mockapi.io/cart/AddedProducts";
    useEffect(()=>{ 
        axios.get(cartURL).then(responseCart=>{
            setCartItems(responseCart.data);
        }
        ).catch(error=>{
            console.log(error.responseCart.status);
        })

    },[])
    const handleAddToCart=async(item)=>{
      try{
        const responsePost= await axios.post('https://688c929ccd9d22dda5cda5d0.mockapi.io/cart/AddedProducts',item);
        toast.info("Item added to cart sucessfully!",responsePost.data)
      }
      catch(error){
        toast.error("Unsucessful!",error.message);
      }
    };
  return (
    
        <cartContext.Provider value={{cartItems,setCartItems,handleAddToCart}}>
            {children}
        
        </cartContext.Provider>
        
    
  );
}

export default CartProvider;