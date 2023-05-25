import React from 'react';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
const AboutPage = () => {
  return (
  <div>
    <NavBar></NavBar>
    <div className="text-center mt-20">
    <h2 className="text-3xl font-bold mb-4">About Our Job Board</h2>
    <p className="mb-4">Welcome to our job board website!</p>
    <p className="mb-4">We are dedicated to connecting job seekers with the perfect job opportunities and assisting employers in finding top talent.</p>
    <p className="mb-4">Our mission is to make the job search process efficient, convenient, and effective for both job seekers and employers.</p>
    <p className="mb-4">On our platform, job seekers can browse through a wide range of job listings, create profiles, and submit applications.</p>
    <p className="mb-4">Employers can post job openings, search for qualified candidates, and manage their recruitment process seamlessly.</p>
    <p className="mb-4">We strive to provide a user-friendly experience with intuitive search and filtering options, ensuring that job seekers can easily find relevant positions and employers can efficiently identify the best candidates.</p>
    <p className="mb-4">Thank you for choosing our job board for your job search or recruitment needs. We are excited to help you in your career journey!</p>
  </div>
  <Footer className="mt-20"></Footer>
  </div>
  )
};

export default AboutPage;