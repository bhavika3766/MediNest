import React ,{ useState } from "react"
import ReactDOM from "react-dom";



const Modal = ({children,isOpen,closeModal}) => {
  console.log("modal");
    if(!isOpen) return null;
  return ReactDOM.createPortal(

    <div className="fixed inset-0 backdrop-blur-3xl flex items-center justify-center z-50">
    
      
        
      
      <button className="absolute font-semibold cursor-pointer z-60 top-2 right-3 text-4xl" onClick={closeModal}>&times;</button>
    {children}
    </div>
    
    ,
    document.getElementById("portal")
  );
}

export default Modal;