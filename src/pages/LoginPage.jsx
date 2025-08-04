import React, { useEffect, useState } from 'react'
import {loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha} from 'react-simple-captcha';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
  const[password,setPassword]=useState("");
  const[userName,setUserName]=useState("");
  const[passError,setPassError]=useState(null);
  const[userError,setUserError]=useState(null);
  const navigate=useNavigate();
  useEffect(()=>{
    loadCaptchaEnginge(6);
  },[]);

const handleSubmit=(e)=>{
    e.preventDefault();
    const captchaValue = document.getElementById("captchaInput").value;
  const isCaptchaValid = validateCaptcha(captchaValue);
  const isPasswordValid = validatePassword(password);
  const isUserNameValid = validateUser(userName);
  if((captchaInput!=null) &&(!isCaptchaValid) ){
    alert("Captcha did not match. Try Again!");
    return;
  }

  if (isPasswordValid !== true) {
    alert(isPasswordValid); 
    return;
  }
  if(isUserNameValid!==true){
    alert(isUserNameValid);
    return;
  }
  navigate('/dashboard');
};

const handleChange=(e)=>{
      const{name,value}=e.target;
      if(name==='username'){
        setUserName(value);
      }
      else if(name==='password'){
        setPassword(value);
      }
    }

//Password Validation
const validatePassword=(password)=>{
    const hasSpecialChars=/[!@#$%^&*(),.?":{}/<>]/.test(password);
    const hasNumber=/[0-9]/.test(password);
    const hasUpperCase=/[A-Z]/.test(password);
    const hasLowerCase=/[a-z]/.test(password);
    if(password.length<8){
      return "password must contain minimum 8 characters";
    }
    if(!hasLowerCase){
      return "password must contain atleast one lowercase character";
    }
    if(!hasNumber){
      return "password must contain atleast one digit";
    }
    if(!hasSpecialChars){
      return "password must contain atleast one special character";
    }
    if(!hasUpperCase){
      return "password must contain atleast one Uppercase character";
    }
    return true;
  }
  
useEffect(()=>{
     const validationError=validatePassword(password);
     setPassError(validationError);
    },[password]);

//UserName Validation
const validateUser=(userName)=>{
  const hasInvalidUsername=/[!@#$%^&*(),?":{}/<>]/.test(userName)
    if (userName.includes(" ")){
      return ("Invalid UserName!");
    }
    if(hasInvalidUsername){
      alert("Username cannot have any special characters other than underscore or dot");
      return;
    }
    return true;
}
useEffect(()=>{
     const validationUserError=validateUser(userName);
     setUserError(validationUserError);
    },[userName]);
  return (
    <div className='font-serif bg-gradient-to-b from-emerald-200 to-blue-200 min-w-screen min-h-screen text-center p-8 '>
      <div className='bg-blue-200 flex-col m-4 items-center justify-center backdrop-blur-MD text-center text-black absolute  backdrop-blur-sm shadow-md p-4 mt-8 min-w-lg shadow-3xl h-2/3 rounded-2xl'>
      <form onSubmit={handleSubmit} className=' mb-4 space-x-10 flex-col items-center justify-center' >
        <h1 className='font-sans italic relative text-4xl font-bold pl-5 ml-10  bg-gradient-to-b from-emerald-400 to-purple-500 text-transparent  bg-clip-text' >MediNest</h1>

        <div>
        <label className="my-2 mx-2 mt-2 font-bold text-xl">Username:</label>
        <input
          type=""
          name="username"
          minLength={4}
          maxLength={20}
          className='outline-2 outline-neutral-950 mx-4 font-bold rounded my-2 mt-2'
          onChange={handleChange}
          required>
        </input><br/>
        </div>
        {userName && userError && (
        <div className='text-red-600 text-sm ml-4 mt-0.5'>{userError}</div>
        )}
        <div>
        <label className='my-2 mx-2 font-bold text-xl'>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
          className='outline-2 outline-neutral-950 mx-4 font-bold rounded mb-4 mt-2'>
        </input><br/>
        </div>
        {password && passError && (
        <div className='text-red-600 text-sm ml-4 mt-0.5'>{passError}</div>
        )}
        <div className=' text-center ml-5 flex flex-col justify-center space-y-1 items-center'>
          <LoadCanvasTemplate/>
          <input id='captchaInput' className='outline-1 font-mono ml-3 mr-2 mt-3 rounded ' 
          type="text"
          autoComplete="off"
          spellCheck={false}
          autoCorrect="off"/>
        </div>
        <div className='text-center '>
        <button className='cursor-pointer rounded p-2 bg-blue-300 mt-2 items-center' type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );

}
export default LoginPage;