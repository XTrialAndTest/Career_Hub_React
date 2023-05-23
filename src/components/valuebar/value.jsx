import React from "react"
import value1 from "../../assets/value1.jpg"
import value2 from "../../assets/value2.jpg"
import value3 from "../../assets/value3.jpg"
const Value= () => {
  return(
    
<div className= "mb-[4rem] mt-[6rem]">
  <h1 className="text-textColor text-center text-[25px] font-bold w-[400px] block">The value that holds us true and to account
  </h1>
    
  <div className= "grid gap-[10rem] grid-cols-3 items-center">
    <div className= "singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                                                       
      <div className= "flex items-center gap-3">
        <div className= "imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
           <img src={value1} alt="" className="w-[100%] rounded-[10px]"/>         
        </div>
         <span className="font-semibold text-textColor text-[18px]">
          Simplicity
         </span>
      </div>
         <p className="text-[16px] text-textColor opacity-[.7] py-[16px] font-semibold"> We believe in stripping away complexity and focusing on delivering streamlined solutions that are intuitive and user-friendly. </p>     
    </div> 

    <div className= "singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                                                       
      <div className= "flex items-center gap-3">
        <div className= "imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
           <img src={value2} alt="" className="w-[100%] rounded-[10px]"/>         
        </div>
         <span className="font-semibold text-textColor text-[18px]">
          Accountability
         </span>
      </div>
         <p className="text-[16px] text-textColor opacity-[.7] py-[16px] font-semibold">Accountability is at the core of our organizational culture. We take responsibility for our actions and strive to exceed expectations</p>     
    </div> 


    <div className= "singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                                                       
      <div className= "flex items-center gap-3">
        <div className= "imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
           <img src={value3} alt="" className="w-[100%] rounded-[10px]"/>         
        </div>
         <span className="font-semibold text-textColor text-[18px]">
          Service
         </span>
      </div>
         <p className="text-[16px] text-textColor opacity-[.7] py-[16px] font-semibold">We believe in upholding our values and staying true to our mission. Our dedication to accountability drives us to consistently deliver exceptional services</p>     
    </div> 
   
  </div>  
       <div className="card mt-[2rem] flex justify between bg-blueColor p-[5rem] rounded-[10px]">
          <div>
          <h1 className="text-blueColor text-[30px] font-bold" >Ready to switch a career?
          </h1>
          <h2 className="text-white text-[25px] font-bold">Let's get started </h2>
          <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border:blueColor"> 
          Get Started
          </button>
          </div>
       </div>
  
</div>
        
      
      )
}

export default Value