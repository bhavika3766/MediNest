import React from 'react';
import Searchbar from './searchbar';
import cart from "../assets/cart.svg";
import wishlist from '../assets/wishlist.svg'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate=useNavigate();
  return (
    
        <nav className='bg-white text-black container flex items-center justify-between  sticky min-w-full h-[75px]'>
                <h1 className='font-mono text-5xl font-bold italic  text-left p-4  mask-b-from-75% backdrop-blur-3xl bg-gradient-to-b from-emerald-400 to-purple-500 text-transparent bg-clip-text' >MediNest</h1>
                <Searchbar />
                <div className="flex items-center space-x-4">
                  <button  className=' bg-black hover:shadow-xl cursor-pointer mr-2 px-4 py-2 rounded-xl' ><img src={cart} className=' h-[23px] w-[25px]'/></button>
                  <button  className=' bg-black hover:shadow-xl cursor-pointer mr-2 px-4 py-2 rounded-xl' ><img src={wishlist} className=' h-[23px] outline-4 w-[25px]'/></button>
                  <button  className=' bg-black text-white hover:shadow-xl cursor-pointer mr-2 px-4 py-2 rounded-xl' onClick={() => navigate("/HomePage")}>Logout</button>
                    
                </div>
        </nav>
    
  )
}

export default Nav;