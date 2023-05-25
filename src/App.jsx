import React from "react"
import NavBar from "./components/navbar/navbar"
import Search from "./components/searchbar/search"
import Jobs from "./components/jobbar/jobs"
import Value from "./components/valuebar/value"
import Footer from "./components/footer/footer"

const App = () => {
  return(
    <div className="m-auto bg-white">
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  
  )
}

export default App