import React,{useState} from 'react';

const Searchbar = ({onSearch}) => {
       const [query,setQuery]=useState(""); //query holds the current value of the search bar.
    const handleSubmit=(Event)=>{
        Event.preventDefault();
        onSearch(query);
        }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            className='md:w-lg bg-cyan-50  mr-2 px-4 py-2 rounded-xl hover:outline-2 outline-gray-500'
            placeholder="What are you looking for today?"
            />
            <button
            className=' mask-alpha bg-gray-950 cursor-pointer px-4 border-box hover:shadow-xl py-2 rounded-xl text-white' 
            type='submit'
            >Search</button>
        </form>
    </div>
  );
}

export default Searchbar;