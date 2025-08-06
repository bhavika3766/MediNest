import React,{useState,useEffect} from 'react';
import axios from "axios";
import Nav from '../components/nav';
import ProductList from '../components/productList';
import Footer from '../components/footer';
import { useCart } from '../context/cartContext';
import { data } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
 

const Dashboard = () => {
     const[apiData,setApiData]=useState([]);
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
    

    
    
  return (
    <div className='bg-gradient-to-b  from-emerald-200 gap-x-2 to-blue-200  min-h-screen w-full'>
      <Nav apiData={apiData} handleSearchChange={handleSearchChange}/>
      <div>  
      <ToastContainer position="bottom-right" />
      <ProductList apiData={apiData} onAddToCart={handleAddToCart}/>
    <Footer/>
      </div>
      
      </div>
  );

}

export default Dashboard;