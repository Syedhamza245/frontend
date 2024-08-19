import React from "react";
import "./home.css";
import "../App.css";
import banner from "../assets/banner.png";
import BS from "../assets/BS.png";
import MS from "../assets/MS.png";
import Students from "../assets/students.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import degree from "../assets/degree.png";
import university from "../assets/university.png";
import courses from "../assets/courses.png";
import Budget from "../assets/Set your Budget.png";
import ILETScard from "../assets/Without Ilets.png";
import CGPA from "../assets/CGPA Card.png";
import Canada from "../assets/Canada.png";
import Australia from "../assets/Australia.png";
import Germany from "../assets/Germany.png";
import Italy from "../assets/Italy.png";
import Adsbanner from "../assets/ADS BANNER.png";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    } else {
      fetch('http://localhost:5000/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch(err => {
        console.error('Failed to fetch user:', err);
        navigate('/signin');
      });
    }
  }, [navigate]);


  return (
    <div className="landing-page">
      <Header />
      <div className="first">
      <div className="banner-container">
        <div className="banner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
        </div>
        <div className="first-content">
          <h1>Choose Your Best Abroad Destination.</h1>
          <p>
            If you aspire to study abroad, we have the means to assist you in
            devising the best international educational plan. We offer a diverse
            selection of universities tailored to your budget, academic history,
            and scholarship opportunities. Whether you dream of pursuing your
            education overseas, Edugate is your gateway to realizing that dream.
            From comprehensive course information to valuable career guidance,
            our commitment is to support you in shaping your international
            future.
          </p>
          <button className="primary-button">Explore Programs</button>
        </div>
        <div className="card-section">
          <div className="first-cards">
            <div className="card1">
              <img src={degree} alt="" />
              <h1>50+</h1>
              <p>Universities</p>
            </div>
            <div className="card1">
              <img src={university} alt="" />
              <h1>20+</h1>
              <p>Degree Programs</p>
            </div>
            <div className="card1">
              <img src={courses} alt="" />
              <h1>100+</h1>
              <p>Courses</p>
            </div>
          </div>
        </div>
      </div>

      <div className="second">
        <h1>Why EduGate Best for Choosing Abroad University.</h1>

        <div className="Filter_Card">
          <img src={Budget} alt="" />
          <img src={ILETScard} alt="" />
          <img src={CGPA} alt="" />
        </div>

        <div className="flags">
          <img src={Canada} alt="" />
          <img src={Italy} alt="" />
          <img src={Australia} alt="" />
          <img src={Germany} alt="" />
        </div>
      </div>

      <div className="Third">
        <h1>What Courses are you Looking For?</h1>

        <div className="programs-card">
          <div className="bachelor-program">
            <img src={BS} alt="" />
            <span>Bachelor Programs</span>
            <p>
              We offer an exceptional Budget search filter designed to assist
              you in selecting the perfect university based on both your
              financial considerations and individual preferences, ensuring an
              optimal match for your budget and suitability.
            </p>
            <button className="primary-button">Search Bachelors</button>
          </div>

          <div className="master-program">
            <img src={MS} alt="" />
            <span>Master Programs</span>
            <p>
              We offer an exceptional Budget search filter designed to assist
              you in selecting the perfect university based on both your
              financial considerations and individual preferences, ensuring an
              optimal match for your budget and suitability.
            </p>
            <button className="primary-button">Search Bachelors</button>
          </div>
        </div>
        <div className="AdsBanner">
          <img src={Adsbanner} alt="" />
        </div>

        <div>
          <h1>Students Think About Edugate.</h1>
          <div className="Last-section">
          <div className="Last-section-Textpart">
            <p>
              I started by searching on Google for courses that suites my
              interest and I was redirected to different websites, one of which
              is Edugate.com which turned out to be the most useful. I chose
              Vytautas Magnus University because it was the most affordable for
              me and the course completely suited my needs. Studyportals helped
              by giving me a wide range of detailed options of schools and
              courses to choose from. I did not have an idea of either the
              course or the university I wanted to attend. At the initial stage,
              before the application, I received all the necessary information
              about the course and school, through a direct website link to the
              course.
            </p>
            <button className="primary-button">Read More</button>
          </div>
          <img src={Students} alt="" />
          </div>
        </div>   
      </div>
      <Footer/>
    </div>
  );
}
