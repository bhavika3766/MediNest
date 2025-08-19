import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const[formData,setFormData]=useState({
     id:"",
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    mob_no:"",
  });
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    
    <div>
      
  <div className='container flex flex-col items-center justify-center bg-amber-50 p-4'>
  
      <form onSubmit={handleSubmit} className='p-5 mb-4 space-x-10 items-center justify-center' >
        <h1 className='font-sans italic text-4xl text-center font-bold pl-5 ml-10 mt-4 p-5 gap-8 bg-gradient-to-b from-emerald-400 to-purple-500 text-transparent  bg-clip-text' >MediNest</h1>
        <div>
        <label className="my-2  mt-2 font-bold text-xl">First Name:</label><br/>
        <input
          type=""
          name="firstName"
          className='outline-2 outline-neutral-950 mx-4 items-center justify-center font-bold rounded my-2 mt-2'
          required>
        </input><br/>
        </div>
         <div>
        <label className="my-2  mt-2 font-bold text-xl">Last Name:</label><br/>
        <input
          type=""
          name="lastName"
          className='outline-2 outline-neutral-950 mx-4 items-center justify-center font-bold rounded my-2 mt-2'
          required>
        </input><br/>
        </div>
        <div>
        <label className="my-2  mt-2 font-bold text-xl">Email:</label><br/>
        <input
          type="email"
          name="email"
          minLength={4}
          maxLength={20}
          className='outline-2 outline-neutral-950 mx-4 items-center justify-center font-bold rounded my-2 mt-2'
          required>
        </input><br/>
        </div>

        <div>
        <label className='my-2  font-bold text-xl'>Password:</label><br/>
        <input
          type="password"
          name="password"
          
          required
          className='outline-2 outline-neutral-950 mx-4 items-center justify-center font-bold rounded mb-4 mt-2'>
        </input><br/>
        </div>
        <div>
        <label className="my-2  mt-2 font-bold text-xl">Phone Number:</label><br/>
        <input
          type="number"
          name="mob_no"
          minLength={10}
          maxLength={10}
          className='outline-2 outline-neutral-950 mx-4 items-center justify-center font-bold rounded my-2 mt-2'
          required>
        </input><br/>
        </div>
        <div className='text-center '>
        <button className='cursor-pointer rounded p-2 bg-blue-300 mt-2 items-center' onClick={()=>navigate('/dashboard')} type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}
export default SignUp