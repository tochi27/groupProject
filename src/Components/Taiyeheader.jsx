import React, { Component } from "react";
import sail from "./images/sail_image-removebg-preview.png";
import { Link } from "react-router-dom";



export default class Taiyeheader extends Component {
  constructor(props) {
    super();
    
  }


  render() {
    return (
      <header className="bg-[white] w-[100%] h-[10%]   md:h-[10%] shadow-xl  lg:h-[12%] ">
        <nav className="container mx-auto px-4 py-2 h-[5rem]  flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-xl font-bold mb-4 md:mb-0 flex w-[10rem]">
            <img src={sail} alt="" className=" h-[4rem] pl-[3rem] rounded-[5rem]" />
            <h1 className="text-[#08538c] mt-[1.5rem] ml-[0.5rem]">LMS</h1>
          </div>
          <div className="space-y-2 md:space-y-0 pr-[4rem] md:space-x-4">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li className="text-[#333983]">
                
                <button>
                <Link to="/">Home</Link>
                </button>
              </li>
              <li className="text-[#333983]">
                <Link to="/coursespage"><button>Courses</button></Link>
              </li>
              <li className="text-[#333983]">
              <Link to="/Contactus"><button>Contact</button></Link>
              </li>
            </ul>
          </div>
          <div className="text-white pr-[4rem]">
            <button
              className="bg-[white] px-2 py-1 rounded mr-2 cursor-pointer text-[#0769b2]">
               <Link to="/LogIn">Login</Link>
            </button> 
            <button className="bg-[white]  px-2 py-1 rounded cursor-pointer text-[#0769b2]">
               <Link to="/SignUpForm">Register</Link>
            </button>

            
          </div>
        </nav>
      </header>
    );
  }
}