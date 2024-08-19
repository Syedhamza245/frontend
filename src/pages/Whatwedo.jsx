import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./whatwedo.css";
import CEO from "../assets/CEO.png";
import Director from "../assets/Director.png";
import Architect from "../assets/Architect.png";

export default function Whatwedo() {
  return (
    <div>
      <Header />

      <div className="whatwedo">
        <div className="first-whatwedo">
          <h1>Who we are and why we do what we do.</h1>
          <p>
            From its very conception, Edugate was founded to solve (our own)
            student problems. It was, and still is,fuelled by a strong belief in
            the value of international experiences - both for the individual
            student and for the society.
          </p>
          <button className="secondary-button">
            Our Mission & Core values
          </button>
        </div>
        <div className="second-whatwedo">
          <p>
            At Studyportals, we have always been an idealistic bunch of people.
            From the very start until today, our team continues to unify under a
            shared belief that strengthening international education for the
            entire world can not only be easier, but it can also be more
            inspiring.
          </p>
          <p>
            {" "}
            We remain consistently optimistic about the value of international
            education a sense of confidence that all of our superheroes carry
            with them in everything we do. It’s the best way to keep our eyes
            set on long-term goals, and ensures that we continue to create the
            world’s largest education search platform.
          </p>
        </div>

        <div className="third-whatwedo">
          <h1>Meet the Founders</h1>

          <div className="Team">
            <div className="Team-member">
              <img src={CEO} alt="" width="170px" />
              <h4>Hamza Munawar</h4>
              <p>CEO</p>
            </div>
            <div className="Team-member">
              <img src={Director} alt="" width="170px" />
              <h4>Adnan Afroz</h4>
              <p>Director</p>
            </div>
            <div className="Team-member">
              <img src={Architect} alt="" width="170px" />
              <h4>Mudabbir Alim</h4>
              <p>Chief Architect</p>
            </div>
          </div>

          <button className="primary-button">Meet the rest of our Team</button>
        </div>

        <div className="four-whatwedo">
            <h1>Our Mission and Values</h1>
            <p>We want the world to choose education: we want everyone to embrace education, by any means, as the path to strong leadership, creative thinking, and a better society.</p>
            <p>We want the world to choose education: want education choice to be transparent, enabling students and people worldwide to choose for themselves the education that fits their needs best.</p>

            <p>From the design of our office to the layout of our platforms, to the decorations at our desks, Edugate is a company built upon the mission of global education transparency, choice, and access across borders. We grow as our users and clients grow, making education the thing that energises our whole company personality. We share insights, innovate our products, develop ourselves, and – most importantly – contribute to an educated global society that is more tolerant and open.</p>
            <p>We actively share insights, continuously innovate our products, invest in personal development, and, above all, contribute to the flourishing of a globally educated society that thrives on tolerance and openness.</p>
            <p>Stepping into the realm of our services, we proudly present a groundbreaking solution for accessing academic data from all universities in a remarkably efficient manner. Navigate like a professional with the aid of our sophisticated filters, ensuring that you unlock a wealth of information with unparalleled ease.</p>
        
        </div>
      </div>
      <Footer />
    </div>
  );
}
