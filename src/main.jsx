import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import JobsPage from './pages/jobspage';
import ContactPage from './pages/contactpage';
import AboutPage from './pages/aboutpage';
import CompaniesPage from './pages/companiespage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "jobs",
    element: <JobsPage/>,
  },
  {
    path: "companies",
    element: <CompaniesPage/>,
  },
  {
    path: "about",
    element: <AboutPage/>,
  },
  {
    path: "contact",
    element: <ContactPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
