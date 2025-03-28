import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    We Make Life Better!
    </h1>
    <p className="mt-10 tect-lg text-center max-w-4xl">
    Making Hiring Better Both For The Recruiter & Applicant
    </p>
    <div className="flex justify-center my-10">
    <a href="#" className="bg-gradient-to-r from-blue-400 to-green-500 py-3 px-4 mx-3 rounded-md">
    Requect A Demo
    </a>
    <a href="#" className="py-3 px-4 mx-3 border rounded-md">
    Resources
    </a>    
    </div>
    <div className="flex mt-10 justify-center gap-5">
    <div className="w-64 h-96 border border-green-700 rounded-lg overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-fill">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    <div className="w-64 h-96 border border-green-700 rounded-lg overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-fill">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
</div>
    </div>
  )
}

export default HeroSection