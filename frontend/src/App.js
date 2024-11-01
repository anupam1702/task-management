
import './App.css';
import {BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
 import Home from './pages/Home';
import Register from './pages/Register';
import { useState } from 'react';
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthenicated,setisAuthenicated]=useState(false);
  const PrivateRoute=({element})=>{
    return isAuthenicated ? element : <Navigate to={"/"}/>
  }
  return (

    
    <Router>

      <RefreshHandler setisAuthenicated={setisAuthenicated}/>

    <Routes>


        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<PrivateRoute element={<Home/>}/>}/>
        <Route path="/register" element={<Register/>}/>
      
      </Routes>
      </Router>
  );
}

export default App;
