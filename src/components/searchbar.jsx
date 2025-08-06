import React,{useState,useEffect} from 'react';

const Searchbar = ({setSearchTerm,searchTerm,apiData,handleSearchChange}) => {
  console.log(typeof apiData.Prodname, apiData.Prodname); 
       
  useEffect(() => {
    // Log the type and value of searchTerm and Prodname for debugging
    console.log('searchTerm type:', typeof searchTerm, searchTerm);
    // Log the Prodname for debugging
    apiData.forEach(data => {
      console.log('Prodname type:', typeof apiData.Prodname, apiData.Prodname);
    });
  }, [searchTerm, apiData]);   
    const handleSubmit=(Event)=>{
        Event.preventDefault();
       
        }
    const filtered=apiData.filter(data=>(String(data.Prodname) || "").toLowerCase().includes(String(searchTerm) || "").toLowerCase());
    const searchChange=()=>{
        handleSearchChange(e.target.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={searchTerm}
            onChange={searchChange}
            className='md:w-lg bg-cyan-50  mr-2 px-4 py-2 rounded-xl hover:outline-2 outline-gray-500'
            placeholder="What are you looking for today?"/>
            <select 
            
            >
              <option value=""></option>
              {filtered.map(items=><option  key={items.id}>{items.name}</option>)}
            </select>
             
            
            <button
            className=' mask-alpha bg-gray-950 cursor-pointer px-4 border-box hover:shadow-xl py-2 rounded-xl text-white' 
            type='submit'
            >Search</button>
        </form>
    </div>
  );
}

export default Searchbar;