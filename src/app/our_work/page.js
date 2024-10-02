"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
// import "./globals.css";
import ContactUsModal from "../contact-us-modal/contact-us-modal";
import Image from "next/image";

const Section = ({ title, description, imageUrl, bgColor }) => (
  <div className="mt-8 p-[40px] md:w-[900px] w-[400px]  bg-white   flex gap-[32px] flex-col md:flex-row border-b-2 border-solid border-gray-700 rounded-xl shadow-xs ">
    <img src={imageUrl} className="" alt="dtm-1" />
    <div className="gap-[32px]">
      <h1 className="font-Poppins font-semibold text-[27px] text-[#083E6F] leading-[32.4px]">
        {title}
      </h1>
      <p className="text-[#4B4B4B] font-Poppins font-medium text-base leading-[28px] pt-4">
        {description}
      </p>
    </div>
  </div>
);

{
  /* our works images */
}
function OurWorkPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const scrollimages = [
    {
      bigImage: "/images/our-workpage-big-1.png",
      smallImage: "/images/our-workpage-small-1.png",
    },
    {
      bigImage: "/images/our-workpage-big-2.png",
      smallImage: "/images/our-workpage-small-2.png",
    },
    {
      bigImage: "/images/our-workpage-big-3.png",
      smallImage: "/images/our-workpage-small-3.png",
    },
    {
      bigImage: "/images/our-workpage-big-4.png",
      smallImage: "/images/our-workpage-small-4.png",
    },
  ];

  {
    /* scrolling images and content */
  }
  const sections = [
    {
      title: "Space Intelligence",
      description:
        "plays a crucial role in national security, scientific exploration, and commercial activities in space. It involves various methods of data gathering, such as satellite imagery, signals intelligence (SIGINT), and human intelligence (HUMINT), to monitor and understand developments in space. ",
      imageUrl: "images/dtm-1.png",
    },
    {
      title: "Ground Truth Observations",
      description:
        "Ground truth observations refer to data collected through direct, physical measurements or observations in the real world, typically used as a reference or benchmark for evaluating the accuracy or performance of models, algorithms, or remote sensing technologies.",
      imageUrl: "images/dtm-2.png",
    },
    {
      title: "UAV- Drones / Balloons",
      description:
        "Unmanned Aerial Vehicles (UAVs), commonly known as drones, and unmanned balloons are types of unmanned aerial systems (UAS) used for various purposes, including reconnaissance, surveillance, data collection, and scientific research. UAVs are aircraft that operate without a human pilot on board. ",
      imageUrl: "images/dtm-3.png",
    },
    {
      title: "Data Centre & DevOps",
      description:
        "A data center is a facility that houses computer systems and associated components, such as storage systems, networking equipment, and servers, as well as the infrastructure necessary for their operation, including power supplies, cooling systems, and security measures. ",
      imageUrl: "images/dtm-4.png",
    },
    {
      title: "Digital Twin & Dashboard",
      description:
        "A digital twin is a virtual representation or digital replica of a physical object, system, or process. It encompasses both the physical aspects (such as structure, components, and behavior) and the digital components (such as data, algorithms, and simulations) of the real-world entity it represents. ",
      imageUrl: "images/dtm-5.png",
    },
  ];

  function openModal() {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === scrollimages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run this effect only once on mount

  const scrollViewRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // console.log('SELECTED INDEX :', selectedIndex);
  return (
    <div>
      <Navbar bgcolor={"#252525"} currentPage={"our_work"} />
      <div className=" mt-12 lg:px-[104px] py-8 p-[34px]   ">
        <div className="w-fit grid md:grid-cols-12 h-fit  gap-5 lg:gap-0 py-[60px] ">
          {/* images */}
          <div className="col-span-12 md:col-span-6 flex  items-center">
            <div className=" relative p-[30px]">
              <svg
                className="absolute top-0 left-0"
                xmlns="http://www.w3.org/2000/svg"
                width="195"
                height="196"
                viewBox="0 0 195 196"
                fill="none"
              >
                <line
                  y1="2.97729"
                  x2="194.883"
                  y2="2.97729"
                  stroke="url(#paint0_linear_1079_1783)"
                  stroke-width="4"
                />
                <line
                  x1="2"
                  y1="1"
                  x2="2"
                  y2="195.883"
                  stroke="url(#paint1_linear_1079_1783)"
                  stroke-width="4"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1079_1783"
                    x1="0"
                    y1="5.47729"
                    x2="194.883"
                    y2="5.47729"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DF4133" />
                    <stop offset="0.824" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1079_1783"
                    x1="-0.5"
                    y1="1"
                    x2="-0.5"
                    y2="195.883"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DF4133" />
                    <stop offset="0.824" />
                  </linearGradient>
                </defs>
              </svg>
              <img
                src={scrollimages[currentIndex].bigImage}
                alt="big image"
                className=""
              />
              <img
                src={scrollimages[currentIndex].smallImage}
                className="absolute  -bottom-[30px] w-[50%]  right-[110px] lg:-right-[40px]  "
                alt="small image"
              />
            </div>
          </div>

          {/* <div className="lg:col-span-2"></div> */}
          {/* Our Work content */}
          <div className="col-span-12  md:col-span-5  flex flex-col text-black relative">
            {/* Heading */}
            <div className="flex justify-start items-center">
              <h2 className="font-[700]  text-[27px] text-nowrap  mr-3 leading-[150%] mt-9">
                Our Works
              </h2>
              <div className="h-[4px] w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)] mt-9"></div>
            </div>

            {/* Content */}
            <div className="text-black font-[400] flex flex-col h-3/4 gap-6 mt-[28px] ">
              {/* Changed `class` to `className` */}
              <p>
                Process and analyze satellite imagery and other remote sensing
                data to monitor environmental changes, land use, and natural
                disasters. Develop algorithms and tools for image processing,
                feature extraction, and classification.
              </p>
              <p>
                Manage geospatial data and create interactive maps and spatial
                analyses to visualize and communicate information effectively.
              </p>
              <p>
                Geospatial data can be collected from various sources, including
                satellites, aerial surveys, GPS devices, and ground-based
                sensors. This data may include information about terrain, land
                use, population density, environmental factors, and
                infrastructure.
              </p>
            </div>
            {/* Connect with us button */}
            <div className=" md:pb-8 mt-4 ">
              <div
                className="flex  bg-[#083E6F] gap-2 w-fit p-[16px] text-white rounded-[8px] text-[21px] font-semibold leading-[120%] "
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
        </div>

        {/* Hr line */}
        <hr className="h-0.5 mt-8 bg-[#cecece] mb-[70px]" />

        {/* Client Proposed Content */}

        <div className="flex flex-col gap-[80px] ">
          <div className="grid grid-cols-1 md:grid-cols-2  md:place-items-start place-items-center">
            {/* Image */}
            <Image
              src={"/images/end-to-end-weather-intelligence.jpeg"}
              width={450}
              height={450}
              alt="End-to-End Weather Intelligence"
              className=" my-auto rounded-[20px]"
            />
            {/* Content */}
            <div className="flex flex-col ">
              <div className="flex justify-start items-center">
                <h2 className="font-[700]  text-[25px] text-wrap md:text-nowrap  mr-3 leading-[150%] mt-[36px] md:mt-[0px] ">
                  End-to-End Weather Intelligence
                </h2>
                {/* <div className="h-[4px] md:block hidden w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)] mt-9"></div> */}
              </div>
              {/* <h1 className="">End-to-End Weather Intelligence</h1> */}
              <p className="text-black font-[400] flex flex-col h-3/4 gap-6 mt-[8px]">
                From comprehensive, real-time environmental data to
                exceptionally accurate AI-driven forecasts, Antarik Space offers
                tailored weather intelligence solutions for governments,
                companies, and humanitarian efforts worldwide.
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-start place-items-center">
              {/* Image */}
              <Image
                src={"/images/ai-based-forecasts.jpeg"}
                width={450}
                height={450}
                alt="End-to-End Weather Intelligence"
                className="rounded-[20px] "
              />
              {/* Content */}
              <div className="flex flex-col ">
                <div className="flex justify-start items-center">
                  <h2 className="font-[700]  text-[25px] text-nowrap  mr-3 leading-[150%] mt-[36px] md:mt-[0px] ">
                    AI-Based Forecasts
                  </h2>
                  {/* <div className="h-[4px] w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)] mt-9"></div> */}
                </div>
                {/* <h1 className="">End-to-End Weather Intelligence</h1> */}
                <p className="text-black font-[400] flex flex-col h-3/4 gap-6 mt-[8px]">
                  Weather forecasts are critical for every country, community,
                  and industry, including energy, aviation, agriculture,
                  insurance, logistics, and more.
                </p>
                <ul className=" list-disc text-black font-[400] flex flex-col h-3/4 gap-2 mt-[18px]">
                  <li>
                    <span className="font-[600]">Advanced AI Forecasting:</span>{" "}
                    Our cutting-edge AI-driven forecasting model provides
                    accurate predictions for wind speed, temperature, humidity,
                    precipitation, and other key weather parameters.
                  </li>
                  <li>
                    <span className="font-[600]"> High Precision:</span> Our AI
                    model outperforms conventional forecasting models in
                    accuracy, reducing errors and providing more reliable
                    forecasts.
                  </li>
                  <li>
                    <span className="font-[600]">Fast and Efficient:</span>{" "}
                    Capable of generating a 10-day forecast in short time using
                    advanced computational techniques.
                  </li>

                  <li>
                    <span className="font-[600]">
                      {" "}
                      Scalable Data Integration:
                    </span>{" "}
                    Continuously improves with increasing amounts of historical
                    data and real-time observations from our comprehensive data
                    collection network, including satellite data, ground
                    stations, and atmospheric soundings.
                  </li>
                  <li>
                    <span className="font-[600]"> Custom Integrations:</span>{" "}
                    Offers tailored solutions and real-time API access for
                    seamless integration into various applications and services.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-start place-items-center">
              {/* Image */}
              <Image
                src={"/images/data-as-service.jpeg"}
                width={450}
                height={450}
                alt="End-to-End Weather Intelligence"
                className="rounded-[20px] "
              />
              {/* Content */}
              <div className="flex flex-col ">
                <div className="flex justify-start items-center">
                  <h2 className="font-[700]  text-[25px] text-nowrap  mr-3 leading-[150%] mt-[36px] md:mt-[0px] ">
                    Data as a Service
                  </h2>
                  {/* <div className="h-[4px] w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)] mt-9"></div> */}
                </div>
                {/* <h1 className="">End-to-End Weather Intelligence</h1> */}
                <p className="text-black font-[400] flex flex-col h-3/4 gap-6 mt-[8px]">
                  Better weather observations, especially in the atmosphere, are
                  essential for improving all types of weather forecasting
                  models.
                </p>
                <ul className=" list-disc text-black font-[400] flex flex-col gap-2 mt-[18px]">
                  <li>
                    <span className="font-[600]"> Access to Unique Data:</span>{" "}
                    We provide access to otherwise uncaptured atmospheric data
                    at scale, including over oceans and the Earth’s most remote
                    places, for better short- and long-term planetary
                    understanding.
                  </li>
                  <li>
                    <span className="font-[600]"> Global Data Collection:</span>{" "}
                    Through our global network, we can sustainably gather data
                    including pressure, wind speed and direction, temperature,
                    and humidity.
                  </li>
                  <li>
                    <span className="font-[600]">Autonomous Navigation:</span>{" "}
                    Our drones and weather balloons autonomously navigate to
                    target locations and can gather data at various altitudes,
                    taking numerous vertical profiles during flight.
                  </li>

                  <li>
                    <span className="font-[600]">Safety and Compliance:</span>{" "}
                    Our operations are safe for aircraft, fully compliant with
                    regulations, and maintain 24/7 control over our autonomously
                    directed constellation.
                  </li>
                  <li>
                    <span className="font-[600]"> Easy Access:</span> Our data
                    is accessible via an easy-to-use proprietary software
                    platform, as well as API integrations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-start place-items-center">
              {/* Image */}
              <Image
                src={"/images/Global warning Systems.jpg"}
                width={450}
                height={450}
                alt="End-to-End Weather Intelligence"
                className="rounded-[20px] "
              />
              {/* Content */}
              <div className="flex flex-col ">
                <div className="flex justify-start items-center">
                  <h2 className="font-[700]  text-[25px] text-nowrap  mr-3 leading-[150%] mt-[36px] md:mt-[0px] ">
                    Global Warning Systems
                  </h2>
                  {/* <div className="h-[4px] w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)] mt-9"></div> */}
                </div>
                {/* <h1 className="">End-to-End Weather Intelligence</h1> */}
                <p className="text-black font-[400] flex flex-col h-3/4 gap-6 mt-[8px]">
                  Antarik Space is dedicated to supporting the UN's mission to
                  provide early warning systems for everyone on Earth within
                  five years. Utilizing advanced monitoring, forecasting, and
                  alerting technologies powered by the first commercial
                  multi-sensor weather satellite constellation, we deliver
                  real-time, high-value weather and climate products to sectors
                  like emergency response, agriculture, energy, and health.
                </p>
                <p className="text-black font-[400] flex flex-col h-3/4 gap-6 mt-[8px]">
                  Our AI and machine learning enhance weather prediction
                  accuracy and timeliness, identifying emerging patterns and
                  potential hazards. Collaborating with local governments and
                  international organizations, we ensure accessible and
                  actionable information for vulnerable regions.
                </p>
                <p className="text-black font-[400] flex flex-col h-3/4 gap-6 mt-[8px]">
                  We also address climate change impacts by offering insights
                  for long-term resilience planning and empower communities
                  through global partnerships and local capacity building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default OurWorkPage;
