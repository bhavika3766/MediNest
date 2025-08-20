import React,{useState,useEffect}from 'react';
import Nav from '../components/nav';
import ProductList from '../components/productList';
import Dashboard from './dashboard';
import bin from '../assets/bin.svg';
import { useWishList } from '../context/wishlistContext';
const WishList = () => {
      
      const {WishItems,setWishItems,handleAddToWishList,handleRemoval,WishCount}=useWishList();
      
   
  return (
    <div className='bg-gradient-to-b  from-emerald-200 gap-x-2 to-blue-200 min-w-full h-full'>
      
        <Nav/>
        <div>
          <h1 className='font-bold text-left text-5xl font-sans'>WishList({WishCount})</h1>
          <div className='m-5 p-5 space-x-5'>
      {WishItems.map(item=>(<div className='flex-1  space-y-4 items-center space-x-6 mb-4' key={item.id}>
        <div>
           <img src={item.image} className="w-16 h-16 object-cover rounded flex " />
        
       
      <div>
      <h3 className='text-lg flex font-semibold mt-2 '>&nbsp;{item.Prodname}</h3>
       <h5>Price: Rs.{item.price}</h5>
       <button className="cursor-pointer" onClick={()=>handleRemoval(item.id)}><img src={bin} className='h-[25px] w-[25px] font-light'/></button>
      </div>
       </div>
    </div>
      ))}
      </div>
        </div>
        </div>
  )
}

export default WishList;