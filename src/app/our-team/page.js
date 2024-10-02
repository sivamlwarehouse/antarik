"use client";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactUsModal from "../contact-us-modal/contact-us-modal";
function OurTeamPage() {
  const [modalOpen, setModalOpen] = useState(false);
  // functionalites for the Experts In Page

  const [dataIndex, setDataIndex] = useState(0);
  const [partnerDataIndex, setPartnerDataIndex] = useState(0);
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
  const parterData = [
    {
      name: "Ocean Color Radiometry",
      imageUrl: "/images/our_team_partner_image_1.png",
    },
    {
      name: "Land Surface Imaging",
      imageUrl: "/images/our_team_partner_image_2.png",
    },
    {
      name: "Sea Surface Temperature",
      imageUrl: "/images/our_team_partner_image_3.png",
    },
    {
      name: "Ocean surface topography",
      imageUrl: "/images/our_team_partner_image_4.png",
    },
    {
      name: "Ocean surface vector winds",
      imageUrl: "/images/our_team_partner_image_5.png",
    },
    // {
    //   name: 'Atmospheric Composition',
    //   imageUrl: "/images/our_team_partner_image_6.png"
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
      clearInterval(timer);
    }
  }, [dataIndex, data.length]);

  useEffect(() => {
    let timer2 = setInterval(() => {
      setPartnerDataIndex((previousState) => {
        if (previousState === parterData.length - 1) {
          return 0;
        }
        return previousState + 1;
      });
      // console.log(
      //   "Partnerdata ",
      //   parterData[partnerDataIndex],
      //   partnerDataIndex
      // );
    }, 3000);
    return () => {
      clearInterval(timer2);
    }
  }, [parterData.length, partnerDataIndex]);

  // Modal functionality
  function openModal() {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    // Our Team Wrapper Container
    <div>
      {/* Navbar section */}
      <Navbar bgcolor={"#252525"} currentPage={"our-team"} />

      {/* Experts in Container */}
      <div className="pt-10 relative">
        <div className="flex justify-center items-center px-[24px] lg:px-[104px] pt-[100px] lg:py-[100px]  overflow-x-hidden ">
          <div className=" h-full w-full flex justify-center ">
            <div
              className="w-fit grid grid-cols-12 h-full  gap-5 lg:gap-0 "
              //   data-aos="fade"
              //   data-aos-once="true"
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
                {/* Experts In heading */}
                <div className="flex justify-start items-center">
                  <h2 className="font-[700]  text-[27px] text-nowrap  mr-3 leading-[150%]">
                    Experts In
                  </h2>
                  <div className="h-[4px] w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
                </div>
                <div className="text-black font-[400] h-full flex flex-col justify-between gap-6 ">
                  {/* Paragraph */}
                  <p class="text-[16px] mt-5">
                    Experts from various sectors (e.g., agriculture, urban
                    planning, emergency response) who provide insights into
                    specific use cases and requirements for decision support
                    systems. Collaborate with the team to tailor solutions to
                    meet user needs.
                  </p>

                  {/* List points change colors periodically */}
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

                  {/* Button  */}
                  {/* <div className="flex">
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
                  </div> */}
                  <div className="">
                    <div
                      className="flex  bg-[#083E6F] gap-[10px] w-fit height-[40px] p-[16px] text-white rounded-[8px] text-[16px] font-[500] leading-[120%] "
                      onMouseEnter={openModal}
                      onMouseLeave={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22L11.75 19H11.5C9.13333 19 7.125 18.175 5.475 16.525C3.825 14.875 3 12.8667 3 10.5C3 8.13333 3.825 6.125 5.475 4.475C7.125 2.825 9.13333 2 11.5 2C12.6833 2 13.7877 2.22067 14.813 2.662C15.8383 3.10333 16.7383 3.71167 17.513 4.487C18.2877 5.26233 18.8957 6.16233 19.337 7.187C19.7783 8.21167 19.9993 9.316 20 10.5C20 11.75 19.796 12.95 19.388 14.1C18.98 15.25 18.4213 16.3167 17.712 17.3C17.0027 18.2833 16.161 19.175 15.187 19.975C14.213 20.775 13.1507 21.45 12 22ZM11.475 15.975C11.7583 15.975 12 15.875 12.2 15.675C12.4 15.475 12.5 15.2333 12.5 14.95C12.5 14.6667 12.4 14.425 12.2 14.225C12 14.025 11.7583 13.925 11.475 13.925C11.1917 13.925 10.95 14.025 10.75 14.225C10.55 14.425 10.45 14.6667 10.45 14.95C10.45 15.2333 10.55 15.475 10.75 15.675C10.95 15.875 11.1917 15.975 11.475 15.975ZM10.75 12.8H12.25C12.25 12.3 12.3 11.95 12.4 11.75C12.5 11.55 12.8167 11.1833 13.35 10.65C13.65 10.35 13.9 10.025 14.1 9.675C14.3 9.325 14.4 8.95 14.4 8.55C14.4 7.7 14.1127 7.06233 13.538 6.637C12.9633 6.21167 12.284 5.99933 11.5 6C10.7667 6 10.15 6.20433 9.65 6.613C9.15 7.02167 8.8 7.51733 8.6 8.1L10 8.65C10.0833 8.36667 10.2417 8.08767 10.475 7.813C10.7083 7.53833 11.05 7.40067 11.5 7.4C11.95 7.39933 12.2877 7.52433 12.513 7.775C12.7383 8.02567 12.8507 8.30067 12.85 8.6C12.85 8.88333 12.7667 9.13767 12.6 9.363C12.4333 9.58833 12.2333 9.81733 12 10.05C11.4167 10.55 11.0627 10.946 10.938 11.238C10.8133 11.53 10.7507 12.0507 10.75 12.8Z"
                          fill="white"
                        />
                      </svg>
                      <button>Connect With Us</button>
                      {modalOpen && <ContactUsModal closeModal={closeModal} />}
                    </div>
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
      </div>

      {/* Team info container */}
      <div className="py-[69px] bg-cover px-[24px] lg:px-[104px]  bg-[url('/images/our_team_team_background_image.png')]  ">
        {/* Team info inner container */}
        <div className=" flex flex-col gap-[16px] ">
          {/* Heading */}
          <div className="flex font-sans  justify-start items-center">
            <h2 className="font-[700] text-white  text-[27px] text-nowrap  mr-3 leading-[150%]">
              Experienced Team
            </h2>
            <div className="h-[4px] w-[20%] bg-gradient-to-r from-[#DF4133] to-[#000] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
          </div>

          {/* Para */}
          <p className="text-white text-[16px] leading-[28px] font-sans  ">
          Our team possesses more than 30 years of collective experience in the space sector, covering areas such as weather, climate, launch operations, and satellite management. This extensive background includes deep scientific knowledge and proven business acumen gained from collaborations with prominent organizations in the industry. Our expertise extends across various facets of space technology and operations, ensuring a comprehensive understanding of the field's complexities and demands.
          </p>
        </div>

        
      </div>

      {/* Partner Network */}
      <div className=" px-[24px] lg:px-[104px] grid grid-cols-12 py-10 bg-green">
        {/* Partner Network Content Container*/}
        <div className="col-span-12 lg:col-span-7 p-2 col-start-1">
          {/* Partner Network Heading */}
          <div className="flex font-sans  justify-start items-center">
            <h2 className="font-[700]  text-[27px] text-wrap lg:text-nowrap  mr-3 leading-[150%]">
              Partner Network (Virtual Constellation)
            </h2>
            <div className="h-[4px] w-[20%] hidden md:block bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
          </div>
          {/* Partner Network Paragraph */}
          <p className="text-[#4B4B4B] w-[85%] mt-[24px] font-sans text-[16px]">
            Virtual Constellation (fusion of data): EO from space using Optical,
            Multi-Hyperspectral, Cloud penetration radar satellite tech can
            provide accurate insights - situations on ground in near real time
            with a customizable resolution.
          </p>
          {/* Partner description container (below paragraph sentences) */}
          <div className="flex lg:flex-row flex-col gap-[48px] mt-[16px]">
            {/* Imaging Partners container*/}
            <div className="flex  w-fit gap-[8px] items-center">
              {/* Tick mark svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_927_3065)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.71608 0.315083C8.62292 0.219532 8.51157 0.143594 8.38861 0.0917444C8.26564 0.0398952 8.13354 0.0131836 8.00008 0.0131836C7.86663 0.0131836 7.73453 0.0398952 7.61156 0.0917444C7.48859 0.143594 7.37725 0.219532 7.28408 0.315083L6.64608 0.970083C6.52051 1.09911 6.36243 1.19183 6.18853 1.23847C6.01463 1.28512 5.83137 1.28394 5.65808 1.23508L4.77808 0.987083C4.64964 0.950937 4.51525 0.940864 4.38285 0.957456C4.25045 0.974048 4.12271 1.01697 4.00715 1.0837C3.8916 1.15042 3.79056 1.2396 3.71 1.34597C3.62945 1.45235 3.57099 1.57377 3.53808 1.70308L3.31208 2.58908C3.26778 2.7635 3.17722 2.92273 3.04997 3.04997C2.92273 3.17722 2.7635 3.26778 2.58908 3.31208L1.70308 3.53708C1.57377 3.56999 1.45235 3.62844 1.34597 3.709C1.2396 3.78956 1.15042 3.8906 1.0837 4.00615C1.01697 4.12171 0.974048 4.24945 0.957456 4.38185C0.940864 4.51425 0.950937 4.64864 0.987083 4.77708L1.23508 5.65808C1.28394 5.83137 1.28512 6.01463 1.23847 6.18853C1.19183 6.36243 1.09911 6.52051 0.970083 6.64608L0.315083 7.28408C0.219532 7.37725 0.143594 7.48859 0.0917444 7.61156C0.0398952 7.73453 0.0131836 7.86663 0.0131836 8.00008C0.0131836 8.13354 0.0398952 8.26564 0.0917444 8.38861C0.143594 8.51157 0.219532 8.62292 0.315083 8.71608L0.970083 9.35508C1.09893 9.48056 1.19155 9.63847 1.23819 9.81217C1.28482 9.98588 1.28375 10.1689 1.23508 10.3421L0.987083 11.2221C0.950937 11.3505 0.940864 11.4849 0.957456 11.6173C0.974048 11.7497 1.01697 11.8775 1.0837 11.993C1.15042 12.1086 1.2396 12.2096 1.34597 12.2902C1.45235 12.3707 1.57377 12.4292 1.70308 12.4621L2.58908 12.6881C2.7635 12.7324 2.92273 12.8229 3.04997 12.9502C3.17722 13.0774 3.26778 13.2367 3.31208 13.4111L3.53708 14.2971C3.56988 14.4265 3.62826 14.548 3.70877 14.6545C3.78928 14.761 3.8903 14.8503 4.00587 14.9171C4.12143 14.9839 4.24921 15.0269 4.38167 15.0436C4.51412 15.0602 4.64857 15.0502 4.77708 15.0141L5.65808 14.7661C5.83128 14.7171 6.01449 14.7158 6.18838 14.7622C6.36228 14.8087 6.5204 14.9012 6.64608 15.0301L7.28408 15.6851C7.37725 15.7806 7.48859 15.8566 7.61156 15.9084C7.73453 15.9603 7.86663 15.987 8.00008 15.987C8.13354 15.987 8.26564 15.9603 8.38861 15.9084C8.51157 15.8566 8.62292 15.7806 8.71608 15.6851L9.35508 15.0301C9.48067 14.9014 9.63863 14.809 9.81232 14.7625C9.98602 14.7161 10.169 14.7173 10.3421 14.7661L11.2221 15.0141C11.3506 15.0502 11.485 15.0602 11.6175 15.0436C11.75 15.0269 11.8777 14.9839 11.9933 14.9171C12.1089 14.8503 12.2099 14.761 12.2904 14.6545C12.3709 14.548 12.4293 14.4265 12.4621 14.2971L12.6881 13.4111C12.7324 13.2367 12.8229 13.0774 12.9502 12.9502C13.0774 12.8229 13.2367 12.7324 13.4111 12.6881L14.2971 12.4631C14.4265 12.4303 14.548 12.3719 14.6545 12.2914C14.761 12.2109 14.8503 12.1099 14.9171 11.9943C14.9839 11.8787 15.0269 11.751 15.0436 11.6185C15.0602 11.486 15.0502 11.3516 15.0141 11.2231L14.7661 10.3431C14.7171 10.1699 14.7158 9.98668 14.7622 9.81278C14.8087 9.63889 14.9012 9.48076 15.0301 9.35508L15.6851 8.71608C15.7806 8.62292 15.8566 8.51157 15.9084 8.38861C15.9603 8.26564 15.987 8.13354 15.987 8.00008C15.987 7.86663 15.9603 7.73453 15.9084 7.61156C15.8566 7.48859 15.7806 7.37725 15.6851 7.28408L15.0301 6.64608C14.9012 6.5204 14.8087 6.36228 14.7622 6.18838C14.7158 6.01449 14.7171 5.83128 14.7661 5.65808L15.0141 4.77808C15.0502 4.64957 15.0602 4.51512 15.0436 4.38267C15.0269 4.25021 14.9839 4.12243 14.9171 4.00687C14.8503 3.8913 14.761 3.79028 14.6545 3.70977C14.548 3.62926 14.4265 3.57088 14.2971 3.53808L13.4111 3.31208C13.2367 3.26778 13.0774 3.17722 12.9502 3.04997C12.8229 2.92273 12.7324 2.7635 12.6881 2.58908L12.4631 1.70308C12.4302 1.57377 12.3717 1.45235 12.2912 1.34597C12.2106 1.2396 12.1096 1.15042 11.994 1.0837C11.8785 1.01697 11.7507 0.974048 11.6183 0.957456C11.4859 0.940864 11.3515 0.950937 11.2231 0.987083L10.3431 1.23508C10.1697 1.28414 9.98619 1.28541 9.81209 1.23876C9.638 1.19211 9.47975 1.09928 9.35408 0.970083L8.71608 0.315083ZM11.7731 6.29008C11.9163 6.15191 11.9988 5.96249 12.0023 5.76352C12.0059 5.56454 11.9303 5.3723 11.7921 5.22908C11.6539 5.08587 11.4645 5.00341 11.2655 4.99984C11.0665 4.99628 10.8743 5.07191 10.7311 5.21008L6.59708 9.20208L5.28008 7.88708C5.13912 7.74652 4.94809 7.66771 4.74902 7.66799C4.54995 7.66827 4.35915 7.74762 4.21858 7.88858C4.07802 8.02955 3.99921 8.22057 3.99949 8.41964C3.99977 8.61871 4.07912 8.80952 4.22008 8.95008L6.05908 10.7841C6.19797 10.9228 6.38572 11.0016 6.58204 11.0035C6.77836 11.0054 6.96758 10.9302 7.10908 10.7941L11.7731 6.29008Z"
                    fill="#083E6F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_927_3065">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* Imaging Partners Content*/}
              <p className="text-[#083E6F] text-[12px] font-sans font-[400] leading-[28px] ">
                IMAGING PARTNERS
              </p>
            </div>

            {/* DERIVATIVE Partners container*/}
            <div className="flex  w-fit gap-[8px] items-center">
              {/* Tick mark svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_927_3065)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.71608 0.315083C8.62292 0.219532 8.51157 0.143594 8.38861 0.0917444C8.26564 0.0398952 8.13354 0.0131836 8.00008 0.0131836C7.86663 0.0131836 7.73453 0.0398952 7.61156 0.0917444C7.48859 0.143594 7.37725 0.219532 7.28408 0.315083L6.64608 0.970083C6.52051 1.09911 6.36243 1.19183 6.18853 1.23847C6.01463 1.28512 5.83137 1.28394 5.65808 1.23508L4.77808 0.987083C4.64964 0.950937 4.51525 0.940864 4.38285 0.957456C4.25045 0.974048 4.12271 1.01697 4.00715 1.0837C3.8916 1.15042 3.79056 1.2396 3.71 1.34597C3.62945 1.45235 3.57099 1.57377 3.53808 1.70308L3.31208 2.58908C3.26778 2.7635 3.17722 2.92273 3.04997 3.04997C2.92273 3.17722 2.7635 3.26778 2.58908 3.31208L1.70308 3.53708C1.57377 3.56999 1.45235 3.62844 1.34597 3.709C1.2396 3.78956 1.15042 3.8906 1.0837 4.00615C1.01697 4.12171 0.974048 4.24945 0.957456 4.38185C0.940864 4.51425 0.950937 4.64864 0.987083 4.77708L1.23508 5.65808C1.28394 5.83137 1.28512 6.01463 1.23847 6.18853C1.19183 6.36243 1.09911 6.52051 0.970083 6.64608L0.315083 7.28408C0.219532 7.37725 0.143594 7.48859 0.0917444 7.61156C0.0398952 7.73453 0.0131836 7.86663 0.0131836 8.00008C0.0131836 8.13354 0.0398952 8.26564 0.0917444 8.38861C0.143594 8.51157 0.219532 8.62292 0.315083 8.71608L0.970083 9.35508C1.09893 9.48056 1.19155 9.63847 1.23819 9.81217C1.28482 9.98588 1.28375 10.1689 1.23508 10.3421L0.987083 11.2221C0.950937 11.3505 0.940864 11.4849 0.957456 11.6173C0.974048 11.7497 1.01697 11.8775 1.0837 11.993C1.15042 12.1086 1.2396 12.2096 1.34597 12.2902C1.45235 12.3707 1.57377 12.4292 1.70308 12.4621L2.58908 12.6881C2.7635 12.7324 2.92273 12.8229 3.04997 12.9502C3.17722 13.0774 3.26778 13.2367 3.31208 13.4111L3.53708 14.2971C3.56988 14.4265 3.62826 14.548 3.70877 14.6545C3.78928 14.761 3.8903 14.8503 4.00587 14.9171C4.12143 14.9839 4.24921 15.0269 4.38167 15.0436C4.51412 15.0602 4.64857 15.0502 4.77708 15.0141L5.65808 14.7661C5.83128 14.7171 6.01449 14.7158 6.18838 14.7622C6.36228 14.8087 6.5204 14.9012 6.64608 15.0301L7.28408 15.6851C7.37725 15.7806 7.48859 15.8566 7.61156 15.9084C7.73453 15.9603 7.86663 15.987 8.00008 15.987C8.13354 15.987 8.26564 15.9603 8.38861 15.9084C8.51157 15.8566 8.62292 15.7806 8.71608 15.6851L9.35508 15.0301C9.48067 14.9014 9.63863 14.809 9.81232 14.7625C9.98602 14.7161 10.169 14.7173 10.3421 14.7661L11.2221 15.0141C11.3506 15.0502 11.485 15.0602 11.6175 15.0436C11.75 15.0269 11.8777 14.9839 11.9933 14.9171C12.1089 14.8503 12.2099 14.761 12.2904 14.6545C12.3709 14.548 12.4293 14.4265 12.4621 14.2971L12.6881 13.4111C12.7324 13.2367 12.8229 13.0774 12.9502 12.9502C13.0774 12.8229 13.2367 12.7324 13.4111 12.6881L14.2971 12.4631C14.4265 12.4303 14.548 12.3719 14.6545 12.2914C14.761 12.2109 14.8503 12.1099 14.9171 11.9943C14.9839 11.8787 15.0269 11.751 15.0436 11.6185C15.0602 11.486 15.0502 11.3516 15.0141 11.2231L14.7661 10.3431C14.7171 10.1699 14.7158 9.98668 14.7622 9.81278C14.8087 9.63889 14.9012 9.48076 15.0301 9.35508L15.6851 8.71608C15.7806 8.62292 15.8566 8.51157 15.9084 8.38861C15.9603 8.26564 15.987 8.13354 15.987 8.00008C15.987 7.86663 15.9603 7.73453 15.9084 7.61156C15.8566 7.48859 15.7806 7.37725 15.6851 7.28408L15.0301 6.64608C14.9012 6.5204 14.8087 6.36228 14.7622 6.18838C14.7158 6.01449 14.7171 5.83128 14.7661 5.65808L15.0141 4.77808C15.0502 4.64957 15.0602 4.51512 15.0436 4.38267C15.0269 4.25021 14.9839 4.12243 14.9171 4.00687C14.8503 3.8913 14.761 3.79028 14.6545 3.70977C14.548 3.62926 14.4265 3.57088 14.2971 3.53808L13.4111 3.31208C13.2367 3.26778 13.0774 3.17722 12.9502 3.04997C12.8229 2.92273 12.7324 2.7635 12.6881 2.58908L12.4631 1.70308C12.4302 1.57377 12.3717 1.45235 12.2912 1.34597C12.2106 1.2396 12.1096 1.15042 11.994 1.0837C11.8785 1.01697 11.7507 0.974048 11.6183 0.957456C11.4859 0.940864 11.3515 0.950937 11.2231 0.987083L10.3431 1.23508C10.1697 1.28414 9.98619 1.28541 9.81209 1.23876C9.638 1.19211 9.47975 1.09928 9.35408 0.970083L8.71608 0.315083ZM11.7731 6.29008C11.9163 6.15191 11.9988 5.96249 12.0023 5.76352C12.0059 5.56454 11.9303 5.3723 11.7921 5.22908C11.6539 5.08587 11.4645 5.00341 11.2655 4.99984C11.0665 4.99628 10.8743 5.07191 10.7311 5.21008L6.59708 9.20208L5.28008 7.88708C5.13912 7.74652 4.94809 7.66771 4.74902 7.66799C4.54995 7.66827 4.35915 7.74762 4.21858 7.88858C4.07802 8.02955 3.99921 8.22057 3.99949 8.41964C3.99977 8.61871 4.07912 8.80952 4.22008 8.95008L6.05908 10.7841C6.19797 10.9228 6.38572 11.0016 6.58204 11.0035C6.77836 11.0054 6.96758 10.9302 7.10908 10.7941L11.7731 6.29008Z"
                    fill="#083E6F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_927_3065">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* DERIVATIVE Partners Content*/}
              <p className="text-[#083E6F] text-[12px] font-sans font-[400] leading-[28px] ">
                DERIVATIVE PARTNERS / CLIENTS (product suite)
              </p>
            </div>
          </div>
          {/* Connect with us button */}
          <div className=" mt-[72px]">
            <div
              className="flex  bg-[#083E6F] gap-[10px] w-fit height-[40px] p-[16px] text-white rounded-[8px] text-[16px] font-[500] leading-[120%] "
              onMouseEnter={openModal}
              onMouseLeave={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22L11.75 19H11.5C9.13333 19 7.125 18.175 5.475 16.525C3.825 14.875 3 12.8667 3 10.5C3 8.13333 3.825 6.125 5.475 4.475C7.125 2.825 9.13333 2 11.5 2C12.6833 2 13.7877 2.22067 14.813 2.662C15.8383 3.10333 16.7383 3.71167 17.513 4.487C18.2877 5.26233 18.8957 6.16233 19.337 7.187C19.7783 8.21167 19.9993 9.316 20 10.5C20 11.75 19.796 12.95 19.388 14.1C18.98 15.25 18.4213 16.3167 17.712 17.3C17.0027 18.2833 16.161 19.175 15.187 19.975C14.213 20.775 13.1507 21.45 12 22ZM11.475 15.975C11.7583 15.975 12 15.875 12.2 15.675C12.4 15.475 12.5 15.2333 12.5 14.95C12.5 14.6667 12.4 14.425 12.2 14.225C12 14.025 11.7583 13.925 11.475 13.925C11.1917 13.925 10.95 14.025 10.75 14.225C10.55 14.425 10.45 14.6667 10.45 14.95C10.45 15.2333 10.55 15.475 10.75 15.675C10.95 15.875 11.1917 15.975 11.475 15.975ZM10.75 12.8H12.25C12.25 12.3 12.3 11.95 12.4 11.75C12.5 11.55 12.8167 11.1833 13.35 10.65C13.65 10.35 13.9 10.025 14.1 9.675C14.3 9.325 14.4 8.95 14.4 8.55C14.4 7.7 14.1127 7.06233 13.538 6.637C12.9633 6.21167 12.284 5.99933 11.5 6C10.7667 6 10.15 6.20433 9.65 6.613C9.15 7.02167 8.8 7.51733 8.6 8.1L10 8.65C10.0833 8.36667 10.2417 8.08767 10.475 7.813C10.7083 7.53833 11.05 7.40067 11.5 7.4C11.95 7.39933 12.2877 7.52433 12.513 7.775C12.7383 8.02567 12.8507 8.30067 12.85 8.6C12.85 8.88333 12.7667 9.13767 12.6 9.363C12.4333 9.58833 12.2333 9.81733 12 10.05C11.4167 10.55 11.0627 10.946 10.938 11.238C10.8133 11.53 10.7507 12.0507 10.75 12.8Z"
                  fill="white"
                />
              </svg>
              <button>Connect With Us</button>
              {modalOpen && <ContactUsModal closeModal={closeModal} />}
            </div>
          </div>
        </div>

        {/* Partner Network Image container */}
        <div className="col-span-12 mt-5 lg:mt-0  lg:col-span-5 flex justify-center items-center">
          <div className="relative flex  h-fit  p-5">
            {/* SVG -right top gradient border */}
            <svg
              className="rotate-[180deg] absolute top-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="169"
              height="169"
              viewBox="0 0 169 169"
              fill="none"
            >
              <line
                x1="2.41406"
                y1="168.272"
                x2="2.41406"
                y2="0.130997"
                stroke="url(#paint0_linear_1179_2086)"
                stroke-width="4"
              />
              <line
                x1="1"
                y1="166.272"
                x2="168.335"
                y2="166.272"
                stroke="url(#paint1_linear_1179_2086)"
                stroke-width="4"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_2086"
                  x1="4.91406"
                  y1="168.272"
                  x2="4.91406"
                  y2="0.130997"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DF4133" />
                  <stop offset="0.824" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1179_2086"
                  x1="1"
                  y1="168.772"
                  x2="168.335"
                  y2="168.772"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DF4133" />
                  <stop offset="0.824" />
                </linearGradient>
              </defs>
            </svg>

            {/* <div style={{backgroundImage: `url(${parterData[partnerDataIndex]?.imageUrl})`}} className={` mr-[2px] flex flex-col justify-end items-end rounded-[16px] h-full w-full bg-cover bg-no-repeat`}> 
                <p className="bg-black/80 text-white flex justify-center items-center text-[21px] leading-[28px] font-[400] font-sans h-[65px] w-[98.5%] mb-[6px] rounded-b-[16px]">
                    {parterData[partnerDataIndex]?.name}
                </p>
            </div> */}
            <div className={`h-full w-full`}>
              <Image
                src={parterData[partnerDataIndex].imageUrl}
                alt={parterData[partnerDataIndex].name}
                width={440}
                height={280}
              />
              <p className="bg-black/80 absolute bottom-[18px] left-[25px] right-[25px] text-white flex justify-center items-center text-[16px] sm:text-[21px] leading-[28px] font-[400] font-sans h-[40px] text-nowrap sm:text-wrap sm:h-[65px] mb-[6px] rounded-b-[16px]">
                {parterData[partnerDataIndex]?.name}
              </p>
            </div>

            {/* SVG bottom left gradient border */}
            <svg
              className=" absolute bottom-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              width="169"
              height="169"
              viewBox="0 0 169 169"
              fill="none"
            >
              <line
                x1="2.41406"
                y1="168.272"
                x2="2.41406"
                y2="0.130997"
                stroke="url(#paint0_linear_1179_2086)"
                stroke-width="4"
              />
              <line
                x1="1"
                y1="166.272"
                x2="168.335"
                y2="166.272"
                stroke="url(#paint1_linear_1179_2086)"
                stroke-width="4"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_2086"
                  x1="4.91406"
                  y1="168.272"
                  x2="4.91406"
                  y2="0.130997"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DF4133" />
                  <stop offset="0.824" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1179_2086"
                  x1="1"
                  y1="168.772"
                  x2="168.335"
                  y2="168.772"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DF4133" />
                  <stop offset="0.824" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default OurTeamPage;
