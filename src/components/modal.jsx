import React ,{ useState } from "react"
import ReactDOM from "react-dom";



const Modal = ({children,isOpen,closeModal}) => {
  console.log("modal");
    if(!isOpen) return null;
  return ReactDOM.createPortal(

    <div className="bg-gray-400 bg-opacity-10">
      <div className="fixed inset-0 " role="alert" aria-modal="true"></div>
      <div className="bg-white fixed z-50 p-6 rounded-lg">
      <button className="text-lg font-semibold cursor-pointer z-60 top-2 right-2" onClick={closeModal}>&times;</button>
    {children}
    </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;