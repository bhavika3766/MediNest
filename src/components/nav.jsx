import React,{useState}from 'react';
import Searchbar from './searchbar';
import cartlogo from "../assets/cartlogo.svg";
import wishlist from '../assets/wishlist.svg';
import { useNavigate ,Link} from 'react-router-dom';
import cart from '../pages/cart';
import Dashboard from '../pages/dashboard';
import user_profile from '../assets/user_profile.svg'
const Nav = ({setSearchTerm,searchTerm,apiData,handleSearchChange}) => {
  const navigate=useNavigate();

  return (
    
        <nav className=' bg-transparent min-w-full container md:flex-wrap sm: flex-wrap flex items-center mask-b-from-805% justify-between mb-8 sticky w h-[75px]'>
                <h1 className='font-mono text-5xl font-bold italic  text-left p-4  mask-b-from-75% backdrop-blur-3xl bg-gradient-to-b from-emerald-500 to-purple-600 text-transparent bg-clip-text' ><Link to='/'>MediNest</Link></h1>
                <Searchbar apiData={apiData} handleSearchChange={handleSearchChange} />
                <div className="flex items-center space-x-4">
                  <button  className=' bg-black hover:shadow-xl cursor-pointer mr-2 px-4 py-2 rounded-xl'  onClick={()=>navigate("/cart")}  ><img src={cartlogo} className=' h-[23px] w-[25px]'/></button>
                  <button  className=' bg-black hover:shadow-xl cursor-pointer mr-2 px-4 py-2 rounded-xl' onClick={()=>navigate("/wishList")}><img src={wishlist}  className="h-[23px] outline-4 w-[25px]"/> </button>
                   <button  className=' bg-black hover:shadow-xl cursor-pointer mr-2 px-4 py-2 rounded-xl'><img src={user_profile} className=' h-[23px] outline-4 w-[25px]'/></button>
                  <button  className=' bg-black text-white hover:shadow-xl cursor-pointer mr-2 px-4 py-2 rounded-xl' onClick={() => navigate("/")}>Logout</button>
                </div>
        </nav>
    
  )
}

export default Nav;