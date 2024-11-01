import React, { useEffect, useState } from 'react'
import { Navigate,useNavigate } from 'react-router-dom';

const Home = () => {
  const [logedinUser,setloggedinUser]=useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    setloggedinUser(localStorage.getItem("username"))

  },[])

  const handleLogout=(e)=>{
    e.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('username')

    setTimeout(()=>{
      navigate('/');
    },1000)
  }
  
  return (
    <div>
      Hello {logedinUser}
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Home
