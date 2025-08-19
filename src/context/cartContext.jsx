import React,{useState,useEffect,useContext,createContext} from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
 const cartContext= createContext();
export const useCart=()=>useContext(cartContext);
 
export const CartProvider = ({children}) => {
    const[cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(null);
    
    const cartURL="https://688c929ccd9d22dda5cda5d0.mockapi.io/cart/AddedProducts";
    useEffect(()=>{ 
        axios.get(cartURL).then(responseCart=>{
            setCartItems(responseCart.data);
        }
        ).catch(error=>{
            console.log(error.responseCart.status);
        })
                                                                                               
    },[])
    useEffect(()=>
      setCartCount(cartItems.length)
    ,[cartItems])
    const handleAddToCart=(item)=>{
      axios.post("https://688c929ccd9d22dda5cda5d0.mockapi.io/cart/AddedProducts").then(
        
        responsePost=>toast.info("Item added to cart sucessfully!",responsePost.data)
      ).catch(error=>{toast.error("Unsucessful!",error.message);})}
    const DecreaseQuantity=(id)=>{
      const updatedDecrease=cartItems.find(item=>id===item.id);
      if(!updatedDecrease) return ;
      if(updatedDecrease.quantity>1){
        const updatedDecItems={...updatedDecrease,quantity:updatedDecrease.quantity-1}
      axios.put(`${cartURL}/${id}`,updatedDecItems).then(res=>setCartItems(prev=>prev.map(i=>i.id===res.data.id?res.data:i))).catch(err=>console.log(err.response?.status));
      }
      else{
        
        axios.delete(`${cartURL}/${id}`).then(res=>setCartItems(cartItems.filter(i=>i.id!==id))).catch(err=>console.log(err.response.status))
      }
    }
    
    const IncreaseQuantity=(id)=>{
      const update=cartItems.find(item=>id===item.id);
      if(!update) return ;
      const updatedItems={...update,quantity:update.quantity+1}
      axios.put(`${cartURL}/${id}`,updatedItems).then(res=>setCartItems(prev=>prev.map(i=>i.id===res.data.id?res.data:i))).catch(err=>console.log(err.response?.status));
      
    }

  return (
  
        <cartContext.Provider value={{cartItems,setCartItems,handleAddToCart,IncreaseQuantity,DecreaseQuantity,cartCount}}>
            {children}
        </cartContext.Provider>
  );
}

export default CartProvider;