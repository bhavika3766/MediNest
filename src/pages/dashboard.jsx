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
      
         {/*<ProductList products={ProductData} />*/}
      <ul>{apiData.map(Data=>(<li key={Data.id}>{Data.Prodname}— ₹{Data.price}-<img src={Data.image}/></li>)

      
      )}</ul>
     
    

    </div>

  )
}

export default Dashboard;