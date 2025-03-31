import {features} from "../constants"
import React from 'react'

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
     <div className="text-center">
     <span className="text-blue-500 text-2xl h-6 font-medium px-2 py-1 uppercase">
    Features
</span> 
<h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
  Let's Make Hiring Better
  </h2> 
        <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) =>(
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
           <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-none text-blue-800 justify-center items-center rounded-full">
             {feature.icon}
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
              <p mt-2>{feature.description}</p>
            </div>
           </div>
          </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default FeatureSection
