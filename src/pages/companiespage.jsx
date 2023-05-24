import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import { BiTimeFive } from 'react-icons/bi';
import Footer from '../components/footer/footer';
import logo10 from '../assets/logo10.jpg';


  
  const Data = [
    {
      id: 10,
      image: logo10,
      title: 'Project Manager',
      time: 'Contract',
      location: 'Singapore',
      description:
        'Project Manager: Planning and overseeing project execution, coordinating team members, and ensuring timely project delivery for a company in Singapore.',
      company: 'ProActive Projects Ltd.',
    },
    // Add more data entries here as needed
  ];
const CompaniesPage = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center mt-20 flex-wrap items-stretch py-10">
        <NavBar />
        {Data.map(({ id, image, title, time, location, description, company }) => (
          <div
            key={id}
            className="group singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg flex flex-col justify-between"
          >
            <div className="content">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h2 className="text-[#ccc]">{location}</h2>
              <p className="text-[13px] text-[#000] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {description}
              </p>
            </div>
            <div className="company flex items-center gap-5">
              <img src={image} alt="Company Logo" className="w-[20%] rounded-[10px]" />
              <span className="text-[14px] py-[16px] group-hover:text-white">{company}</span>
            </div>
            <Link to="/jobs">
            <button
              className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor"
              
            >
              Apply Now
            </button>
            </Link>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CompaniesPage;
