import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform register logic with email and password
    console.log('Register form submitted');
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    // Perform additional actions after successful Google sign-in
  };

  const handleGoogleLoginFailure = (error) => {
    console.log('Google login failure:', error);
    // Handle Google sign-in failure
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 bg-gray-100 p-6 rounded-lg shadow-md">
        <NavBar></NavBar>
        <h2 className="text-2xl mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <div className="mt-6">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign up with Google"
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
