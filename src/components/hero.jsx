import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';

const Hero = () => {
    const images=[m1, m2]
       const settings = {
        
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
  };
  return (
    <div > 
      <div className=" max-w-3xl mx-auto mt-6 rounded-xl mb-5 shadow-2xl drop-shadow-2xl">
      <Slider {...settings}>{/*spread operator is here used to pass data to the prop */}
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-full h-2/4 object-cover shadow-2xl  rounded-xl" />
          </div>
        ))}
      </Slider>
      </div>
      <div className='bg-blend-color'>
        <h1 className='mt-6 font-serif font-bold text-3xl text-center text-gray-600 '>Simplifying Healthcare Across India</h1>
        <h1 className='mt-6 font-serif font-bold text-xl text-center text-gray-600 '>Affordable, accessible healthcare at your fingertips</h1>
      </div>
       
      </div>
      

   
    

  )
}

export default Hero;