import React,{useState,useEffect} from 'react';

const Searchbar = ({setSearchTerm,handleSearchChange,results}) => {
 
   const[showResults,setShowResults]=useState(false);
  const handleSubmit=(Event)=>{
  
        Event.preventDefault();
       
        }
      
    const searchFunc= (searchTerm) => {
    setSearchTerm(searchTerm);
     }

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            
            onChange={(e)=>searchFunc(e.target.value)}
            className='md:w-lg bg-cyan-50  mr-2 flex-1 px-4 py-2 rounded-xl hover:outline-2 outline-gray-500'
            placeholder="What are you looking for today?"/>
            <button        
            className=' bg-gray-950 cursor-pointer px-4 border-box hover:shadow-xl py-2 rounded-xl text-white' 
            type='submit'
            onClick={()=>setShowResults(true)}
            >Search</button>
          
        </form>
    </div>
  );
}

export default Searchbar;