"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SolutionItem = ({ imageSrc, title, items }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className={`transition-all duration-500 ease-in-out  relative ${
        showText ? "w-3/6 md:w-[22%]" : ""
      }`}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <img
        src={imageSrc}
        className={`h-[483.8px] w-[100%] ${
          showText ? "brightness-[0.2]" : "brightness-100"
        }`}
      />
      {showText && (
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="absolute inset-0 p-4 rounded-[10px] flex gap-4 flex-col justify-center  bg-opacity-75 mx-auto text-white text-xs"
        >
          {items.map((item, index) => (
            <div key={index} className="flex justify-start gap-2 ">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="6"
                viewBox="0 0 15 6"
                fill="none"
                className=""
              >
                <path
                  d="M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5V2.5ZM15 3L10 0.113249V5.88675L15 3ZM1 3.5H10.5V2.5H1V3.5Z"
                  fill="white"
                />
              </svg> */}
              <svg
                className="w-[16px]flex-grow h-[16px] "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.47897 5.13768V4.20435C10.6689 4.43768 12.3937 6.15968 12.638 8.33435C12.92 10.8963 11.0637 13.2017 8.47897 13.4817V12.5483C10.1896 12.3383 11.5337 10.999 11.7498 9.30035C11.8107 8.81369 11.7744 8.3199 11.6429 7.84721C11.5114 7.37452 11.2873 6.93221 10.9835 6.54559C10.6797 6.15896 10.3022 5.83561 9.87241 5.59402C9.44265 5.35244 8.96914 5.19737 8.47897 5.13768ZM5.03423 5.23101C5.7466 4.6471 6.61933 4.28939 7.53907 4.20435V5.16568C6.86704 5.25901 6.2326 5.52968 5.70626 5.94968L5.03423 5.23101ZM3.33301 8.40435C3.41999 7.49052 3.78188 6.62384 4.3716 5.91701L5.04363 6.58435C4.6269 7.11134 4.36069 7.73999 4.27291 8.40435H3.33301ZM4.3763 11.825C3.79247 11.1147 3.43136 10.2498 3.33771 9.33768H4.27761C4.3622 10.0003 4.63007 10.6303 5.04363 11.1577L4.3763 11.825ZM5.03423 12.483L5.68746 11.8437H5.70626C6.2373 12.2543 6.87174 12.5203 7.53907 12.6043V13.5377C6.61796 13.4397 5.74386 13.071 5.03423 12.483ZM8.00902 11.2043L8.74214 9.60835L10.3588 8.87101L8.74214 8.14301L8.00902 6.53768L7.2712 8.14301L5.65926 8.87101L7.2712 9.60835L8.00902 11.2043Z"
                  fill="white"
                />
              </svg>
              <p className="text-wrap text-[10px] w-[100%]">{item}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex absolute  w-[90%]  h-[12%] right-[10px]  bottom-0 items-center justify-center">
        <h3
          className={`text-[14px] text-center  text-pretty w-[100%] h-full  flex justify-center items-center text-white font-semibold ${
            showText && "text-[16px]"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

const Solutions = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with your desired options
  }, []);
  return (
    <div className="mt-5 bg-[#F4F4F4] py-[100px] px-[24px] lg:px-[104px] ">
      <div
        className="flex gap-2 items-center  "
        data-aos="fade-down"
        data-aos-once="true"
      >
        <h3 className="text-[27px] font-[700] xl:text-[32px]">Solutions</h3>
        <div className="h-[4px] w-[100px] lg:w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
      </div>
      {/* Solutions cards container */}
      <div
        // className="flex mt-2 justify-center flex-wrap max-w-[1200px] gap-1"
        className="flex w-fit md:flex-nowrap flex-wrap justify-center gap-1  overflow-hidden mx-auto transition-all duration-200 ease-in-out"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <SolutionItem
          imageSrc="/images/new_solutions_component_image_1.png"
          title="Environment & Agriculture"
          items={[
            "Weather Extremes Monitoring & Forecasting : Dust , drought, Floods, Cyclones, Forest/ Wild- Fires",
            "Risk Reduction & Assessment",
            "Protect Resources",
            "Argo Forecasts &  Monitoring",
            "Water Stress Analysis",
            "Land Use & Land Cover, Surface Temperature",
          ]}
        />
        <SolutionItem
          imageSrc="/images/new_solutions_component_image_2.png"
          title="Oil & Gas 
          ( Energy sector )"
          items={[
            "Seasonal Weather Forecasting",
            "Wind & Solar potential monitoring & Forecasting",
            "Exploration of New mineral sites",
            "Detailed deposite mapping",
            "Leak & spill detection & assessment",
            "Resource Extraction"
          ]}
        />
        <SolutionItem
          imageSrc="/images/new_solutions_component_image_3.png"
          title="  Urban 
          Infrastructure"
          items={[
            "Pipeline Monitoring",
            "Precise object & change detection",
            "Urban Planning Optimization",
            "Monitoring Land use & Land Cover Changes",
            "Disaster Preparedness & Responses",
            "Urban Flood & Heat island"
          ]}
        />
        <SolutionItem
          imageSrc="/images/new_solutions_component_image_4.png"
          title="Finance 
          & Insurance"
          items={[
            "Weather extremes & Long-range forecasts ",
            "Near Real-time Situational weather monitoring",
            "Asset Portfolio Optimization",
            "Fraud Detection & Prevention",
            "Climate Risk Modeling & Assessment Projections",
            "Investment Banking"
          ]}
        />
        <SolutionItem
          imageSrc="/images/new_solutions_component_image_5.png"
          title="Climate Monitoring"
          items={[
            "Equities Research",
            "Portfolio Management",
            "ESG & Sustainability",
            "GHG‘s Monitoring & dispersion predictions",
            "Carbon Stock monitoring & Assessment",
            "Deforestation Analysis",
            "Climate Extremes predictions & monitoring"
          ]}
        />
        <SolutionItem
          imageSrc="/images/new_solutions_component_image_6.png"
          title="Maritime
          ( Oceans )"
          items={[
            "Marine Weather & Ocean Forecasts & Extremes",
            "Winds, Waves & Sea State forecast",
            "Monitoring of Oceanic Hazards",
            "Water Quality & Aqua weather",
          ]}
        />
      </div>
    </div>
  );
};

export default Solutions;
