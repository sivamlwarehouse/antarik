"use client";

import { useState, useEffect } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import ContactUsModal from "../contact-us-modal/contact-us-modal";
function AboutUs() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showElement1, setShowElement1] = useState(false);
  const [showElement2, setShowElement2] = useState(false);
  const [showElement3, setShowElement3] = useState(false);
  const [showElement4, setShowElement4] = useState(false);

  function openModal() {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div className=" overflow-x-hidden">
      <Navbar bgcolor={"#252525"} currentPage={"about-us"} />
      <div className="flex justify-center items-center px-[24px] lg:px-[104px]  py-[100px] overflow-y-auto  overflow-x-hidden ">
        <div className=" h-full w-full flex justify-center mt-2">
          <div className="w-fit grid grid-cols-12 h-fit  gap-5 lg:gap-0">
            <div className="col-span-12 lg:col-span-4 flex justify-center items-center ">
              <div className=" relative  ">
                <svg
                  className="absolute top-0 left-0"
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
                <img
                  className="w-[325px] h-[487px] scale-[0.85] "
                  src="/digital.png"
                />
                <svg
                  className="absolute bottom-0 right-0"
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
            <div className=" lg:col-span-2  flex justify-center">
              <hr className="hidden lg:block w-[2px] h-full bg-[#CECECE]" />
            </div>
            {/* About us content */}
            <div className="col-span-12  lg:col-span-6  flex flex-col  text-black">
              <div className="flex justify-start items-center">
                <h2 className="font-[700]  text-[27px] text-nowrap  mr-3 leading-[150%]">
                  About Us
                </h2>
                <div className="h-[4px] w-[200px] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
              </div>
              <div className="text-black font-[400] flex flex-col h-3/4 justify-between gap-6 ">
                <p class="text-[16px] mt-5">
                  Antarik Space is leading the development of a Digital Twin
                  Earth for Early warning related to weather and climate,
                  focusing on the end-to-end monitoring and prediction of
                  various meteorological and climate hazards, alongside
                  environmental and social changes. <br />
                  <br />
                  This initiative is the first of its kind worldwide and
                  integrates satellite observations with gold standard NWP
                  models, artificial intelligence, aerial drones/balloons
                  soundings, and live on-ground sensors to create a multi-tiered
                  early warning weather and climate sensing data service belt.
                  <br />
                  <br />
                  We offer comprehensive, early warning systems, Climate &
                  Weather risk analysis, and near real-time earth-decision
                  intelligence solutions designed to address global
                  sustainability challenges. Our technology excels in revealing
                  new, hidden details about the Earth.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex relative lg:flex-row flex-col justify-between pt-10  px-[24px] lg:items-center lg:px-[104px] gap-10 pb-10">
        {/* FAQ Section */}
        <div className="flex flex-col gap-[10px]   lg:w-[743px] h-fit">
          <div className="flex gap-4 flex-col hover:shadow-lg p-5  rounded-md">
            <button
              className="flex items-center justify-between group"
              onClick={() => setShowElement1(!showElement1)}
            >
              <div className="flex  gap-4">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-[#083E6F]"
                    d="M19.1818 4.40204V18.402C19.1819 18.4943 19.1564 18.5846 19.1083 18.662C19.0602 18.7393 18.9916 18.8003 18.9109 18.8376L11 22.5L3.08909 18.8386C3.00841 18.8013 2.93983 18.7403 2.89173 18.6629C2.84363 18.5856 2.81807 18.4953 2.81818 18.403V4.40204H1V2.5H21V4.40204H19.1818ZM7.36364 12.0102V13.9123H14.6364V12.0102H7.36364ZM7.36364 8.20613V10.1082H14.6364V8.20613H7.36364Z"
                    fill="#4B4B4B"
                  />
                </svg>

                <h1
                  onClick={() => setShowElement1(!showElement1)}
                  className="width-[396px] group-hover:text-[#083E6F] font-[600]"
                >
                  More About Antarik Earth Intelligence
                </h1>
              </div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-[#083E6F]"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.1854 16.145C12.9064 16.4281 12.5264 16.5889 12.1289 16.592C11.7314 16.5951 11.3489 16.4403 11.0655 16.1616L5.36344 10.55C5.22309 10.4118 5.11135 10.2472 5.03458 10.0658C4.95781 9.88437 4.91753 9.6896 4.91604 9.49261C4.91455 9.29561 4.95187 9.10025 5.02587 8.91768C5.09988 8.73511 5.20912 8.56891 5.34736 8.42856C5.4856 8.2882 5.65013 8.17646 5.83156 8.09969C6.01299 8.02292 6.20776 7.98264 6.40475 7.98115C6.60174 7.97966 6.7971 8.01698 6.97967 8.09098C7.16224 8.16499 7.32845 8.27423 7.4688 8.41247L12.1006 12.9724L16.6605 8.34062C16.7977 8.19622 16.9623 8.08058 17.1446 8.00045C17.327 7.92032 17.5234 7.87732 17.7226 7.87393C17.9217 7.87055 18.1196 7.90687 18.3045 7.98076C18.4895 8.05465 18.6579 8.16464 18.7999 8.3043C18.9419 8.44397 19.0546 8.61052 19.1316 8.79423C19.2085 8.97794 19.2481 9.17514 19.248 9.37432C19.248 9.57349 19.2082 9.77066 19.1311 9.95431C19.054 10.138 18.9411 10.3044 18.799 10.444L13.1864 16.146L13.1854 16.145Z"
                  fill="#4B4B4B"
                />
              </svg>
            </button>
            {showElement1 && (
              <p>
                Our integrated platform is designed to enable proactive
                decision-making by offering users the tools necessary to make
                informed choices, safeguard against environmental threats, and
                foster a brighter, sustainable future in the regions we serve.
                Lastly, we plan to establish a vertically integrated solution by
                building our own multi-sensor imaging virtual satellite
                constellation for weather situational awareness, making us one
                of the few private entities worldwide to undertake such an
                initiative.
              </p>
            )}
          </div>

          <div className="flex gap-4 flex-col hover:shadow-lg p-5  rounded-md">
            <button
              className="flex items-center justify-between group"
              onClick={() => setShowElement2(!showElement2)}
            >
              <div className="flex gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-[#083E6F]"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 22H19C20.126 22 20.926 21.4544 21.412 20.7044C21.86 20.0122 22 19.2156 22 18.6667V12C22 11.7053 21.8946 11.4227 21.7071 11.2143C21.5196 11.006 21.2652 10.8889 21 10.8889H18V5.33333C18 4.44928 17.6839 3.60143 17.1213 2.97631C16.5587 2.35119 15.7956 2 15 2H5C4.20435 2 3.44129 2.35119 2.87868 2.97631C2.31607 3.60143 2 4.44928 2 5.33333V18.6667C2 19.2144 2.14 20.0122 2.588 20.7044C3.074 21.4556 3.874 22 5 22ZM19 13.1111C19.2652 13.1111 19.5196 13.2282 19.7071 13.4365C19.8946 13.6449 20 13.9275 20 14.2222V18.6667C20 18.9614 19.8946 19.244 19.7071 19.4523C19.5196 19.6607 19.2652 19.7778 19 19.7778C18.7348 19.7778 18.4804 19.6607 18.2929 19.4523C18.1054 19.244 18 18.9614 18 18.6667V14.2222C18 13.9275 18.1054 13.6449 18.2929 13.4365C18.4804 13.2282 18.7348 13.1111 19 13.1111ZM9 9.77778C9 9.48309 9.10536 9.20048 9.29289 8.9921C9.48043 8.78373 9.73478 8.66667 10 8.66667C10.2652 8.66667 10.5196 8.78373 10.7071 8.9921C10.8946 9.20048 11 9.48309 11 9.77778C11 10.0725 10.8946 10.3551 10.7071 10.5635C10.5196 10.7718 10.2652 10.8889 10 10.8889C9.73478 10.8889 9.48043 10.7718 9.29289 10.5635C9.10536 10.3551 9 10.0725 9 9.77778ZM10 6.44444C9.20435 6.44444 8.44129 6.79563 7.87868 7.42076C7.31607 8.04588 7 8.89372 7 9.77778C7 10.6618 7.31607 11.5097 7.87868 12.1348C8.44129 12.7599 9.20435 13.1111 10 13.1111C10.7956 13.1111 11.5587 12.7599 12.1213 12.1348C12.6839 11.5097 13 10.6618 13 9.77778C13 8.89372 12.6839 8.04588 12.1213 7.42076C11.5587 6.79563 10.7956 6.44444 10 6.44444ZM7 15.3333C6.73478 15.3333 6.48043 15.4504 6.29289 15.6588C6.10536 15.8671 6 16.1498 6 16.4444C6 16.7391 6.10536 17.0217 6.29289 17.2301C6.48043 17.4385 6.73478 17.5556 7 17.5556H13C13.2652 17.5556 13.5196 17.4385 13.7071 17.2301C13.8946 17.0217 14 16.7391 14 16.4444C14 16.1498 13.8946 15.8671 13.7071 15.6588C13.5196 15.4504 13.2652 15.3333 13 15.3333H7Z"
                    fill="#4B4B4B"
                  />
                </svg>

                <h1
                  onClick={() => setShowElement2(!showElement2)}
                  className="width-[396px] group-hover:text-[#083E6F] font-[600]"
                >
                  Antarik Earth Intelligence, innovation on the global
                </h1>
              </div>
              <svg
                className="group-hover:fill-[#083E6F]"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.1854 16.145C12.9064 16.4281 12.5264 16.5889 12.1289 16.592C11.7314 16.5951 11.3489 16.4403 11.0655 16.1616L5.36344 10.55C5.22309 10.4118 5.11135 10.2472 5.03458 10.0658C4.95781 9.88437 4.91753 9.6896 4.91604 9.49261C4.91455 9.29561 4.95187 9.10025 5.02587 8.91768C5.09988 8.73511 5.20912 8.56891 5.34736 8.42856C5.4856 8.2882 5.65013 8.17646 5.83156 8.09969C6.01299 8.02292 6.20776 7.98264 6.40475 7.98115C6.60174 7.97966 6.7971 8.01698 6.97967 8.09098C7.16224 8.16499 7.32845 8.27423 7.4688 8.41247L12.1006 12.9724L16.6605 8.34062C16.7977 8.19622 16.9623 8.08058 17.1446 8.00045C17.327 7.92032 17.5234 7.87732 17.7226 7.87393C17.9217 7.87055 18.1196 7.90687 18.3045 7.98076C18.4895 8.05465 18.6579 8.16464 18.7999 8.3043C18.9419 8.44397 19.0546 8.61052 19.1316 8.79423C19.2085 8.97794 19.2481 9.17514 19.248 9.37432C19.248 9.57349 19.2082 9.77066 19.1311 9.95431C19.054 10.138 18.9411 10.3044 18.799 10.444L13.1864 16.146L13.1854 16.145Z"
                  fill="#4B4B4B"
                />
              </svg>
            </button>
            {showElement2 && (
              <p>
                Earth Intelligence innovates by deploying end-to-end space
                sovereignty solutions, i.e. including space segment, command and
                control center and aggregative digital platform. The space
                segment integrates advanced functionalities in Artificial
                Intelligence and the development of innovative digital services
                is based on the concept of multi-source data fusion. The
                combination of latest generation optical technologies
                (revolutionary in their miniaturization and performance)
              </p>
            )}
          </div>

          <div className="flex gap-4 flex-col hover:shadow-lg p-5  rounded-md">
            <button
              className="flex items-center justify-between group"
              onClick={() => setShowElement3(!showElement3)}
            >
              <div className="flex  gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="group-hover:fill-[#083E6F]"
                    d="M13 9H11V7H13M13 17H11V11H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                    fill="#4B4B4B"
                  />
                </svg>
                <h1
                  onClick={() => setShowElement3(!showElement3)}
                  className="width-[396px] group-hover:text-[#083E6F] font-[600]"
                >
                  Consolidating information superiority & resource use
                </h1>
              </div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-[#083E6F]"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.1854 16.145C12.9064 16.4281 12.5264 16.5889 12.1289 16.592C11.7314 16.5951 11.3489 16.4403 11.0655 16.1616L5.36344 10.55C5.22309 10.4118 5.11135 10.2472 5.03458 10.0658C4.95781 9.88437 4.91753 9.6896 4.91604 9.49261C4.91455 9.29561 4.95187 9.10025 5.02587 8.91768C5.09988 8.73511 5.20912 8.56891 5.34736 8.42856C5.4856 8.2882 5.65013 8.17646 5.83156 8.09969C6.01299 8.02292 6.20776 7.98264 6.40475 7.98115C6.60174 7.97966 6.7971 8.01698 6.97967 8.09098C7.16224 8.16499 7.32845 8.27423 7.4688 8.41247L12.1006 12.9724L16.6605 8.34062C16.7977 8.19622 16.9623 8.08058 17.1446 8.00045C17.327 7.92032 17.5234 7.87732 17.7226 7.87393C17.9217 7.87055 18.1196 7.90687 18.3045 7.98076C18.4895 8.05465 18.6579 8.16464 18.7999 8.3043C18.9419 8.44397 19.0546 8.61052 19.1316 8.79423C19.2085 8.97794 19.2481 9.17514 19.248 9.37432C19.248 9.57349 19.2082 9.77066 19.1311 9.95431C19.054 10.138 18.9411 10.3044 18.799 10.444L13.1864 16.146L13.1854 16.145Z"
                  fill="#4B4B4B"
                />
              </svg>
            </button>
            {showElement3 && (
              <p>
                In the environmental, security and defense fields, the challenge
                is to have observation satellite data that can respond promptly
                and appropriately to operational issues, while preserving the
                human and technical potential of the players involved. The
                persistent nature of the observation resulting from the high
                frequency of revisit, allows both to consolidate the
                informational superiority and to optimize the decision-making
                process thanks to the development of a complete and accessible
                service, for reduced infrastructure costs.
              </p>
            )}
          </div>

          <div className="flex gap-4 flex-col hover:shadow-lg p-5  rounded-md">
            <button
              className="flex items-center justify-between group"
              onClick={() => setShowElement4(!showElement4)}
            >
              <div className="flex  gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="group-hover:fill-[#083E6F]"
                    d="M15.8919 10.7L17.5946 16L12 12.2L6.40541 16L8.10811 10.8L3 7.3L9.56757 7L12 2L14.4324 7L21 7.3L15.8919 10.7ZM14.4324 19H13.2162V16L12 15L10.7838 16V19H9.56757C8.22973 19 7.13514 19.9 7.13514 21V22H16.8649V21C16.8649 20.4696 16.6086 19.9609 16.1524 19.5858C15.6963 19.2107 15.0776 19 14.4324 19Z"
                    fill="#4B4B4B"
                  />
                </svg>
                <h1
                  onClick={() => setShowElement4(!showElement4)}
                  className="width-[396px] group-hover:text-[#083E6F] font-[600]"
                >
                  The Antarik Earth Intelligence agenda
                </h1>
              </div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-[#083E6F]"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.1854 16.145C12.9064 16.4281 12.5264 16.5889 12.1289 16.592C11.7314 16.5951 11.3489 16.4403 11.0655 16.1616L5.36344 10.55C5.22309 10.4118 5.11135 10.2472 5.03458 10.0658C4.95781 9.88437 4.91753 9.6896 4.91604 9.49261C4.91455 9.29561 4.95187 9.10025 5.02587 8.91768C5.09988 8.73511 5.20912 8.56891 5.34736 8.42856C5.4856 8.2882 5.65013 8.17646 5.83156 8.09969C6.01299 8.02292 6.20776 7.98264 6.40475 7.98115C6.60174 7.97966 6.7971 8.01698 6.97967 8.09098C7.16224 8.16499 7.32845 8.27423 7.4688 8.41247L12.1006 12.9724L16.6605 8.34062C16.7977 8.19622 16.9623 8.08058 17.1446 8.00045C17.327 7.92032 17.5234 7.87732 17.7226 7.87393C17.9217 7.87055 18.1196 7.90687 18.3045 7.98076C18.4895 8.05465 18.6579 8.16464 18.7999 8.3043C18.9419 8.44397 19.0546 8.61052 19.1316 8.79423C19.2085 8.97794 19.2481 9.17514 19.248 9.37432C19.248 9.57349 19.2082 9.77066 19.1311 9.95431C19.054 10.138 18.9411 10.3044 18.799 10.444L13.1864 16.146L13.1854 16.145Z"
                  fill="#4B4B4B"
                />
              </svg>
            </button>
            {showElement4 && (
              <p>
                At Antarik, we are dedicated to harnessing the power of Earth
                observation to foster environmental awareness and scientific
                discovery. Outline your vision for the future of Earth
                observation and your aspirations for the growth and development
                of your website. Discuss upcoming projects, initiatives, or
                advancements that you are working towards.
              </p>
            )}
          </div>

          {/* Connect with us button */}
          <div className="">
            <div
              className="flex mb-10 bg-[#083E6F] gap-2 w-fit py-[16px] px-[24px] text-white rounded-[8px] text-[21px] font-semibold leading-[120%] mt-3 ml-10"
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

        {/* Bottom Image section */}
        <div className="h-fit relative  p-2">
          <svg
            className=" absolute top-0 right-0 rotate-90"
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
          <img
            className="w-[403px] h-[317px] scale-[0.85] "
            src="/circuit-blue.png"
          />
          <svg
            className=" absolute rotate-90 bottom-0 left-0"
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
      <Footer />
    </div>
  );
}

export default AboutUs;
