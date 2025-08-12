import './App.css'
import { useState } from 'react';
import Navbar from './components/navbar';
import AppRoutes from './routes/AppRoutes';
import Modal from './components/modal';

import {BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  console.log("APP");
   const[isOpen,setIsOpen]=useState(false);
   const [modalContent, setModalContent] = useState(null);
 const openModal=(content)=>{
  console.log("openModal called with:", content);
  setIsOpen(true);
setModalContent(content);}
   const closeModal=()=>{
    setIsOpen(false);
    setModalContent(null);
 
   }
return(
<Router>
         
        <AppRoutes />
          <HomePage isOpen={isOpen} openModal={openModal} closeModal={closeModal}/>
        <Modal isOpen={isOpen} close={closeModal} > 
          {modalContent}
        </Modal>
        
    </Router>);
}
export default App
