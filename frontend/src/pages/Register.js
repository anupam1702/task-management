import React from 'react';
import '../style/register.css'; // Import external CSS file

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="heading">SignIn</h2>  
        <form>
          <input type="email" placeholder="Email" className="input" />
          <input type="text" placeholder="Username" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <input type="submit" value="register" className="submit-button" />
        </form>
        <p className="link">
          <a href="#" className="anchor">Already have account login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
