import React from "react";
import "./footer.css";
import Twitter from "../assets/TwitterX.png";
import Facebook from "../assets/Vector.png";
import Linkedin from "../assets/LinkedIn.png";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-items">
          <div className="SITEMAP">
            <h3>SITEMAP</h3>
            <p>About us</p>
            <p>Bachelor Programs</p>
            <p>Master Programs</p>
            <p>Contact Us</p>
          </div>
          <div className="TopUniversities">
            <h3>Top Universities</h3>
            <p>Monash University</p>
            <p>University of Warwick</p>
            <p>THE University Rankings</p>
            <p>University of Calgary</p>
          </div>
          <div className="Services">
            <h3>Services</h3>
            <p>University Administration.</p>
            <p>Register your university.</p>
            <p>Follow us on</p>

            <div className="social-icons">
              <img src={Facebook} alt="facebook"/>
              <img src={Linkedin} alt="lnkdn"/>
              <img src={Twitter} alt="twt"/>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
          <p>Copyright © 2023 Edugate</p>
          <p>Disclaimer | Privacy Policy | Terms Of Use | Investors</p>
        </div>
    </div>
  );
}
