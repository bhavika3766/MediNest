import React,{useState,useEffect} from 'react';
import axios from "axios";
import Nav from '../components/nav';
import ProductList from '../components/productList';
import Footer from '../components/footer';
import { toast ,ToastContainer} from 'react-toastify';

import { useCart } from '../context/cartContext';
 

const Dashboard = () => {
     const[apiData,setApiData]=useState([]);
     const {handleAddToCart}=useCart();
   let baseUrl='https://688c929ccd9d22dda5cda5d0.mockapi.io/cart/cart';
  
  useEffect(()=>{
    axios.get(baseUrl).then(response=>{
      console.log('apiData:', response.data); 
      setApiData(response.data);}).catch(error=>{
        console.log(error.response.status);
      })
    },[])
    
  return (
    <div className='bg-gradient-to-b  from-emerald-200 gap-x-2 to-blue-200  min-h-screen w-full'>
      <Nav/>
      <div>  
      <ToastContainer position="bottom-right" />
      <ProductList apiData={apiData} onAddToCart={handleAddToCart}/>
    
      </div>
      <Footer/>
      </div>
  );

}

export default Dashboard;