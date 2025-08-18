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
        //const responsePost= axios.post('',item);
        //toast.info("Item added to cart sucessfully!",responsePost.data)
      
      //catch(error){
        //toast.error("Unsucessful!",error.message);
      //}};
    const DecreaseQuantity=(id)=>{
        setCartItems(prev =>
    prev
      .map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter(product => product.quantity > 0) // remove if 0
  );
        };
    
    const IncreaseQuantity=()=>{
      setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
    }

  return (
  
        <cartContext.Provider value={{cartItems,setCartItems,handleAddToCart,DecreaseQuantity,IncreaseQuantity,cartCount}}>
            {children}
        </cartContext.Provider>
  );
}

export default CartProvider;