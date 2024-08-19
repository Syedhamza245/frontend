import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import banner2 from "../assets/banner2.png";
import Australia from "../assets/AustraliaCity.png";
import Canada from "../assets/CanadaCity.png";
import Germany from "../assets/GermanyCity.png";
import Italy from "../assets/ItalyCity.png";
import Advertisement from "../assets/Advertisement1.png"
import Advertisement1 from "../assets/1.png"
import Advertisement2 from "../assets/2.png"
import Advertisement3 from "../assets/3.png"


import "./destination.css";

export default function Destination() {
  return (
    <div>
      <Header />
      <div className="first-destination">
        <img className="banner-d" src={banner2} alt="" />

        <div className="second-destination">
          <div className="left-section">
            <h1>Discover Best Study Abroad Destination and Countries.</h1>

            <p>
              You propably have a good idea about the qualities you want in your
              study abroad destination. Now it’s just a matter of finding the
              right one! To help you find your perfect destination, just browse
              by the countries here and find out more about what it’s like to
              study and live there!
            </p>

            <div className="Destination-cards">
              <div className="City-card">
                <div>
                  <img src={Australia} alt="" width="300px" />
                </div>
                <div className="inner-section">
                  <h2>Study in Australia</h2>
                  <span>
                    Australia is a popular destination for international student
                    from around the world. Home to leading universities, it
                    offers a related, affordable study experience and strong
                    career opportunities in some of the world’s most livable
                    cities, including Sydney and Melbourne.
                  </span>
                </div>
              </div>
            </div>
            <div className="Destination-cards">
              <div className="City-card">
                <div>
                  <img src={Germany} alt="" width="300px" />
                </div>
                <div className="inner-section">
                  <h2>Study in USA</h2>
                  <span>
                    Australia is a popular destination for international student
                    from around the world. Home to leading universities, it
                    offers a related, affordable study experience and strong
                    career opportunities in some of the world’s most livable
                    cities, including Sydney and Melbourne.
                  </span>
                </div>
              </div>
            </div>
            <div className="Destination-cards">
              <div className="City-card">
                <div>
                  <img src={Italy} alt="" width="300px" />
                </div>
                <div className="inner-section">
                  <h2>Study in Canada</h2>
                  <span>
                    Australia is a popular destination for international student
                    from around the world. Home to leading universities, it
                    offers a related, affordable study experience and strong
                    career opportunities in some of the world’s most livable
                    cities, including Sydney and Melbourne.
                  </span>
                </div>
              </div>
            </div>
            <div className="Destination-cards">
              <div className="City-card">
                <div>
                  <img src={Canada} alt="" width="300px" />
                </div>
                <div className="inner-section">
                  <h2>Study in Germany</h2>
                  <span>
                    Australia is a popular destination for international student
                    from around the world. Home to leading universities, it
                    offers a related, affordable study experience and strong
                    career opportunities in some of the world’s most livable
                    cities, including Sydney and Melbourne.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="first-sectionForm">
              <span>
                Interested in studing <br /> abroad with Edugate?
              </span>
            </div>
            <div className="second-sectionForm">
              <form id="application-form">
                <div class="form-group">
                  <label for="first-name">First Name *</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first_name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="last-name">Last Name *</label>
                  <input type="text" id="last-name" name="last_name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                  <label for="mobile-number">Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobile_number"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="study-designation">
                    Your Preferred Study Designation *
                  </label>
                  <select
                    id="study-designation"
                    name="study_designation"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="option 1">Germany</option>
                    <option value="option 2">Canada</option>
                    <option value="option 3">Australia</option>
                    <option value="option 4">Italy</option>
                  </select>
                </div>
                <div class="form-group checkbox">
                  <input type="checkbox" id="terms" name="terms" required />
                  <label for="terms">
                    I agree to Edugate Terms and Privacy Policy
                  </label>
                </div>
                <button className="primary-button" type="submit">Apply Now</button>
              </form>
            </div>

            <div className="Ads">
              <img src={Advertisement} alt="" width="350px" />
              <img src={Advertisement1} alt="" width="350px" />
              <img src={Advertisement2} alt="" width="350px" />
              <img src={Advertisement3} alt="" width="350px" />

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
