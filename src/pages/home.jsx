import React,{useState} from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Modal from '../components/modal';
import LoginPage from './LoginPage';

const HomePage = () => {
  console.log("home page");
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
 
  return (
        <div className=' bg-gradient-to-b from-emerald-200 to-blue-200 min-h-screen w-full '>
            {/*Navigation*/}
            <Navbar openModal={openModal}/>
           
          
<Modal isOpen={isOpen} closeModal={closeModal} > 
          {modalContent}
        </Modal>
            {/* Hero section*/}
            <Hero/>
            {/*footer*/}
            <Footer/>
             {isOpen && <Modal onClose={closeModal} />}
        </div>
  )
}
export default HomePage;