import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import Searchbar from './searchbar';

export const Navbar = () => {
   const navigate=useNavigate();
  return (
    <div> 
        <nav className='bg-white container flex items-center justify-between  sticky min-w-full h-[75px]'>
                <h1 className='font-mono text-5xl font-bold italic  text-left p-4  mask-b-from-75% backdrop-blur-3xl bg-gradient-to-b from-emerald-400 to-purple-500 text-transparent bg-clip-text' ><Link to='/HomePage'>MediNest</Link></h1>
                <Searchbar/>
                <div className="flex items-center space-x-4">
                   <button className=' bg-black text-white hover:shadow-xl cursor-pointer   px-4 py-2 rounded-xl' onClick={() => navigate('/login')}>Login</button>
                    <button className=' bg-black text-white  hover:shadow-xl cursor-pointer px-4 py-2 mr-2 rounded-xl'  onClick={() => navigate('/signUp')}>Sign Up</button>
                </div>
        </nav>
    </div>
  );
}

export default Navbar;