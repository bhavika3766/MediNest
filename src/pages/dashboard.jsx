import React,{useState,useEffect} from 'react';
import axios from "axios";
import Nav from '../components/nav';
import ProductList from '../components/productList';
import Footer from '../components/footer';
import { useCart } from '../context/cartContext';
import { ToastContainer } from 'react-toastify';

import {useWishList} from '../context/wishlistContext';
const Dashboard = () => {
  
     const[apiData,setApiData]=useState([]);
      
     const {handleAddToWishList}=useWishList();
     const {handleAddToCart}=useCart();
     const[searchTerm,setSearchTerm]=useState("");
     const baseUrl="https://688c929ccd9d22dda5cda5d0.mockapi.io/cart/cart"
    
  useEffect(()=>{
    axios.get(baseUrl).then(response=>{
      console.log('apiData:', response.data); 
      setApiData(response.data);}).catch(error=>{
        console.log(error.response.status);
      })
    },[])
     const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
     }
    const filtered=apiData.filter(item=>item.Prodname.toLowerCase().startsWith(searchTerm.toLowerCase()));

    
    
  return (
    <div className='bg-gradient-to-b via-blue-50 from-emerald-200 gap-x-2 to-blue-200  min-h-0 w-full'>
      <Nav setSearchTerm={setSearchTerm} handleSearchChange={handleSearchChange} filtered={filtered}/>
      <div>  
      <ToastContainer position="bottom-right" />
      
      <ProductList apiData={apiData} onAddToCart={handleAddToCart} onAddToWishList={handleAddToWishList}/>
    <Footer/>
      </div>
      
      </div>
  );

}

export default Dashboard;