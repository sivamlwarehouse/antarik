"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
function DigitalTwins() {
  useEffect(() => {
    AOS.init({ duration: 300 }); // Initialize AOS with your desired options
  }, []);
  const [dataIndex, setDataIndex] = useState(0);
  const data = [
    {
      heading: "Space Intelligence",
      content:
        "Plays a crucial role in national security, scientific exploration, and commercial activities in space. It involves various methods of data gathering, such as satellite imagery, signals intelligence (SIGINT), and human intelligence (HUMINT), to monitor and understand developments in space. ",
    },
    {
      heading: "Ground Truth Observations",
      content:
        "Ground truth observations refer to data collected through direct, physical measurements or observations in the real world, typically used as a reference or benchmark for evaluating the accuracy or performance of models, algorithms, or remote sensing technologies.",
    },
    {
      heading: "UAV- Drones / Balloons",
      content:
        "Unmanned Aerial Vehicles (UAVs), commonly known as drones, and unmanned balloons are types of unmanned aerial systems (UAS) used for various purposes, including reconnaissance, surveillance, data collection, and scientific research. UAVs are aircraft that operate without a human pilot on board. ",
    },
    {
      heading: "Data Centre & DevOps",
      content:
        "A data center is a facility that houses computer systems and associated components, such as storage systems, networking equipment, and servers, as well as the infrastructure necessary for their operation, including power supplies, cooling systems, and security measures. ",
    },
    {
      heading: "Digital Twin & Dashboard",
      content:
        "A digital twin is a virtual representation or digital replica of a physical object, system, or process. It encompasses both the physical aspects (such as structure, components, and behavior) and the digital components (such as data, algorithms, and simulations) of the real-world entity it represents. ",
    },
  ];

  useEffect(() => {
    let timer = setInterval(() => {
      console.log(dataIndex);
      setDataIndex((prevState) => {
        if (prevState === data.length - 1) {
          return 0;
        }
        return prevState + 1;
      });
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [dataIndex, data.length]);

  const styles = {
    border: "2px dashed #F4F4F4",
    borderRadius: "50%",
    background:
      "linear-gradient(#F4F4F4, #F4F4F4) padding-box,linear-gradient(to right, #F4F4F4 50%, black) border-box",
  };
  const styles2 = {
    border: "2px dashed #F4F4F4",
    borderRadius: "50%",
    background:
      "linear-gradient(#F4F4F4, #F4F4F4) padding-box,linear-gradient(to right,#F4F4F4 60%, black) border-box",
  };
  return (
    <div className="bg-[#F4F4F4]">
      <div
        className=" py-[100px] px-[24px] lg:px-[100px]  gap-20  flex flex-col  lg:flex-row jusfity-between items-center "
        data-aos="fade-up"
        data-aos-once="true"
      >
        {/* Globe and satellite image container */}
        <div
          style={styles}
          className="relative  min-w-[600px] -translate-x-1/3 sm:-translate-x-1/4 md:mx-auto lg:translate-x-0 lg:scale-100 p-20   lg:-ml-[100px] max-w-[650px] "
        >
          <div style={styles2} className="p-10">
            <Image
              width={350}
              height={350}
              alt="Earth Image"
              src="/images/digital_twin_earth.png"
            />
          </div>
          <div
            style={
              dataIndex === 0
                ? { border: "2px dashed #DF4133" }
                : { border: "2px dashed transparent" }
            }
            className="absolute top-[3rem] right-[3.5rem] border-2 rounded-[50%] p-1"
          >
            <div className={`${
                dataIndex === 0 ? "bg-[#DF4133]" : "bg-[#4B4B4B]"
              } rounded-[50%] p-[2px]`}>
              <Image
                height={60}
                width={60}
                alt="Space Intelligence"
                src="/images/digital_twin_small_img_1.png"
                className="rounded-[50%] "
                // style={
                //   dataIndex === 0
                //     ? { border: "2px solid #DF4133" }
                //     : { border: "2px solid #4B4B4B" }
                // }
              />
            </div>
          </div>
          <div
            style={
              dataIndex === 1
                ? { border: "2px dashed #DF4133" }
                : { border: "2px dashed transparent" }
            }
            className="absolute top-[9rem] -right-[1.2rem] border-2 rounded-[50%] p-1"
          >
            <div
              className={`${
                dataIndex === 1 ? "bg-[#DF4133]" : "bg-[#4B4B4B]"
              } rounded-[50%] p-[2px]`}
            >
              <Image
                height={60}
                width={60}
                alt="Ground Truth Observations"
                src="/images/digital_twin_small_img_2.png"
                className="rounded-[50%] "
                // style={
                //   dataIndex === 1
                //     ? { border: "2px solid #DF4133" }
                //     : { border: "2px solid #4B4B4B" }
                // }
              />
            </div>
          </div>
          <div
            style={
              dataIndex === 2
                ? { border: "2px dashed #DF4133" }
                : { border: "2px dashed transparent" }
            }
            className="absolute top-[17rem] -right-[2.5rem] border-2 rounded-[50%] p-1"
          >
            <div
              className={`${
                dataIndex === 2 ? "bg-[#DF4133]" : "bg-[#4B4B4B]"
              } rounded-[50%] p-[2px]`}
            >
              <Image
                height={60}
                width={60}
                alt="UAV Drones/Balloons"
                src="/images/digital_twin_small_img_3.png"
                className=" rounded-[50%] "
                // style={
                //   dataIndex === 2
                //     ? { border: "2px solid #DF4133" }
                //     : { border: "2px solid #4B4B4B" }
                // }
              />
            </div>
          </div>
          <div
            style={
              dataIndex === 3
                ? { border: "2px dashed #DF4133" }
                : { border: "2px dashed transparent" }
            }
            className="absolute top-[25rem] -right-[0rem] border-2 rounded-[50%] p-1"
          >
            <div
              className={`${
                dataIndex === 3 ? "bg-[#DF4133]" : "bg-[#4B4B4B]"
              } rounded-[50%] p-[2px]`}
            >
              <Image
                height={60}
                width={60}
                alt="Data Centre & DevOps"
                src="/images/digital_twin_small_img_4.png"
                className=" rounded-[50%] "
                // style={
                //   dataIndex === 3
                //     ? { border: "2px solid #DF4133" }
                //     : { border: "2px solid #4B4B4B" }
                // }
              />
            </div>
          </div>
          <div
            style={
              dataIndex === 4
                ? { border: "2px dashed #DF4133" }
                : { border: "2px dashed transparent" }
            }
            className="absolute top-[31rem] right-[4.5rem] border-2 rounded-[50%] p-1"
          >
            <div
              className={`${
                dataIndex === 4 ? "bg-[#DF4133]" : "bg-[#4B4B4B]"
              } rounded-[50%] p-[2px]`}
            >
              <Image
                height={60}
                width={60}
                alt="Digital Twin & Dashboard"
                src="/images/digital_twin_small_img_5.png"
                className=" rounded-[50%] "
                // style={
                //   dataIndex === 4
                //     ? { border: "2px solid #DF4133" }
                //     : { border: "2px solid #4B4B4B" }
                // }
              />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="text-black lg:w-1/2 w-full ">
          <div className=" flex flex-col gap-[15px]  justify-start">
            {/* Digital Twins Heading container */}
            <div className="flex justify-start items-center mb-[30px]">
              <h2 className="font-[700]  text-[32px] sm:text-nowrap  mr-3 leading-[120%]">
                Digital Twin Model
              </h2>
              <div className="h-[4px] lg:block hidden w-[100px] lg:w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
            </div>
            {/* Dynamic content container */}
            <div className="flex flex-col gap-[16px]">
              {/* Sub heading */}
              <h2 className="font-[600] text-[24px]  leading-[120%] text-[#083E6F] ">
                {data[dataIndex].heading}
              </h2>

              <p className="w-full text-[16px] font-[500] leading-[28px] ">
                {data[dataIndex].content}
              </p>
            </div>
            <div className=" flex w-fit  mt-10">
              <Link href={"/our_work"}>
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
      </div>
    </div>
  );
}
export default DigitalTwins;
