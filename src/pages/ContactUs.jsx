import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contactUs.css';
import Header  from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_mgryxlr', // replace with your EmailJS service ID
      'template_zh8v7qt', // replace with your EmailJS template ID
      formData,
      'VCe3O7p7L90LmMwJi' // replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccessMessage('Your message was sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('FAILED...', error);
      setErrorMessage('Failed to send your message. Please try again later.');
    });
  };

  return (
    <>
    <Header/>
    <div className="contact-page-5h3x8"> {/* Wrap with this new div */}
      <div className="contact-us-container-5h3x8">
        <h1 className='cont-head'>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form-5h3x8">
          <div className="form-group-5h3x8">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-5h3x8">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-5h3x8">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="send-message-btn-5h3x8">Send Message</button>
        </form>
        {successMessage && <p className="success-message-5h3x8">{successMessage}</p>}
        {errorMessage && <p className="error-message-5h3x8">{errorMessage}</p>}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
