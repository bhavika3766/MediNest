import React,{useState,useEffect,useContext,createContext} from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
export  const wishListContext= createContext();
export const useWishList=()=>useContext(wishListContext);
 
export const WishProvider = ({children}) => {
    const[WishItems,setWishItems]=useState([]);
    const [WishCount,setWishCount]=useState(null);
    const wishURL="https://6895c31f039a1a2b28903a3e.mockapi.io/medi/wishList";
    useEffect(()=>{ 
        axios.get(wishURL).then(responseWish=>{
            setWishItems(responseWish.data);
        }
        ).catch(error=>{
            console.log(error.responseWish.status);
        })

    },[])
    useEffect(()=>
          setWishCount(WishItems.length)
        ,[WishItems])
    const handleAddToWishList=(item)=>{
      axios.post("https://6895c31f039a1a2b28903a3e.mockapi.io/medi/wishList").then(
        responseWISH=>toast.info("Item added to WishList sucessfully!",responseWISH.data)
      ).catch(error=>{toast.error("Unsucessful!",error.message);})}
        //const responsePost= axios.post('',item);
        //toast.info("Item added to cart sucessfully!",responsePost.data)
      
      //catch(error){
        //toast.error("Unsucessful!",error.message);
      //}};
      const handleRemoval=()=>{
        
      }
    
  return (
  
        <wishListContext.Provider value={{WishItems,setWishItems,handleAddToWishList,WishCount}}>
            {children}
        </wishListContext.Provider>
  );
}

export default WishProvider;