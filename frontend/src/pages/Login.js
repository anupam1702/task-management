import React from 'react';
import '../style/login.css'; 

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="heading">Login</h2> {/* Login Header */}
        <form>
          <input type="email" placeholder="Email" className="input" /> {/* Email Input */}
          <input type="password" placeholder="Password" className="input" /> {/* Password Input */}
          <input type="submit" value="Login" className="submit-button" /> {/* Login Button */}
        </form>
        <p className="link">
          <a href="#" className="anchor">Create a account</a> {/* Forgot Password Link */}
        </p>
      </div>
    </div>
  );
}

export default Login;
