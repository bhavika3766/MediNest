import React,{useState}from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import Searchbar from './searchbar';
import Modal from './modal';
import LoginPage from '../pages/LoginPage';
import SignUp from '../pages/SignUp';

export const Navbar = ({openModal}) => {
   const navigate=useNavigate();
   console.log("navbar rendered");
   
  return (
    <div>
        <nav className='bg-white min-w-full container flex-wrap flex items-center mask-b-from-805% justify-between mb-8 sticky w h-[75px]'>
                <h1 className='font-mono text-5xl font-bold italic  text-left p-4  mask-b-from-75% backdrop-blur-3xl bg-gradient-to-b from-emerald-400 to-purple-500 text-transparent bg-clip-text' ><Link to='/'>MediNest</Link></h1>
                <Searchbar/>
                <div className="flex items-center space-x-4">
                   <button type="button" className=' bg-black text-white hover:shadow-xl flex-wrap items-center cursor-pointer   px-4 py-2 rounded-xl' 
                     onClick={() => {
             openModal(<LoginPage />)}
              
            }>Login</button>
                   
                     
               
                    <button className=' bg-black text-white  hover:shadow-xl cursor-pointer px-4 py-2 mr-2 rounded-xl'  onClick={() => 
             openModal(<SignUp />)}
                    >Sign Up</button>
                </div>
        </nav>
    </div>
  );
}

export default Navbar;