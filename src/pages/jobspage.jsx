import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    location: "",
    industry: "",
    jobType: ""
  });

  useEffect(() => {
    // Fetch jobs from the server based on search criteria
    fetchJobs();
  }, [searchCriteria]);

  const fetchJobs = () => {
    // Send a request to the server with the search criteria and retrieve matching jobs
    // Update the 'jobs' state with the fetched data
    // This logic will depend on your backend implementation
    const fetchedJobs = []; // Replace with actual data fetched from the server
    setJobs(fetchedJobs);
  };

  const handleSearch = () => {
    // Trigger job search by calling 'fetchJobs' based on the current search criteria
    fetchJobs();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleCoverLetterChange = (e) => {
    setCoverLetter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic, such as sending data to the server
    // You can access the form data here: name, email, resume, coverLetter
    // Example: You can use FormData to send the data as a multipart/form-data request
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('resume', resume);
    formData.append('coverLetter', coverLetter);
    // Send the formData using an API call or any other method
  };

  return (
  <div className="flex flex-col min-h-screen">
  <div className="bg-gray-100 min-h-screen ">
      <NavBar></NavBar>
      <div className="mt-16  mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
        <div className="bg-white p-4 rounded-md shadow-md mb-4 gap-4 flex flex-wrap">
        <h2 className="text-lg font-semibold mb-2 w-full">Search Criteria</h2>
        <input
          type="text"
          value={searchCriteria.location}
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              location: e.target.value
            })
          }
          placeholder="Location..."
          className="input-field focus:outline-none w-full md:w-auto"
        />
        <input
          type="text"
          value={searchCriteria.industry}
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              industry: e.target.value
            })
          }
          placeholder="Industry..."
          className="input-field ml-4 focus:outline-none w-full md:w-auto"
        />
        <input
          type="text"
          value={searchCriteria.jobType}
          onChange={(e) =>
            setSearchCriteria({
              ...searchCriteria,
              jobType: e.target.value
            })
          }
          placeholder="Job Type..."
          className="input-field ml-4 focus:outline-none w-full md:w-auto"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 md:ml-auto"
        >
          Search
        </button>
      </div>
      

      <div>
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="bg-white p-4 rounded-md shadow-md mb-4">
              <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
              <p>{job.description}</p>
              <p>{job.requirements}</p>
              <p>{job.applicationInstructions}</p>
              {/* Additional job details */}
            </div>
          ))
        )}
      </div>

      {/* Other components for creating a profile, uploading resume, and applying for jobs */}
    </div>
    <div className="float-left bg-white p-4 rounded-md shadow-md mb-4 ml-4 m">
  <h2 className="text-lg font-semibold mb-2">Apply for Job</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="name" className="block font-medium">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        className="input-field"
      />
    </div>
    <div>
      <label htmlFor="email" className="block font-medium">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        className="input-field"
      />
    </div>
    <div>
      <label htmlFor="resume" className="block font-medium">
        Resume:
      </label>
      <input
        type="file"
        id="resume"
        name="resume"
        onChange={handleResumeChange}
        className="input-field"
      />
    </div>
    <div>
      <label htmlFor="coverLetter" className="block font-medium">
        Cover Letter:
      </label>
      <textarea
        id="coverLetter"
        name="coverLetter"
        rows="4"
        cols="50"
        value={coverLetter}
        onChange={handleCoverLetterChange}
        className="input-field"
      ></textarea>
    </div>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      Apply
    </button>
  </form>
</div>



  </div>
  <Footer></Footer>
  </div>

  );
};

export default JobsPage;
