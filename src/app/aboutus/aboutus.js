"use client";

import React, { useEffect } from "react";
import Link from "next/link"
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 300 }); // Initialize AOS with your desired options
  }, []);
  return (
    <div className="flex px-[24px] lg:px-[104px] py-14 lg:py-12">
      <div className=" flex flex-col lg:flex-row justify-between items-center">
        <div className="  p-0">
          {/* Globe container */}
          <div className="relative  md:w-[400px]  ">
            <img
              src="/images/Earth.png"
              className="w-full"
              data-aos="fade-up"
              data-aos-once="true"
            />
            <img
              src="/images/Scientistimage.png"
              className="absolute top-0 right-0 w-1/2 md:w-auto"
              data-aos="fade-down"
              data-aos-once="true"
            />
          </div>
        </div>

        <div className="lg:flex   lg:flex-col gap-5">
          <div
            className="flex items-center gap-2"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <h2 className="font-bold text-nowrap	text-[27px]	">About Us</h2>
            <div className="hidden sm:block h-[4px] w-[150px] lg:w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
          </div>

          <p
            className="text-base	font-normal	my-4 lg:my-0"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Welcome to Antarik Space where we're unlocking the power of Earth
            observation and weather data to empower informed decision-making.
            Our journey began with a mission: to revolutionize how businesses
            and organizations utilize data from virtual satellite constellations
            and weather forecasts. We believe in the transformative potential of
            data-driven insights, and we're driven by the values of innovation,
            collaboration, and impact.
          </p>

            {/* More Info Button */}
            <Link href='/about-us'>
          
            <div className=" flex w-fit  mt-12" data-aos="fade-up"
            data-aos-once="true">
              <button className=" flex items-center hover:bg-[#252525] justify-center text-white font-[500] w-[140px] h-[40px] px-[8px] bg-[#083E6F] py-[16px] gap-[8px] rounded-[4px] ">
                More Info
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_6_642)">
                    <path
                      d="M20.864 12.707C21.0514 12.5194 21.1567 12.2651 21.1567 12C21.1567 11.7348 21.0514 11.4805 20.864 11.293L15.207 5.63598C15.1147 5.54047 15.0044 5.46428 14.8824 5.41188C14.7604 5.35947 14.6291 5.33188 14.4964 5.33073C14.3636 5.32957 14.2319 5.35487 14.109 5.40516C13.9861 5.45544 13.8744 5.52969 13.7806 5.62358C13.6867 5.71747 13.6124 5.82913 13.5621 5.95202C13.5118 6.07492 13.4865 6.2066 13.4877 6.33938C13.4889 6.47216 13.5164 6.60338 13.5689 6.72538C13.6213 6.84739 13.6974 6.95773 13.793 7.04998L17.743 11L4.49995 11C4.23474 11 3.98038 11.1053 3.79284 11.2929C3.60531 11.4804 3.49995 11.7348 3.49995 12C3.49995 12.2652 3.60531 12.5195 3.79284 12.7071C3.98038 12.8946 4.23474 13 4.49995 13L17.743 13L13.793 16.95C13.6108 17.1386 13.51 17.3912 13.5123 17.6534C13.5146 17.9156 13.6197 18.1664 13.8051 18.3518C13.9905 18.5372 14.2414 18.6424 14.5036 18.6447C14.7657 18.6469 15.0183 18.5461 15.207 18.364L20.864 12.707Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_642">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(0 1 -1 0 24.5 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            </Link>
            

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
