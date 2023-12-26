import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const sign = {
    color: "#0096c7",
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    
   axios.post('https://e-shop-xp7d.onrender.com/signup', {username, password})
   .then((result => {
    console.log(result);
    navigate('/');
   }))
   .catch(err => console.log(err));
  }
  return (
    <form onSubmit={handleSubmit}>
    <main>
      <div className="login-content">
      <h1>WELCOME!</h1>
      </div> 
      <div className="login-box">
        <h1>Register</h1>
        <div className="user">
          <div>
            <i class="fa-regular fa-user icon"></i>
            <input 
            type="text" 
            placeholder="username" 
            name="user"
            value={username}
            onChange={(e) => setUsername(e.target.value) }
            />
          </div>
          <div>
            <i class="fa-solid fa-lock icon"></i>
            <input 
            type="password" 
            placeholder="password" 
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button>Sign Up</button>
        <div>
          <span>Already have an account?</span>{" "}
          <Link to="/login" style={sign}>
            Login!
          </Link>
        </div>
      </div>
    </main>
    </form>
  );
};

export default Signup;
