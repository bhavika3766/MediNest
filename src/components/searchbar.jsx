import React,{useState,useEffect} from 'react';

const Searchbar = ({setSearchTerm,searchTerm,apiData,handleSearchChange}) => {
 
   console.log(apiData)
    const handleSubmit=(Event)=>{
        Event.preventDefault();
       
        }
    // const filtered=(apiData || []).filter(data=>(data.Prodname || "").toLowerCase().includes((searchTerm || "").toLowerCase()));
    const filtered=apiData.filter(data=>(data.Prodname).toLowerCase().includes((searchTerm)));

   
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className='md:w-lg bg-cyan-50  mr-2 px-4 py-2 rounded-xl hover:outline-2 outline-gray-500'
            placeholder="What are you looking for today?"/>
            <button
            className=' mask-alpha bg-gray-950 cursor-pointer px-4 border-box hover:shadow-xl py-2 rounded-xl text-white' 
            type='submit'
            >Search</button>
        </form>
    </div>
  );
}

export default Searchbar;