import React  from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const ContactPage = () => {
  return (
    <div>
    <div className="flex items-center justify-center min-h-screen">
    <form className="bg-white rounded-md shadow-md p-8">
      <NavBar></NavBar>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">If you have any questions or inquiries, please...</p>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input-field"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="input-field"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          className="input-field"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>
  
  </div>
  <Footer></Footer>
  </div>
 
  
  
  )
};

export default ContactPage;
