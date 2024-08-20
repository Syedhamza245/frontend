import React from "react";
import "./header.css";
import logo from "../assets/portal_logo.png";
import explore1 from "../assets/explore1.png";
// import apply1 from "../assets/Apply1.png";
import wishlist from "../assets/Heart.png";
import signin from "../assets/signup.png";
import faq from "../assets/faq-ic.png"

export default function Header() {
  return (
    <div className="outer">
      
      <div className="header">
        <a href="https://frontend-f7ks.onrender.com/home">
        <img src={logo} alt="logo" className="logo"  width='130px' height='42px'/></a>
        <ul className="nav">
          <a href="https://frontend-f7ks.onrender.com/whatwedo">
            {" "}
            <li>What we do? </li>{" "}
          </a>
          <a href="https://frontend-f7ks.onrender.com/destination">
            {" "}
            <li>Destination</li>{" "}
          </a>
          
          <a href="https://frontend-f7ks.onrender.com/filter">
            {" "}
            <li>
              <img className="icon" src={explore1} alt="ada" />
              Explore
            </li>
          </a>
          
          <a href="https://frontend-f7ks.onrender.com/contactus">
            {" "}
            <li>
              <img className="icon" src={wishlist} alt="dvgds" />
              Contact Us
            </li>
          </a>
          <a href="https://frontend-f7ks.onrender.com/FAQ's">
            {" "}
            <li>
              <img className="icon" src={faq} alt="safgasrg" />
              FAQ'S
            </li>
          </a>
          <a href="https://frontend-f7ks.onrender.com/Logout">
            {" "}
            <li className="s_in">
              <img className="icon" src={signin} alt="sagfr" />
              Sign Out
            </li>{" "}
          </a>
          
        </ul>
      </div>
      {/* <div >
        <div className="content">
          <h1>Choose Your Best Abroad Destination</h1>
         
        </div>
      </div>
    </div> */}
    </div>
  );
}
