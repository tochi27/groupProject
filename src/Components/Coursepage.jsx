import React, { useState } from "react";
import { Link } from "react-router-dom";
import taiye from "../Components/images/teewhy.jpg"; // Import your course image
import Taiyeheader from "./Taiyeheader";
const CoursePage = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  const tabs = ["Overview", "Language", "Coding"];
  const courses = [
    {
      title: "JavaScript",
      description: "This is an introduction to JavaScript for beginners.",
      duration: "1 hour 30 minutes",
      learning: "Basics of JavaScript programming",
      url: "/javascript"
    },
    {
      title: "React",
      description: "An introductory course on the React framework.",
      duration: "3 hours",
      learning: "Building user interfaces with React",
      url: "/Ractcomponent"
    },
    {
      title: "Blockchain and Cryptocurrency",
      description:
        "Courses on the technology behind cryptocurrencies and blockchain development.",
      duration: "3 hours",
      learning: "Basics of cryptocurrencies and blockchain development",
      url:"/Blockchaincomponent"
    },
    // Add more courses as needed
  ];
  const languages = [
    { title: "Yoruba", url: "/Yoruba"},
    { title: "Hausa", url: "/Hausa" },
    { title: "Igbo", url:"/Igbo" },
  ];
  const codingCourses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn the basics of web development.",
      courseImage: taiye,
      url:"/Webdevelopment"
    },
    {
      title: "Introduction to Python",
      description: "A beginner-friendly guide to Python programming.",
      courseImage: taiye,
      url:"/Pythoncomponent"
    },
    {
      title: "Express",
      description: "A beginner-friendly guide to express programming.",
      courseImage: taiye,
      url:"/Expresscompo"
    },
    {
      title: "Mongo",
      description: "A beginner-friendly guide to Mongo programming.",
      courseImage: taiye,
      url:"/MongoComponent"
    },
    {
      title: "Tailwind",
      description: "A beginner-friendly guide to Tailwind programming.",
      courseImage: taiye,
      url:"/Tailwindcomponent"
    },
   
  ];
  let displayData = [];
  if (activeTab === "Overview") {
    displayData = [...courses, ...languages, ...codingCourses];
    console.log(displayData);
  } else if (activeTab === "Language") {
    displayData = languages.map((language) => ({ language }));
  } else if (activeTab === "Coding") {
    displayData = codingCourses;
  }
  return (
    <div>
      <Taiyeheader/>
    <div className="flex flex-wrap ">
      
      <div className="w-1/4 bg-gray-800  text-white p-4 ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab cursor-pointer p-2 rounded-md  ${
              activeTab === tab ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="flex-1 pl-[4rem] gap-[2rem] flex flex-wrap p-4 space-y-4">
        {/* Content based on the activeTab */}
        {displayData.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-md  p-4 w-[20rem] text-[#08538C] text-center py-px-[6rem] shadow-md transition-transform transform hover:-translate-y-2"
          >
            {activeTab === "Overview" && (
              <Link to={data.url}>
                <div className="w-[15rem]">
                  {data.title && (
                   
                      <h3 className="text-lg font-medium ">{data.title}</h3>
                    
                  )}
                  {data.description && <p>{data.description}</p>}
                  {data.duration && (
                    <p className="text-gray-600">{data.duration}</p>
                  )}
                  {data.learning && (
                    <p className="text-gray-600">{data.learning}</p>
                  )}
                  {data.courseImage && (
                    <img
                      src={data.courseImage}
                      alt={data.title}
                      className="mt-2 rounded-md "
                    />
                  )}
                </div>
              </Link>
            )}
            {activeTab === "Language" && (
              <div>
                {data.title && (
                  <h3 className="text-lg font-medium">{data.title}</h3>
                )}
                {data.language && <p>{data.language.title}</p>}
              </div>
            )}
            {activeTab === "Coding" && (
             <Link to={data.url}>
                <div>
                  <h3 className="text-lg font-medium">{data.title}</h3>
                  <p>{data.description}</p>
                  <img
                    src={data.courseImage}
                    alt={data.title}
                    className="mt-2 rounded-md"
                  />
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default CoursePage;