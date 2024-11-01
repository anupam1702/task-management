import React, { useEffect } from 'react'
import { replace, useLocation, useNavigate } from 'react-router-dom'

const RefreshHandler = ({setisAuthenicated}) => {

    const location=useLocation();
    const navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setisAuthenicated(true);
            if(location.pathname ==='/' || location.pathname==='/signup'){
                navigate('/home',{replace:false})
            }
        }
    },[location,navigate,setisAuthenicated])
  return (
    null
  )
}

export default RefreshHandler
