import React, { useState } from 'react';
import '../style/register.css'; 
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios'


function Register() {
  const [email,setEmail]=useState('');
const [username,setUsername]=useState('');
const [password,setPassword]=useState('')
const [errorMessage, setErrorMessage] = useState('');
const navigate=useNavigate();

const handleRegister= async(e)=>{
  e.preventDefault();
  try{
    const response= await axios.post('http://localhost:8000/register',{
      email,username,password
    });
    if(response.status==201){
      console.log("user register sucessfully", response.data)
      setErrorMessage(''); 
      navigate('/')
    }
    else {
      console.log("failed to register");
      return;
      
    }

    
  }
  catch(err){
    console.log("errror in Register frontend ",err.response.data);

    setErrorMessage(err.response.data?.error)  
  }


}
  return (
    <div className='register-page'>
    <div className="register-container">
      <div className="register-box">
        <h2 className="heading">SignIn</h2>  
        <form onSubmit={handleRegister}>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="input" />
          <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" />
          <button type="submit"  value="register" className="submit-button" >Register</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="link">
          <Link to="/" className="anchor">Already have account login here</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Register;
