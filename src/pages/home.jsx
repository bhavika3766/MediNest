import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
const HomePage = () => {
  return (
        <div className=' bg-gradient-to-b from-emerald-100 to-blue-200 min-h-screen w-full '>
            {/*Navigation*/}
            <Navbar/>
            {/* Hero section*/}
            <Hero/>
            {/*footer*/}
            <Footer/>
        </div>
  )
}
export default HomePage;