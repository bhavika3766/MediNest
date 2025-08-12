import React,{useState,useEffect,useContext,createContext} from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
export  const wishListContext= createContext();
export const useWishList=()=>useContext(wishListContext);
 
export const WishProvider = ({children}) => {
    const[WishItems,setWishItems]=useState([]);
    const [WishCount,setWishCount]=useState(WishItems.length);
    const wishtURL="https://6895c31f039a1a2b28903a3e.mockapi.io/medi/wishList";
    useEffect(()=>{ 
        axios.get(wishtURL).then(responseWish=>{
            setWishItems(responseWish.data);
        }
        ).catch(error=>{
            console.log(error.responseWish.status);
        })

    },[])
    const handleAddToWishLists=(item)=>{
      axios.post("https://6895c31f039a1a2b28903a3e.mockapi.io/medi/wishList").then(
        responsePost=>toast.info("Item added to WishList sucessfully!",responsePost.data)
      ).catch(error=>{toast.error("Unsucessful!",error.message);})}
        //const responsePost= axios.post('',item);
        //toast.info("Item added to cart sucessfully!",responsePost.data)
      
      //catch(error){
        //toast.error("Unsucessful!",error.message);
      //}};
    const DecreaseQuantity=()=>{
        if(item.length>0){
          setWishItems.quantity(WishItemsItems.quantity-1);}
        else{
          setWishItems(...WishItems.slice(0,-1));
          setWishCount(WishCount-1);
        }
        };
    
    const IncreaseQuantity=()=>{
      setWishItems.quantity(WishItemsItems.quantity+1);
    }
    
  return (
  
        <wishListContext.Provider value={{WishItems,setWishItems,handleAddToWishLists,DecreaseQuantity,IncreaseQuantity,WishCount}}>
            {children}
        </wishListContext.Provider>
  );
}

export default WishProvider;