import React,{useState} from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Modal from '../components/modal';
import LoginPage from './LoginPage';

const HomePage = ({isOpen,closeModal,openModal}) => {
  console.log("home page");
  
 
  return (
        <div className=' bg-gradient-to-b from-emerald-200 to-blue-200 min-h-screen w-full '>
            {/*Navigation*/}
            <Navbar openModal={openModal}/>
           
          

            {/* Hero section*/}
            <Hero/>
            {/*footer*/}
            <Footer/>
             {isOpen && <Modal onClose={closeModal} />}
        </div>
  )
}
export default HomePage;