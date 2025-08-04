import React,{useState} from 'react'
import Dashboard from '../pages/dashboard';

const ProductList = ({apiData,onAddToCart}) => {
    
    const[currentPage,setCurrentPage]=useState(1);
    const items=12;
    const itemsStart= (currentPage-1)*items;
    const itemsEnd=(itemsStart+items);
    const currentItems=apiData.slice(itemsStart,itemsEnd);
    const totalPages=Math.ceil(apiData.length/items);
    const handleNext=()=>{
      if((currentPage<totalPages)){
      setCurrentPage(currentPage+1);
      }
    }
    const handlePrev=()=>{
      if(currentPage>1){ setCurrentPage(currentPage-1);}
    }

  return (
    <div>
  
        <ul className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-7  items-center justify-center p-6 ml-16'>{currentItems.map(item=>(<li key={item.id}>
        <img src={item.image} className="outline-2 outline-gray-700 hover:drop-shadow-2xl object-cover h-[225px] w-[225px] shadow-gray-500 hover:scale-105 hover:rounded-xl  " />
       <h3 className='text-xl font-semibold mt-2 '>{item.Prodname}</h3>
       <h5>Price: Rs.{item.price}</h5>
       <button onClick={() => onAddToCart(item)} className='hover:font-semibold cursor-pointer mb-2'>Add To Cart</button>
      </li>)
      )}</ul>
        <div className=' flex items-center justify-center gap-8'>
          <button className="flex font-bold cursor-pointer" onClick={handlePrev} disabled={currentPage===1}>Prev</button>
          <h5 className='flex items-center justify-center relative'>Page {currentPage} of {totalPages}</h5>
          <button className="font-bold cursor-pointer" onClick={handleNext} disabled={currentPage===totalPages}>Next</button>
        </div>
    </div>
  )
}

export default ProductList;