import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
    const sign = {
        color: "#0096c7"
    }

    const handleSubmit =  (e) => {
      e.preventDefault();
      
     axios.post('http://127.0.0.1:4000/login', {username, password})
     .then((result => {
      console.log(result);
      if(result.data === 'success') {
        navigate('/');
      } else {
        navigate('/signup');
      }

     }))
     .catch(err => console.log(err));
    }
  return (
    <form onSubmit={handleSubmit}>
    <main>
      <div className="login-content">
        <p>Nice to see you again</p>
        <h1>WELCOME BACK</h1>
      </div> 
      <div className="login-box">
        <h1>Login</h1>  
        <div className="user"> 
        <div>
        <i class="fa-regular fa-user icon"></i>
        <input 
        type="text" 
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
        </div>
        <div>
        <i class="fa-solid fa-lock icon"></i>
        <input 
        type="password" 
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        </div>
        </div>
        <p>Forgot Password ?</p>
        <button>Login</button>
        <div>
        <span>Creat an account here</span> <Link to='/signup' style={sign}>Register!</Link>
        </div>
      </div>
    </main>
    </form>
  );
};

export default Login;
