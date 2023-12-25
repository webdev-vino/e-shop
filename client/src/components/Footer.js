import axios from "axios";
import React, { useState } from "react";


const Footer = () => {
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:4000/email', {email})
    .then(result =>{ console.log(result)
      setEmail('');
    })
  }
  return (
    <div className="footer">
    <div className="container">
      <div>
        <h3>CATEGORIES</h3>
        <p>Women</p>
        <p>Men</p>
        <p>Shoes</p>
        <p>Watches</p>
      </div>
      <div>
        <h3>HELP</h3>
        <p>Track Order</p>
        <p>Return</p>
        <p>Shipping</p>
        <p>FAQS</p>
      </div>
      <div>
        <h3>GET IN TOUCH</h3>
        <p>
          Any questions? Let us know in store at 8th floor, 379 Hudson St,
          NewYork, NY 10018 or call us on (+1) 96 716 6879
        </p>
        <p>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </p>
      </div>
      <div className="input">
        <h3>NEWS LETTER</h3>
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="email" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <button>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Footer;
