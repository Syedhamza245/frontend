import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "./filter.css"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

const Filter = () => {
  const [programs, setPrograms] = useState([]);
  const [country, setCountry] = useState("AUSTRALIA"); // Default country
  const [duration, setDuration] = useState("");
  const [scholarship, setScholarship] = useState("");
  const [ielts, setIELTS] = useState("");
  const [tuition, setTuition] = useState("");
  const [prog, setProg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api`, {
          params: {
            country: country,
            duration: duration,
            scholarship: scholarship,
            ielts: ielts,
            tuition: tuition,
            prog: prog
          },
        });

        if (Array.isArray(response.data)) {
          setPrograms(response.data);
        } else {
          setPrograms([]); // Fallback if data is not an array
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setPrograms([]); // Fallback on error
      }
    };

    fetchData();
  }, [country, duration, scholarship, ielts, tuition, prog]);

  return (
    <>
      <Header />
      <div className="filter-container">
        <div className="filters">
          <label>Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="AUSTRALIA">Australia</option>
            <option value="CANADA">Canada</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>

          <label>Duration:</label>
          <select value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option value="">All</option>
            <option value="5 years">5 years</option>
            <option value="4 years">4 years</option>
            <option value="3 years">3 years</option>
          </select>

          <label>Scholarship:</label>
          <select value={scholarship} onChange={(e) => setScholarship(e.target.value)}>
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label>IELTS:</label>
          <select value={ielts} onChange={(e) => setIELTS(e.target.value)}>
            <option value="">All</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label>Program:</label>
          <select value={prog} onChange={(e) => setProg(e.target.value)}>
            <option value="">All</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
          </select>

          <label>Budget:</label>
          <select value={tuition} onChange={(e) => setTuition(e.target.value)}>
            <option value="">All</option>
            <option value="2000000">2000000</option>
            <option value="8000000">8000000</option>
            <option value="9000000">9000000</option>
          </select>
        </div>

        <div className="cards">
          {programs.length > 0 ? (
            programs.map((program, index) => (
              <a href={program.Url} key={index}>
                <div className="card">
                  <h2>{program.Programs}</h2>
                  <p><strong>Description:</strong> {program.Description}</p>
                  <p><strong>Duration:</strong> {program.Duration}</p>
                  <p><strong>Tuition:</strong> {program.Tuition}</p>
                  <p><strong>University Name:</strong> {program.UniversityName}</p>
                  <p><strong>Location:</strong> {program.OrganisationLocation}</p>
                  <p><strong>Program Type:</strong> {program.Prog_select}</p>
                  <p><strong>Scholarship:</strong> {program.Scholarship}</p>
                  <p><strong>IELTS Required:</strong> {program.IELTS}</p>
                  <p><strong>CGPA:</strong> {program.CGPA}</p>
                </div>
              </a>
            ))
          ) : (
            <p>No programs found.</p>
          )}
        </div>   
      </div>
      <Footer/>
    </>
  );
};

export default Filter;
