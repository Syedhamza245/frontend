import React, { useState } from 'react';
import './faq.css'; // Make sure to import the CSS file
import Header  from '../components/Header';
import Footer from '../components/Footer';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { 
      question: 'Question 01: How can I start finding universities abroad that fit my budget?', 
      answer: 'To start finding universities abroad that match your budget, use our website’s budget filter. Set your budget range and explore universities within that range. You can also apply additional filters such as country, course, and university ranking to narrow down your choices.' 
    },
    { 
      question: 'Question 02: What types of filters can I use to narrow down my university search?', 
      answer: 'Our website offers a variety of filters including budget, country, duration, IELTS requirements, and scholarship availability. You can combine these filters to find universities that meet your specific criteria.' 
    },
    { 
      question: 'Question 03: How do I know if a university is accredited?', 
      answer: 'Accreditation information is available on the university’s profile page on our website. We provide details about the accreditation status of each university, ensuring that you choose an institution recognized for quality education.' 
    },
    { 
      question: 'Question 04: How frequently is the information on universities and programs updated?', 
      answer: 'We strive to keep our information as up-to-date as possible. University and program details are reviewed and updated regularly. However, it’s always a good idea to check the university’s official website or contact their admissions office for the latest information.' 
    },
    { 
      question: 'Question 05: Can I find universities that offer scholarships?', 
      answer: 'Yes, our platform allows you to filter universities based on scholarship availability. You can find universities that offer scholarships which can help reduce your overall study costs.' 
    },
    { 
      question: 'Question 06: How do I choose the right country for my studies?', 
      answer: 'You can choose the right country by applying filters such as budget, living expenses, and scholarship availability. Consider factors like language, culture, and job opportunities after graduation to make an informed decision.' 
    },
    { 
      question: 'Question 07: What should I do if I’m confused about selecting a university?', 
      answer: 'If you’re confused, our chatbot is here to help. You can ask any questions and get guidance on selecting the best university and country based on your criteria.' 
    },
    { 
      question: 'Question 08: Can I filter universities by specific courses?', 
      answer: 'Yes, you can filter universities by specific courses. Simply select your desired course, and our platform will show you universities that offer that course within your budget and other criteria.' 
    },
    { 
      question: 'Question 09: Is there a way to compare universities on your platform?', 
      answer: 'Yes, our platform allows you to compare universities based on various criteria such as tuition fees, scholarships, and course offerings. This helps you make an informed decision by seeing all your options side by side.' 
    },
    { 
      question: 'Question 10: How can I get assistance during my search process?', 
      answer: 'If you need assistance, our chatbot is available to answer your questions and guide you through the process of finding and selecting the right university for your needs.' 
    },
  ];
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <Header />
    <div className="faq-wrapper">
    <div className="faq-container">
      <h1>FAQ's</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            <div className="faq-answer">
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Faqs;
