import React,{useState,useEffect} from 'react';
import axios from "axios";
import Nav from '../components/nav';
import ProductList from '../components/productList';
import Footer from '../components/footer';
import { toast } from 'react-toastify';
 

const Dashboard = () => {
     const[apiData,setApiData]=useState([]);
   let baseUrl='https://mocki.io/v1/c784a65f-a89a-4ecf-83a3-0bdc98e2b91a';
  
  useEffect(()=>{
    axios.get(baseUrl).then(response=>{
      console.log('apiData:', response.data); 
      setApiData(response.data);}).catch(error=>{
        console.log(error.response.status);
      })
    },[])
    const handleAddToCart=async(item)=>{
      try{
        const response= await axios.post('https://688c929ccd9d22dda5cda5d0.mockapi.io/cart/cart',item);
        toast.info("Item added to cart sucessfully!",response.data)
      }
      catch(error){
        toast.error("Unsucessful!",error.message);
      }
    };
  return (
    <div className='bg-gradient-to-b  from-emerald-100 gap-x-2 to-blue-200  min-h-screen w-full'>
      <Nav/>
       <div>  
      

      <ProductList apiData={apiData} onAddToCart={handleAddToCart}/>
      </div>
      <Footer/>
      </div>
  );

}

export default Dashboard;