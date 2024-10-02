"use client";
import SolutionNav from "../solutionNav";
import Data from "../data";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "@/app/footer/footer";
import Navbar from "@/app/navbar/navbar";
import ContactUsModal from "@/app/contact-us-modal/contact-us-modal";
const SolutionDetails = ({ params }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [displayDetails, setDisplayDetails] = useState("");
  const [showElement, setShowElement] = useState([]);

  function openModal() {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  const handleDropDown = (id) => {
    let cpyMultiple = [...showElement];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setShowElement(cpyMultiple);
  };
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const index = Data.findIndex((elemt) => elemt.name === params.solutionName);
    setDisplayDetails(index);
  }, [params]);

  useEffect(() => {
    let timer = setInterval(() => {
      setImageIndex((prevState) => {
        if (prevState === Data[displayDetails]?.bigImage.length - 1) {
          return 0;
        }
        return prevState + 1;
      });
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [imageIndex, displayDetails]);

  return (
    <div className="overflow-x-hidden">
      <Navbar
        bgcolor={"#252525"}
        isVisible={"false"}
        currentPage={"solutions"}
      />
      <div className="flex ">
        <div className="bg-[#F4F4F4] hidden md:block pt-24">
          <SolutionNav navName={params.solutionName} />
        </div>

        <div className="pb-5 pl-[24px] pr-[24px] lg:pr-[104px] pt-24">
          <div className="  py-5 flex flex-col lg:flex-row gap-[24px] ">
            {/* image container */}
            <div className="lg:w-[50%]  flex flex-col items-center gap-2 lg:p-0">
              <Image
                src={Data[displayDetails]?.bigImage[imageIndex]}
                width={402}
                height={260}
                alt="image"
                className="w-11/12 lg:w-[402px] "
              />
              <div className=" hidden max-w-[410px] flex-wrap md:flex w-full  md:justify-around ">
                {Data[displayDetails]?.smallImages.map((image, index) => {
                  return (
                    <img
                      src={image}
                      style={
                        index === imageIndex
                          ? { filter: "brightness(100%)" }
                          : { filter: "brightness(50%)" }
                      }
                    />
                  );
                })}
              </div>
            </div>

            <div className="lg:w-1/2   ">
              <div className="flex gap-2 items-center ">
                <h3 className="text-[27px]  font-[700] leading-[120%] text-[#252525] text-nowrap">
                  {Data[displayDetails]?.heading}
                </h3>
                <div className=" hidden sm:block h-[4px] w-[50%] bg-gradient-to-r from-[#DF4133] to-[#fff] bg-[linear-gradient(90deg, #DF4133 0%, #FFF 82.4%)]"></div>
              </div>
              <p className="mt-3  text-[16px] leading-[28px] font-[400] text-[#4B4B4B] ">
                {Data[displayDetails]?.paragraph}
              </p>
              <ul className="list-disc text-[16px]	pl-6 flex flex-col text-[#4B4B4B] gap-3 mt-4">
                {Data[displayDetails]?.listItems.map((item) => {
                  return <li className="text-[16px] ">{item}</li>;
                })}
              </ul>
              <button className=" text-sm w-[190px] h-[40px] border-[2px] rounded-[8px] text-[#083E6F] border-[#083E6F] transition-all duration-300 normal-case text-center font-[600]  mt-14">
                Download Page
              </button>{" "}
            </div>
          </div>

          <div className=" pb-5">
            <hr className="" />
            <div className="my-4">
              <p className="mb-5 text-[#4B4B4B]  text-[16px] leading-[30px]">
                {Data[displayDetails]?.pargraph2}
              </p>
              <p className="mb-5 text-[#4B4B4B]  text-[16px] leading-[30px]">
                {Data[displayDetails]?.paragraph3}
              </p>
              <p className="mb-5 text-[#4B4B4B]  text-[16px] leading-[30px]">
                {Data[displayDetails]?.paragraph4}
              </p>
            </div>
          </div>


          {/* Client Proposed changes */}

          <div className="flex flex-col my-[20px]">
            {Data[displayDetails]?.subContent?.map((item, index) => {
              return (
                <div className="my-[10px]" key={index}>
                  <h2 className="font-[800] text-[#4B4B4B]  text-[18px] text-nowrap  mr-3 leading-[150%] mt-[36px] md:mt-[0px] ">
                    {item.heading}
                  </h2>
                  <p className=" text-[#4B4B4B]  text-[16px] leading-[30px]">
                    {item?.para}
                  </p>
                  <ul className=" list-disc text-[#4B4B4B] font-[400] list-inside flex flex-col gap-2 mt-[10px]">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Only for Climate Change  */}
          <div className="flex flex-col gap-[30px] my-[20px]  w-11/12 h-fit">
            {Data[displayDetails]?.dropDowns?.map((data, index) => {
              return (
                <div className="flex gap-4 flex-col shadow-xl hover:shadow-lg p-5  rounded-md">
                  <div
                    className="flex items-center justify-between group"
                    onClick={() => handleDropDown(index)}
                  >
                    <div className="flex  gap-4 ">
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

                      <h1 className="width-[396px] group-hover:text-[#083E6F] font-[600]">
                        {data.heading}
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
                  </div>
                  {showElement.indexOf(index) !== -1 && (
                    <>
                      {data?.paraList?.map((para, paraIndex) => {
                        return (
                          <p
                            key={paraIndex}
                            className=" text-[#4B4B4B]  text-[16px] leading-[30px]"
                          >
                            {para}
                          </p>
                        );
                      })}
                      <ul className=" list-disc text-[#4B4B4B] font-[400] list-inside flex flex-col gap-2 mt-[10px]">
                        {data?.points?.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* FAQ Section To modify FAQs goto data.js page */}
          {/* Use different handleDropDown for the FAQs */}
          {/* Modal */}
          <div className="flex relative  justify-start">
            {/* <div className="flex flex-col gap-[10px]   w-11/12 h-fit">
              {Data[displayDetails]?.faq.map((data, index) => {
                return (
                  <div className="flex gap-4 flex-col hover:shadow-lg p-5  rounded-md">
                    <div
                      className="flex items-center justify-between group"
                      onClick={() => handleDropDown(index)}
                    >
                      <div className="flex  gap-4 ">
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

                        <h1 className="width-[396px] group-hover:text-[#083E6F] font-[600]">
                          {data.question}
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
                    </div>
                    {showElement.indexOf(index) !== -1 && (
                      <>
                        <ol className="list-decimal list-inside	flex flex-col gap-3 leading-[32px]">
                          {data.answer.map((ans) => {
                            return <li>{ans}</li>;
                          })}
                        </ol>
                      </>
                    )}
                  </div>
                );
              })}
            </div> */}

            {/* Modal Container */}
            <div
              className="flex mb-10  bg-[#083E6F] gap-2 w-fit py-[16px] px-[24px] text-white rounded-[8px] text-[21px] font-semibold leading-[120%] "
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
              {/* {modalOpen && (
                <div className="fixed inset-0" onMouseLeave={closeModal}>
                  <ContactUsModal closeModal={closeModal} />
                </div>
              )} */}
              {modalOpen && <ContactUsModal closeModal={closeModal} />}
            </div>
          </div>
        </div>
      </div>

      {/* <ContactUsModal/> */}

      <Footer />
    </div>
  );
};

export default SolutionDetails;
