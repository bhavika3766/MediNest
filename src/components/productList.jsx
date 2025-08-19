import React,{useState} from 'react'
import Dashboard from '../pages/dashboard';
import wishlist from '../assets/wishlist.svg';

const ProductList = ({apiData,onAddToCart, onAddToWishList}) => {
  const[current,setCurrent]=useState(false);
  const[isFlipped,setIsFlipped]=useState(true);
    
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
const handleFlip=()=>{
  setIsFlipped(prev=>!prev);
}
  return (
    <div className='bg-transparent flex-wrap items-center hover:drop-shadow-lg'>
  
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:gap-3 md:grid-cols-3 lg:grid-cols-4  items-center justify-start p-6 ml-16' hover={()=>{handleFlip}}>{currentItems.map(item=>(<li key={item.id}>
        {isFlipped&&
          <div >
            <button onClick={handleFlip} >
             <img src={item.image} className="outline-2 outline-gray-700 hover:drop-shadow-lg object-cover h-[225px] w-[225px] shadow-gray-500 hover:scale-105 rounded-xl hover:rounded-2xl  " />
             <h3 className='text-xl font-semibold mt-2 '>{item.Prodname}</h3>
             <h5>Price: Rs.{item.price}</h5>
             <button onClick={() => onAddToCart(item)} className='hover:font-semibold cursor-pointer '>Add To Cart</button>
             <br/>
             <button className="hover:font-semibold cursor-pointer mb-4" onClick={()=> onAddToWishList(item)}>
              Add To WishList
             </button>
             </button>
             </div>}
       {!isFlipped&&(<div>
        <button onClick={handleFlip} className='bg-white pb-4 pt-4 pl-4 pr-4 m-4 h-[225px] w-[225px]'>
            <h2 className="font-bold pb-4">{item.Prodname}</h2>
            <p className='pb-2'>{item.description}</p>
            <p className='font-semibold'>{item.category}</p>
            </button>
            </div>
            
             )}
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