"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
// Can be used directly please verify if the
// responsivenss is appropriate
function Expert() {
  useEffect(() => {
    AOS.init({ duration: 300 }); // Initialize AOS with your desired options
  }, []);

  const [dataIndex, setDataIndex] = useState(0);
  const data = [
    {
      name: "Data Science",
      imageUrl: "/images/expert_image_5.png",
    },
    {
      name: "Satellite Technology",
      imageUrl: "/images/expert_image_2.png",
    },
    {
      name: "Meteorology",
      imageUrl: "/images/expert_image_3.png",
    },
    {
      name: "Software Development",
      imageUrl: "/images/expert_image_4.png",
    },
    // {
    //   name: "",
    //   imageUrl: "/images/expert_image_5.png",
    // },
  ];

  useEffect(() => {
    let timer = setInterval(() => {
      setDataIndex((prevState) => {
        if (prevState === data.length - 1) {
          return 0;
        }
        return prevState + 1;
      });
    }, 3000);
    return () => {
      clearInterval(timer)
    }
  }, [dataIndex, data.length]);

  return (
    <div className="flex justify-center items-center px-[24px] lg:px-[104px] pt-[100px] lg:py-[100px]  overflow-x-hidden ">
      <div className=" h-full w-full flex justify-center ">
        {/* Content container */}
        <div
          className="w-fit grid grid-cols-12 h-full  gap-5 lg:gap-0 "
          data-aos="fade"
          data-aos-once="true"
        >
          {/* Image Container */}
          <div className="col-span-12 lg:col-span-4 flex justify-center items-center ">
            <div className=" relative p-5 ">
              <svg
                className="absolute w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[192px] lg:h-[192px] top-0 left-0"
                width="196"
                height="196"
                viewBox="0 0 196 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="2"
                  x2="196"
                  y2="2"
                  stroke="url(#paint0_linear_641_206)"
                  stroke-width="4"
                />
                <line
                  x1="2"
                  x2="2"
                  y2="196"
                  stroke="url(#paint1_linear_641_206)"
                  stroke-width="4"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_641_206"
                    x1="0"
                    y1="4.5"
                    x2="196"
                    y2="4.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DF4133" />
                    <stop offset="0.824" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_641_206"
                    x1="-0.5"
                    y1="0"
                    x2="-0.5"
                    y2="196"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DF4133" />
                    <stop offset="0.824" />
                  </linearGradient>
                </defs>
              </svg>
              <Image
                src={data[dataIndex].imageUrl}
                width={325}
                height={487}
                alt="experts side image"
              />
              <svg
                className="absolute bottom-0 w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[196px] lg:h-[196px] right-0"
                width="196"
                height="196"
                viewBox="0 0 196 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="196"
                  y1="194"
                  y2="194"
                  stroke="url(#paint0_linear_641_209)"
                  stroke-width="4"
                />
                <line
                  x1="194"
                  y1="196"
                  x2="194"
                  stroke="url(#paint1_linear_641_209)"
                  stroke-width="4"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_641_209"
                    x1="196"
                    y1="191.5"
                    x2="0"
                    y2="191.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DF4133" />
                    <stop offset="0.824" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_641_209"
                    x1="196.5"
                    y1="196"
                    x2="196.5"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DF4133" />
                    <stop offset="0.824" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          {/* Vertical Line Container */}
          <div className=" lg:col-span-2  flex justify-center">
            <hr className="hidden lg:block w-[2px] h-full bg-[#CECECE]" />
          </div>

          {/* Content container */}
          <div className="col-span-12 lg:col-span-6  flex flex-col text-black">
            <div className="flex justify-start items-center">
              <h2 className="font-[700]  text-[27px] text-nowrap  mr-3 leading-[150%]">
                Experts In
              </h2>
              <div className="h-[4px] w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
            </div>
            <div className="text-black font-[400] h-full flex flex-col justify-between gap-6 ">
              <p class="text-[16px] mt-5">
                Experts from various sectors (e.g., agriculture, urban planning,
                emergency response) who provide insights into specific use cases
                and requirements for decision support systems. Collaborate with
                the team to tailor solutions to meet user needs.
              </p>
              <ul className="list-disc pl-4 flex flex-col gap-[8px]">
                {data.map((item, index) => {
                  if (index === 4) {
                    return;
                  }
                  return (
                    <li
                      key={index}
                      className="text-[16px] "
                      style={
                        dataIndex === index
                          ? { color: "#083E6F", fontWeight: "600" }
                          : { color: "black", fontWeight: "400" }
                      }
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              <div className="flex">
                <Link href={'/our-team'}>
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
              <ul className="flex  gap-3 lg:gap-4 mt-[50px] mb-[50px] justify-center lg:mt-8  lg:mb-10  lg:justify-start  w-full">
                {data.map((_, index) => (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <circle
                        cx="6"
                        cy="6.41943"
                        r="6"
                        fill={dataIndex === index ? "#DF4133" : "#D9D9D9"}
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Expert;
