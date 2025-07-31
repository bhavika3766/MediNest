import React,{useState,useEffect} from 'react';
import axios from "axios";
import Nav from '../components/nav';
//import ProductList from '../components/productList';
//import ProductData from '../data/products.json';
 

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
  return (
    <div className='bg-gradient-to-b  from-emerald-200 gap-x-2 to-blue-300 min-h-screen w-full'>
      <Nav/>
      <div >
         
      <ul className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-7  items-center justify-center p-6 ml-15'>{apiData.map(Data=>(<li key={Data.id}>
        <img src={Data.image} className="outline-2 outline-gray-500 hover:drop-shadow-2xl hover:scale-105 hover:rounded-xl  " />
       <h3 className='text-xl font-semibold mt-2 '>{Data.Prodname}</h3>
       <h5>Price: Rs.{Data.price}</h5>
       
       <button onClick={Data.addToCart} className='hover:font-semibold cursor-pointer mb-2'>Add To Cart</button>
      </li>)

      
      )}</ul>
      </div>
     
    

    </div>

  )
}

export default Dashboard;