import React from 'react';


const Footer = () => {
  return (
    <div className='flex flex-col-reverse min-h-screen text-MD'>
    <footer className="bg-gray-950 py-15 text-white  " >
        <div className='flex grid-auto pl-8 ml-4 mr-4 pr-8 md:gap-52 mb-4 min-w-full '>
          <div>
            <h1 className='font-bold font-sans'>About Us</h1>
          </div>
          <div>
            <h1 className='font-bold font-sans mb-3 flex flex-col space-y-4'>Quick Links</h1>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h1 className='font-bold font-sans'>Customer Support</h1>
          </div>

          <div>
            <h1 className='font-bold font-sans'>Policy Info</h1>
          </div>

          <div>
            <h1 className='font-bold font-sans'>Contact Info</h1>
          </div> 
        </div> 
        <div className='flex justify-end mx-2 my-0 py-0'>
            ©  2025 MediNest. All rights reserved.
        </div>       
    </footer>
    </div>
  )
}

export default Footer;