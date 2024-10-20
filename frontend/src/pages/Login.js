import React, { useState } from 'react';
import '../style/login.css'; 
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();


  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:8000/login",{
        username,password
      })
      if(res.status==201){
        console.log("user login sucessfully", res.data)
      setErrorMessage(''); 
      navigate('/')
     
      }
      else {
        console.log("failed to login");
        setErrorMessage('Incorrect credentials');
        return;
        
      }

    }catch(err){
      console.log("errror in login frontend ",err.res?.data);

      setErrorMessage(err.res?.data?.error || 'Incorrect credentials'); 

    }

  }
  return (
    <div className='login-page'>
    <div className="login-container">
      <div className="login-box">
        <h2 className="heading">Login</h2> 
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Email" className="input" /> 
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="input" /> 
          {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
          <input type="submit" value="Login" className="submit-button" /> 
        </form>
        <p className="link">
          <Link to='/register' className="anchor">Create a account</Link> 
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;
