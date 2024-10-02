"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
const OurWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your desired options
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollimages = [
    {
      bigImage: "/images/ourwokrsbigimage1.png",
      smallImage: "/images/ourworkssmallimage1.png",
    },
    {
      bigImage: "/images/ourworksbigimage2.png",
      smallImage: "/images/ourworkssmallimage2.png",
    },
    {
      bigImage: "/images/ourworksbiglimage3.png",
      smallImage: "/images/ourworkssmallimage3.png",
    },
    {
      bigImage: "/images/ourworksbigimage4.png",
      smallImage: "/images/ourworkssmallimage4.png",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === scrollimages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="grid grid-cols-12 px-[24px]  lg:px-[104px] py-[140px]  ">
      <div className=" col-span-12 lg:col-span-3 xl:col-span-4 ">
        <div>
          <div
            className="flex gap-2 items-center  mb-3"
            data-aos="fade-bottom"
            data-aos-once="true"
          >
            <h3 className="text-2xl font-bold text-nowrap">Our Works</h3>
            <div className="h-[4px] w-[100px] lg:w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
          </div>
          <p
            className="font-normal text-base"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Process and analyze satellite imagery and other remote sensing data
            to monitor environmental changes, land use, and natural disasters.
            Develop algorithms and tools for image processing, feature
            extraction, and classification.
          </p>
          <p
            className="font-normal text-base my-6	"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Manage geospatial data and create interactive maps and spatial
            analyses to visualize and communicate information effectively.
          </p>
          <div className=" flex w-fit  mt-16">
            <Link href={'/our_work'}>
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
            </Link>
          </div>
        </div>
      </div>

      <div
        className="col-span-12  lg:col-span-9 xl:col-span-8 flex flex-col justify-center items-center  lg:items-end  "
        data-aos="fade-left"
        data-aos-once="true"
      >
        <div className="relative   flex justify-center items-center mt-20 lg:mt-0  lg:scale-100">
          <div className="absolute -top-9 -right-[50px] -z-10 hidden lg:block ">
            <svg
              width="121"
              height="82"
              viewBox="0 0 121 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="121"
                height="82"
                rx="8"
                fill="#252525"
                fillOpacity="0.25"
              />
            </svg>
          </div>
          <img
            src={scrollimages[currentIndex].bigImage}
            alt="big image"
            className="-z-10 "
          />
          <img
            src={scrollimages[currentIndex].smallImage}
            className="absolute -bottom-[3rem] sm:-bottom-[8rem] lg:-bottom-[70px] w-[50%]  lg:-left-[100px]  "
            alt="small image"
          />
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
