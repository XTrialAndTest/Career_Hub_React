import React from "react"
import{BiTimeFive} from "react-icons/bi"
import { Link } from 'react-router-dom';
import logo1 from "../../assets/logo1.jpg"
import logo2 from "../../assets/logo2.jpg"
import logo3 from "../../assets/logo3.jpg"
import logo4 from "../../assets/logo4.jpg"
import logo5 from "../../assets/logo5.jpg"
import logo6 from "../../assets/logo6.jpg"
import logo7 from "../../assets/logo7.jpg"
import logo8 from "../../assets/logo8.jpg"
import logo9 from "../../assets/logo9.jpg"
import logo10 from "../../assets/logo10.jpg"
//mapping all jobs

//listing all jobs in array method
const Data = [
  {
    id:1,
    image: logo1,
    title: "Web\nDeveloper",
    time:"Now",
    location:"Nairobi",
    description:"web developer: Responsible for designing, coding, and maintaining websites Designing and coding websites, ensuring functionality, and collaborating with team members in Nairobi.",
    company:"Linus Tech Co."
  },
  {
    id: 2,
    image: logo2,
    title: "Marketing Specialist",
    time: "Full-time",
    location: "New York City",
    description: "Marketing Specialist: Developing and implementing strategic marketing campaigns, conducting market research, and analyzing campaign performance for a company based in New York City.",
    company: "Global Marketing Solutions Inc."
    },
  {
    id: 3,
    image: logo3,
    title: "Financial Analyst",
    time: "Contract",
    location: "London",
    description: "Financial Analyst: Conducting financial forecasting, analyzing investment opportunities, and preparing financial reports for a company based in London.",
    company: "Capital Investments Ltd."
  },
  {
    id: 4,
    image: logo4,
    title: "Graphic Designer",
    time: "Freelance",
    location: "Los Angeles",
    description: "Graphic Designer: Creating visual concepts, developing design layouts, and collaborating with clients on various creative projects in Los Angeles.",
    company: "Artistry Design Studios"
  },
  {
    id: 5,
    image: logo5,
    title: "Software Engineer",
    time: "Remote",
    location: "San Francisco",
    description: "Software Engineer: Developing and maintaining software applications, writing clean and efficient code, and working remotely for a tech company based in San Francisco.",
    company: "TechSolutions Inc."
  },
  {
    id: 6,
    image: logo6,
    title: "Data Scientist",
    time: "Contract",
    location: "Berlin",
    description: "Data Scientist: Collecting and analyzing large datasets, developing machine learning models, and working on a contract basis for a tech startup in Berlin.",
    company: "DataTech Solutions"
  },
  {
    id: 7,
    image: logo7,
    title: "Operations Manager",
    time: "Full-time",
    location: "Toronto",
    description: "Operations Manager: Overseeing daily operations, optimizing processes, and managing a team for a company based in Toronto.",
    company: "Optimum Operations Ltd."
  }, 
  {
    id: 8,
    image: logo8,
    title: "Sales Manager",
    time: "Contract",
    location: "Paris",
    description: "Sales Manager: Prospecting and generating leads, presenting and promoting products or services, and working on a commission basis for a company in Paris.",
    company: "Global Sales Solutions"
    
  }, 
  {
    id: 9,
    image: logo9,
    title: "Content Writer",
    time: "Part-time",
    location: "Remote",
    description: "Content Writer: Creating engaging and informative content, conducting research, and writing for various platforms on a part-time basis, with the flexibility to work remotely.",
    company: "ContentCrafters"
  },
  {
    id: 10,
    image: logo10,
    title: "Project Manager",
    time: "Contract",
    location: "Singapore",
    description: "Project Manager: Planning and overseeing project execution, coordinating team members, and ensuring timely project delivery for a company in Singapore.",
    company: "ProActive Projects Ltd."
  }
]

const Jobs = () => {
    return(
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-stretch py-10">
      {
        Data.map(({id, image, title, time, location, description, company}) => {
          return (
            <div key={id} className="group singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg flex flex-col justify-between">
              <div className="content">
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive/>{time}
                  </span>
                </span>
                <h2 className="text-[#ccc]">{location}</h2>
                <p className="text-[13px] text-[#000] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {description}
                </p>
              </div>
              <div className="company flex items-center gap-5">
                <img src={image} alt="Company Logo" className="w-[20%] rounded-[10px]" />
                <span className="text-[14px] py[16px] group-hover:text-white">{company}</span>
              </div>
              
            <Link to="/jobs">
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor">Apply Now</button></Link>
            </div>
          )
        })
      }
    </div>
    
    
    )
 
}
  



export default Jobs