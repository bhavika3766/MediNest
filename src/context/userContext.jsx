import React,{useState,useEffect,useContext,createContext} from 'react'
import axios from "axios";
const userContext=createContext();
export const useUser=()=>useContext(userContext);
export const userProvider = ({children}) => {
  const[userData,setUserData]=useState([]);
  const userURL="https://6895c31f039a1a2b28903a3e.mockapi.io/medi/user";
  useEffect(()=>{
    axios.get(userURL).then(response=>{
      setUserData(response.data);
    }).catch(
      error=>{
        console.log(error.response.status);
      }
    )
  },[]);
  const userFound =userData.some(user=> user === target);
console.log(found);


  
  return (
  
    <div>
      <userContext.Provider value={{userData,setUserData}}>
      {children}  
      </userContext.Provider>  
    </div>
  );
}

export default userContext;