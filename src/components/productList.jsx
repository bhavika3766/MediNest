import React,{useState} from 'react'
import Dashboard from '../pages/dashboard';
const productList = ({apiData}) => {
    
    const[currentPage,setCurrentPage]=useState(1);
    const items=12;
    const itemsStart= (currentPage-1)*items;
    const itemsEnd=(itemsStart+items);
    const currentItems=apiData.slice(itemsStart,itemsEnd);

    
  return (
    <div>
        <ul>{currentItems.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
  )
}

export default productList;