"use client";
import Image from "next/image";
import Link from "next/link";
import SolutionsPopup from "./solutions_nav_pop_up";
import Menu from "./menu";
import { useState, useEffect } from "react";

function Navbar({ bgcolor, isVisible, currentPage }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // This is for the mobile click funcitonality of the target icon
  const [showSolutionsPopUp, setShowSolutionsPopUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  function handleSolutionShowPopUp() {
    setShowSolutionsPopUp(!showSolutionsPopUp);
  }
  return (
    <>
      {/* Desktop Navbar */}
      <div
        className="fixed top-0 left-0 right-0  z-50  "
        style={{ backgroundColor: bgcolor }}
      >
        {/* Change the background color from transparent to color when scrolling is started. */}
        <div
          className={`relative  flex transition  duration-300 justify-between  lg:justify-between ${
            isScrolled ? "bg-[#252525] shadow-lg" : "bg-transparent"
          }`}
        >
          {/* Menu display */}
          {showMenu && (
            <div className="absolute top-0 right-0 md:left-0 md:bottom-0">
              {console.log("menu displayed")}
              <Menu handleShowMenu={handleShowMenu} />
            </div>
          )}

          {/* Anatrik Logo Container */}
          <Link href={"/"}>
            <div className="flex  h-full  flex-col items-center justify-center pl-[24px] lg:pl-[104px] ">
              <Image
                src="/images/Logo.png"
                width={91}
                height={45}
                alt="Company Logo"
              />
              <div className=" flex font-sans md:flex-row flex-col items-center gap-1 px-1 text-white uppercase font-[700] leading-[120%] text-[12px] md:text-[14px]">
                <p>Antarik</p>
                <span className="font-[400] mx-auto text-[8px] font-sans -mt-1 md:mt-0 md:text-[12px] leading-[120%]">
                  Space
                </span>
              </div>
            </div>
          </Link>

          <div className="flex gap-10">
            {/* Desktop Navbar components */}
            <div className=" hidden lg:flex gap-3  ">
              {/* Home */}
              <Link
                className="flex group h-full items-end gap-[16px] justify-center px-[14px] py-[24px] "
                href={"/"}
                style={{
                  borderBottom: currentPage
                    ? "4px solid transparent "
                    : ` ${
                        isScrolled ? "4px solid #DC6100" : "4px solid #252525"
                      }`,
                  color: currentPage ? "#DC6100" : "#252525",
                }}
              >
                <p
                  className={`text-[18px] ${
                    isScrolled
                      ? "group-hover:text-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:text-[#DC6100]"
                            : "group-hover:text-[#252525]"
                        }`
                  } font-[500] leading-[120%] text-center ${
                    currentPage
                      ? "text-white"
                      : `${isScrolled ? "text-[#DC6100]" : "text-[#252525]"}`
                  }`}
                >
                  Home
                </p>
              </Link>

              {/* About Us */}
              <Link
                className="flex group h-full items-end gap-[16px] justify-center px-[14px] py-[24px] "
                href={"/about-us"}
                style={{
                  borderBottom:
                    currentPage === "about-us"
                      ? "4px solid #DC6100"
                      : "4px solid transparent",
                  color: currentPage === "about-us" ? "#DC6100" : "#252525",
                }}
              >
                <p
                  className={`text-[18px] ${
                    isScrolled
                      ? "group-hover:text-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:text-[#DC6100]"
                            : "group-hover:text-[#252525]"
                        }`
                  } font-[500] leading-[120%] text-center ${
                    currentPage === "about-us"
                      ? `${isScrolled ? "text-[#DC6100]" : "text-[#DC6100]"}`
                      : "text-white"
                  }`}
                >
                  About Us
                </p>
              </Link>

              {/* Solutions */}
              <div
                className="flex flex-nowrap  relative group h-full items-end  gap-[16px]  px-[10px] py-[24px] "
                style={{
                  borderBottom:
                    currentPage === "solutions"
                      ? "4px solid #DC6100"
                      : "4px solid transparent",
                  color: currentPage === "solutions" ? "#DC6100" : "white",
                }}
              >
                <p
                  className={`flex w-full  ${
                    isScrolled
                      ? "group-hover:text-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:text-[#DC6100]"
                            : "group-hover:text-[#252525]"
                        }`
                  } items-center justify-around text-[18px] font-[500]  leading-[120%] text-center ${
                    currentPage === "solutions"
                      ? `${isScrolled ? "text-[#DC6100]" : "text-[#DC6100]"}`
                      : "text-white"
                  } `}
                >
                  Solutions
                  <svg
                    className="w-[20px] ml-2   h-[20px] flex-shrink group-hover:rotate-180 transition-all duration-500 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill=""
                    style={{ transform: isVisible ? "rotate(180deg)" : "" }}
                  >
                    <path
                      className={`${
                        isScrolled
                          ? "group-hover:fill-[#DC6100]"
                          : `${
                              currentPage
                                ? "group-hover:fill-[#DC6100]"
                                : "group-hover:fill-[#252525]"
                            }`
                      }`}
                      d="M3.02795 6.65024C2.93095 6.747 2.85398 6.86195 2.80147 6.9885C2.74895 7.11506 2.72192 7.25073 2.72192 7.38774C2.72192 7.52476 2.74895 7.66042 2.80147 7.78698C2.85398 7.91353 2.93095 8.02848 3.02795 8.12524L9.95295 15.0502C10.03 15.1275 10.1216 15.1888 10.2224 15.2306C10.3232 15.2724 10.4313 15.2939 10.5405 15.2939C10.6496 15.2939 10.7577 15.2724 10.8585 15.2306C10.9593 15.1888 11.0509 15.1275 11.128 15.0502L18.053 8.12524C18.4613 7.71691 18.4613 7.05857 18.053 6.65024C17.6446 6.24191 16.9863 6.24191 16.578 6.65024L10.5363 12.6836L4.49462 6.64191C4.09462 6.24191 3.42795 6.24191 3.02795 6.65024Z"
                      fill="white"
                      style={{
                        fill: currentPage === "solutions" ? "#DC6100" : "",
                      }}
                    />
                  </svg>
                </p>
                <div
                  className="hidden absolute top-[4.5rem] -left-[230px] group-hover:block"
                  style={{ display: isVisible ? "none" : "" }}
                >
                  <SolutionsPopup />
                </div>
              </div>

              {/* Our Work */}
              {/* Remove border-b-4 and border-transparent when trying to make the below link active */}
              {/* Refer to About Us section above and make the corresponding changes that are required. */}
              <Link
                className="flex border-b-4 border-transparent group h-full items-end gap-[16px] justify-center px-[14px] py-[24px] "
                href={"/our_work"}
                style={{
                  borderBottom:
                    currentPage === "our_work"
                      ? "4px solid #DC6100"
                      : "4px solid transparent",
                  color: currentPage === "our_work" ? "#DC6100" : "#252525",
                }}
              >
                <p
                  className={`text-[18px] ${
                    isScrolled
                      ? "group-hover:text-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:text-[#DC6100]"
                            : "group-hover:text-[#252525]"
                        }`
                  } font-[500] leading-[120%] text-center ${
                    currentPage === "our_work"
                      ? `${isScrolled ? "text-[#DC6100]" : "text-[#DC6100]"}`
                      : "text-white"
                  }`}
                >
                  Our Work
                </p>
              </Link>

              {/* Our Team */}
              {/* Remove border-b-4 and border-transparent when trying to make the below link active */}
              {/* Refer to About Us section above and make the corresponding changes that are required. */}
              <Link
                className="flex group  h-full items-end  gap-[16px] justify-center px-[14px] py-[24px] "
                href={"/our-team"}
                style={{
                  borderBottom:
                    currentPage === "our-team"
                      ? "4px solid #DC6100"
                      : "4px solid transparent",
                  color: currentPage === "our-team" ? "#DC6100" : "#252525",
                }}
              >
                <p
                  // className={`text-[18px] ${
                  //   isScrolled
                  //     ? "group-hover:text-[#DC6100]"
                  //     : `${
                  //         currentPage
                  //           ? "group-hover:text-[#DC6100]"
                  //           : "group-hover:text-[#252525]"
                  //       }`
                  // } font-[500] leading-[120%] text-center text-white`}
                  className={`text-[18px] ${
                    isScrolled
                      ? "group-hover:text-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:text-[#DC6100]"
                            : "group-hover:text-[#252525]"
                        }`
                  } font-[500] leading-[120%] text-center ${
                    currentPage === "our-team"
                      ? `${isScrolled ? "text-[#DC6100]" : "text-[#DC6100]"}`
                      : "text-white"
                  }`}
                >
                  Our Team
                </p>
              </Link>

              {/* Contact Us */}
              <Link
                className="flex group h-full items-end  gap-[16px] justify-center px-[14px] py-[24px] "
                href={"/contact-us"}
                style={{
                  borderBottom:
                    currentPage === "contact-us"
                      ? "4px solid #DC6100"
                      : "4px solid transparent",
                  color: currentPage === "contact-us" ? "#DC6100" : "#252525",
                }}
              >
                <p
                  className={`text-[18px] ${
                    isScrolled
                      ? "group-hover:text-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:text-[#DC6100]"
                            : "group-hover:text-[#252525]"
                        }`
                  } font-[500] leading-[120%] text-center ${
                    currentPage === "contact-us"
                      ? `${isScrolled ? "text-[#DC6100]" : "text-[#DC6100]"}`
                      : "text-white"
                  }`}
                >
                  Contact Us
                </p>
              </Link>
            </div>

            {/* Menu Toggle button for both mobile and desktop view */}
            <div
              onClick={handleShowMenu}
              className="flex group h-full items-end  cursor-pointer gap-[16px] justify-center pr-[24px] lg:pr-[104px] pt-[24px] pb-[24px]"
            >
              <svg
                className="lg:hidden block"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect width="32" height="32" rx="4" fill="white" />
                <path
                  d="M24.06 10H7.94C7.42085 10 7 10.4209 7 10.94V11.06C7 11.5791 7.42085 12 7.94 12H24.06C24.5791 12 25 11.5791 25 11.06V10.94C25 10.4209 24.5791 10 24.06 10Z"
                  fill="#083E6F"
                />
                <path
                  d="M8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17Z"
                  fill="#083E6F"
                />
                <path
                  d="M24.06 15H11.94C11.4209 15 11 15.4209 11 15.94V16.06C11 16.5791 11.4209 17 11.94 17H24.06C24.5791 17 25 16.5791 25 16.06V15.94C25 15.4209 24.5791 15 24.06 15Z"
                  fill="#083E6F"
                />
                <path
                  d="M24.06 20H7.94C7.42085 20 7 20.4209 7 20.94V21.06C7 21.5791 7.42085 22 7.94 22H24.06C24.5791 22 25 21.5791 25 21.06V20.94C25 20.4209 24.5791 20 24.06 20Z"
                  fill="#083E6F"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className={`hidden lg:block ${
                  isScrolled
                    ? "group-hover:fill-[#DC6100]"
                    : `${
                        currentPage
                          ? "group-hover:fill-[#DC6100]"
                          : "group-hover:fill-[#252525]"
                      }`
                }`}
              >
                <path
                  className={`${
                    isScrolled
                      ? "group-hover:fill-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:fill-[#DC6100]"
                            : "group-hover:fill-[#252525]"
                        }`
                  }`}
                  d="M6.66667 21.6668C7.58714 21.6668 8.33333 20.9206 8.33333 20.0002C8.33333 19.0797 7.58714 18.3335 6.66667 18.3335C5.74619 18.3335 5 19.0797 5 20.0002C5 20.9206 5.74619 21.6668 6.66667 21.6668Z"
                  fill="white"
                />
                <path
                  className={`${
                    isScrolled
                      ? "group-hover:fill-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:fill-[#DC6100]"
                            : "group-hover:fill-[#252525]"
                        }`
                  }`}
                  d="M33.4334 18.3335H13.2334C12.3682 18.3335 11.6667 19.0349 11.6667 19.9002V20.1002C11.6667 20.9654 12.3682 21.6668 13.2334 21.6668H33.4334C34.2987 21.6668 35.0001 20.9654 35.0001 20.1002V19.9002C35.0001 19.0349 34.2987 18.3335 33.4334 18.3335Z"
                  fill="white"
                />
                <path
                  className={`${
                    isScrolled
                      ? "group-hover:fill-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:fill-[#DC6100]"
                            : "group-hover:fill-[#252525]"
                        }`
                  }`}
                  d="M33.4333 26.6665H6.56667C5.70142 26.6665 5 27.3679 5 28.2332V28.4332C5 29.2984 5.70142 29.9998 6.56667 29.9998H33.4333C34.2986 29.9998 35 29.2984 35 28.4332V28.2332C35 27.3679 34.2986 26.6665 33.4333 26.6665Z"
                  fill="white"
                />
                <path
                  className={`${
                    isScrolled
                      ? "group-hover:fill-[#DC6100]"
                      : `${
                          currentPage
                            ? "group-hover:fill-[#DC6100]"
                            : "group-hover:fill-[#252525]"
                        }`
                  }`}
                  d="M33.4333 10H6.56667C5.70142 10 5 10.7014 5 11.5667V11.7667C5 12.6319 5.70142 13.3333 6.56667 13.3333H33.4333C34.2986 13.3333 35 12.6319 35 11.7667V11.5667C35 10.7014 34.2986 10 33.4333 10Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Moblie view solutions icon */}
      {isScrolled && (
        <div
          onClick={handleSolutionShowPopUp}
          className="lg:hidden fixed flex justify-center items-center z-50 bg-white rounded-[50%] h-[50px] w-[50px] bottom-[80px] right-[24px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M15.9998 2.66675C17.1945 2.66675 18.3518 2.82408 19.4532 3.11875L16.6185 5.95208C16.4035 6.16799 16.2138 6.40777 16.0532 6.66675H15.9998C14.1539 6.66675 12.3494 7.21414 10.8145 8.2397C9.27966 9.26526 8.08338 10.7229 7.37696 12.4284C6.67054 14.1338 6.48571 16.0104 6.84584 17.8209C7.20597 19.6314 8.09488 21.2945 9.40017 22.5997C10.7055 23.905 12.3685 24.7939 14.179 25.1541C15.9895 25.5142 17.8661 25.3294 19.5715 24.623C21.277 23.9165 22.7347 22.7203 23.7602 21.1854C24.7858 19.6505 25.3332 17.846 25.3332 16.0001V15.9467C25.5892 15.7867 25.8292 15.5987 26.0465 15.3801L28.8812 12.5467C29.1758 13.6481 29.3332 14.8054 29.3332 16.0001C29.3332 23.3641 23.3638 29.3334 15.9998 29.3334C8.63584 29.3334 2.6665 23.3641 2.6665 16.0001C2.6665 8.63608 8.63584 2.66675 15.9998 2.66675ZM15.4478 9.35608C15.4478 10.4907 15.3918 11.6414 15.4532 12.7747L14.7332 13.4947C14.4855 13.7424 14.289 14.0365 14.155 14.3601C14.021 14.6837 13.952 15.0305 13.952 15.3807C13.952 15.731 14.021 16.0778 14.155 16.4014C14.289 16.725 14.4855 17.0191 14.7332 17.2667C14.9808 17.5144 15.2749 17.7109 15.5985 17.8449C15.9221 17.979 16.2689 18.048 16.6192 18.048C16.9694 18.048 17.3163 17.979 17.6399 17.8449C17.9635 17.7109 18.2575 17.5144 18.5052 17.2667L19.2252 16.5467C20.3585 16.6081 21.5078 16.5521 22.6438 16.5521C22.5385 17.8192 22.073 19.0298 21.3023 20.041C20.5315 21.0523 19.4877 21.822 18.2938 22.2595C17.0999 22.697 15.8059 22.7839 14.5642 22.51C13.3226 22.2362 12.1851 21.613 11.286 20.7139C10.387 19.8148 9.76374 18.6774 9.48988 17.4357C9.21603 16.1941 9.30296 14.9 9.74042 13.7061C10.1779 12.5123 10.9476 11.4684 11.9589 10.6976C12.9701 9.9269 14.1807 9.46141 15.4478 9.35608ZM24.6718 2.83608C24.9152 2.93699 25.1232 3.10773 25.2696 3.32676C25.4161 3.54579 25.4943 3.80329 25.4945 4.06675V6.50675H27.9332C28.1968 6.5068 28.4546 6.58503 28.6738 6.73155C28.893 6.87806 29.0638 7.08628 29.1647 7.32987C29.2656 7.57347 29.292 7.84152 29.2406 8.10012C29.1892 8.35873 29.0622 8.59628 28.8758 8.78275L24.1598 13.4934C23.9098 13.7435 23.5708 13.884 23.2172 13.8841H19.9998L17.5625 16.3227C17.3123 16.5729 16.973 16.7135 16.6192 16.7135C16.2654 16.7135 15.926 16.5729 15.6758 16.3227C15.4256 16.0726 15.2851 15.7332 15.2851 15.3794C15.2851 15.0256 15.4256 14.6863 15.6758 14.4361L18.1145 12.0001V8.78141C18.1144 8.60611 18.1488 8.4325 18.2158 8.27051C18.2829 8.10853 18.3812 7.96136 18.5052 7.83741L23.2185 3.12408C23.405 2.9375 23.6426 2.81043 23.9013 2.75892C24.16 2.70742 24.4281 2.73381 24.6718 2.83475"
              fill="#252525"
            />
          </svg>
        </div>
      )}
      {showSolutionsPopUp && (
        <div className="lg:hidden fixed z-50 bottom-[64px] right-[0px]">
          <SolutionsPopup handleSolutionShowPopUp={handleSolutionShowPopUp} />
        </div>
      )}

      {/* Moblie view Bottom Navbar */}
      {isScrolled && (
        <div className="lg:hidden z-50 fixed bottom-0 flex items-center  px-8 right-0 left-0  h-[64px] rounded-tl-[8px] rounded-tr-[8px] bg-white">
          <div className="flex  w-full justify-between items-center ">
            <Link href={"/"}>
              <div className="flex flex-col items-center justify-center">
                <div
                  className=" w-[40px] rounded-[10px] h-[30px] flex items-center justify-center"
                  style={{
                    backgroundColor: currentPage ? "" : "#083E6F",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.99961 18.9997V13.9997H13.9996V18.9997C13.9996 19.5497 14.4496 19.9997 14.9996 19.9997H17.9996C18.5496 19.9997 18.9996 19.5497 18.9996 18.9997V11.9997H20.6996C21.1596 11.9997 21.3796 11.4297 21.0296 11.1297L12.6696 3.59973C12.2896 3.25973 11.7096 3.25973 11.3296 3.59973L2.96961 11.1297C2.62961 11.4297 2.83961 11.9997 3.29961 11.9997H4.99961V18.9997C4.99961 19.5497 5.44961 19.9997 5.99961 19.9997H8.99961C9.54961 19.9997 9.99961 19.5497 9.99961 18.9997Z"
                      fill={currentPage ? "#747474" : "white"}
                    />
                  </svg>
                </div>
                <p
                  className={`text-[10px] font-[500] leading-[120%] ${
                    currentPage ? "text-[#747474]" : "text-[#083E6F]"
                  }`}
                >
                  Home
                </p>
              </div>
            </Link>

            <Link href={"/about-us"}>
              <div className="flex flex-col items-center justify-center">
                <div
                  className=" w-[40px] rounded-[10px] h-[30px] flex items-center justify-center"
                  style={{
                    backgroundColor:
                      currentPage === "about-us" ? "#083E6F" : "",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13 9H11V7H13M13 17H11V11H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                      fill={currentPage === "about-us" ? "white" : "#747474"}
                    />
                  </svg>
                </div>

                <p
                  className={`text-[10px] font-[500] leading-[120%] ${
                    currentPage === "about-us"
                      ? "text-[#083E6F]"
                      : "text-[#747474]"
                  }  `}
                >
                  About
                </p>
              </div>
            </Link>

            <Link href={"/our_work"}>
              <div className="flex flex-col items-center justify-center">
                <div
                  className=" w-[40px] rounded-[10px] h-[30px] flex items-center justify-center"
                  style={{
                    backgroundColor:
                      currentPage === "our_work" ? "#083E6F" : "",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.6045 2.259C10.7355 2.253 10.8673 2.25 11 2.25C12.7265 2.25 14.336 2.75 15.692 3.613C14.692 5.147 13.4925 6.3455 12.874 6.9165C12.388 7.3645 12.389 8.108 12.8025 8.5715C13.4919 9.33729 13.9444 10.2867 14.105 11.3045C14.281 11.2068 14.4597 11.1158 14.641 11.0315C16.5275 10.1515 18.873 9.8525 20.957 10.0665C20.486 4.9815 16.208 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21H11.086C11.1063 20.941 11.131 20.8832 11.16 20.8265C11.3553 20.4382 11.5557 20.0685 11.761 19.7175C11.5079 19.7391 11.254 19.7499 11 19.75C8.616 19.75 6.455 18.7965 4.8765 17.25C4.8765 17.232 4.87567 17.2138 4.874 17.1955C4.7515 15.791 4.8535 14.979 5.028 14.511C5.184 14.091 5.395 13.9495 5.618 13.8695C5.752 13.821 5.9055 13.791 6.0955 13.765L6.277 13.7425C6.417 13.7255 6.578 13.706 6.714 13.6825C7.1585 13.604 7.738 13.4235 8.06 12.7795C8.3335 12.2325 8.3135 11.653 8.24 11.1705C8.203 10.9255 8.148 10.683 8.0965 10.4635L8.0765 10.376C8.0315 10.1835 7.9905 10.011 7.9595 9.842C7.8855 9.44 7.896 9.204 7.9655 9.0505C8.017 8.9355 8.1565 8.7485 8.673 8.6005C9.8395 8.2675 10.6645 7.7755 11.1715 7.127C11.69 6.463 11.8165 5.71 11.7315 4.989C11.6475 4.2845 11.3615 3.5955 11.038 2.993C10.901 2.738 10.753 2.4915 10.6045 2.259ZM21.4745 11.1425C19.403 10.8075 16.951 11.0575 15.0635 11.9375C14.1155 12.38 13.2765 12.9975 12.7145 13.8155C12.1435 14.647 11.882 15.6535 12.051 16.8055C12.1306 17.3742 12.3086 17.9248 12.577 18.4325C13.5073 17.0621 14.6363 15.8377 15.927 14.7995C16.3463 14.4624 16.7847 14.1497 17.24 13.863C17.4109 13.756 17.5853 13.6548 17.763 13.5595L17.772 13.5555L17.7745 13.554L17.7765 13.553C17.8948 13.4946 18.0315 13.4854 18.1566 13.5274C18.2817 13.5693 18.3851 13.659 18.4444 13.7769C18.5036 13.8948 18.5139 14.0314 18.4729 14.1568C18.4319 14.2822 18.343 14.3864 18.2255 14.4465L18.221 14.4485C18.1848 14.4673 18.1489 14.4868 18.1135 14.507C18.035 14.5505 17.9185 14.6185 17.7695 14.711C17.3475 14.9771 16.9412 15.2672 16.5525 15.58C15.2267 16.6475 14.0827 17.9229 13.165 19.3565C13.1533 19.3745 13.1408 19.3917 13.1275 19.408C12.7345 20.0095 12.3759 20.6329 12.0535 21.275C12.0234 21.3337 12.0053 21.3978 12.0001 21.4636C11.9949 21.5294 12.0028 21.5955 12.0233 21.6582C12.0438 21.7209 12.0765 21.779 12.1196 21.829C12.1626 21.879 12.2151 21.92 12.2741 21.9496C12.333 21.9793 12.3972 21.9969 12.463 22.0016C12.5289 22.0063 12.5949 21.9979 12.6575 21.9769C12.7201 21.956 12.7778 21.9228 12.8275 21.8794C12.8772 21.836 12.9178 21.7832 12.947 21.724C13.2456 21.1293 13.5769 20.5515 13.9395 19.9935C14.3668 20.3039 14.8389 20.5473 15.3395 20.7155C16.102 20.9725 16.901 21.053 17.623 20.9655C18.337 20.88 19.028 20.623 19.516 20.1505C20.1525 19.5335 20.525 18.953 20.733 18.339C20.9355 17.74 20.9655 17.1505 20.9845 16.5765L20.9905 16.3955C21.024 15.303 21.0635 14.01 21.947 12.012C21.9857 11.9246 22.0038 11.8294 22 11.7339C21.9961 11.6384 21.9704 11.545 21.9248 11.461C21.8793 11.377 21.815 11.3045 21.737 11.2492C21.659 11.1939 21.5694 11.1572 21.475 11.142"
                      fill={currentPage === "our_work" ? "white" : "#747474"}
                    />
                  </svg>
                </div>
                <p
                  className={`text-[10px] font-[500] leading-[120%] ${
                    currentPage === "our_work"
                      ? "text-[#083E6F]"
                      : "text-[#747474]"
                  }  `}
                >
                  Our Work
                </p>
              </div>
            </Link>

            <Link href={"/our-team"}>
              <div className="flex flex-col items-center justify-center">
                <div
                  className=" w-[40px] rounded-[10px] h-[30px] flex items-center justify-center"
                  style={{
                    backgroundColor:
                      currentPage === "our-team" ? "#083E6F" : "",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.5 3C11.1064 3 10.7167 3.07752 10.3531 3.22813C9.98948 3.37875 9.6591 3.5995 9.3808 3.8778C9.1025 4.1561 8.88175 4.48648 8.73113 4.8501C8.58052 5.21371 8.503 5.60343 8.503 5.997C8.503 6.39057 8.58052 6.78029 8.73113 7.1439C8.88175 7.50752 9.1025 7.8379 9.3808 8.1162C9.6591 8.3945 9.98948 8.61525 10.3531 8.76587C10.7167 8.91648 11.1064 8.994 11.5 8.994C12.2949 8.994 13.0572 8.67825 13.6192 8.1162C14.1812 7.55415 14.497 6.79185 14.497 5.997C14.497 5.20215 14.1812 4.43985 13.6192 3.8778C13.0572 3.31575 12.2949 3 11.5 3ZM18.25 4.497C17.6533 4.497 17.081 4.73405 16.659 5.15601C16.2371 5.57797 16 6.15026 16 6.747C16 7.34374 16.2371 7.91603 16.659 8.33799C17.081 8.75995 17.6533 8.997 18.25 8.997C18.8467 8.997 19.419 8.75995 19.841 8.33799C20.2629 7.91603 20.5 7.34374 20.5 6.747C20.5 6.15026 20.2629 5.57797 19.841 5.15601C19.419 4.73405 18.8467 4.497 18.25 4.497ZM4.75 4.497C4.15326 4.497 3.58097 4.73405 3.15901 5.15601C2.73705 5.57797 2.5 6.15026 2.5 6.747C2.5 7.34374 2.73705 7.91603 3.15901 8.33799C3.58097 8.75995 4.15326 8.997 4.75 8.997C5.34674 8.997 5.91903 8.75995 6.34099 8.33799C6.76295 7.91603 7 7.34374 7 6.747C7 6.15026 6.76295 5.57797 6.34099 5.15601C5.91903 4.73405 5.34674 4.497 4.75 4.497ZM7 11.9865C7.00277 11.5905 7.16203 11.2117 7.44304 10.9326C7.72404 10.6536 8.10399 10.497 8.5 10.497H14.5C14.8978 10.497 15.2794 10.655 15.5607 10.9363C15.842 11.2176 16 11.5992 16 11.997V16.497C16.0004 16.9691 15.9265 17.4384 15.781 17.8875C15.4489 18.9056 14.7647 19.7719 13.8513 20.3308C12.9379 20.8898 11.8551 21.1049 10.7974 20.9374C9.73976 20.7699 8.77642 20.2309 8.08042 19.417C7.38442 18.6032 7.00135 17.5679 7 16.497V11.9865ZM5.5 11.997C5.5 11.4495 5.6455 10.938 5.902 10.497H2.5C2.10218 10.497 1.72064 10.655 1.43934 10.9363C1.15804 11.2176 1 11.5992 1 11.997V15.747C0.999796 16.361 1.15034 16.9656 1.43841 17.5078C1.72648 18.0499 2.14326 18.5131 2.65216 18.8566C3.16106 19.2 3.74651 19.4133 4.35708 19.4776C4.96766 19.5419 5.5847 19.4554 6.154 19.2255C5.72319 18.38 5.49906 17.4444 5.5 16.4955V11.997ZM17.5 11.997V16.497C17.5 17.4795 17.2645 18.4065 16.846 19.2255C17.4153 19.4554 18.0323 19.5419 18.6429 19.4776C19.2535 19.4133 19.8389 19.2 20.3478 18.8566C20.8567 18.5131 21.2735 18.0499 21.5616 17.5078C21.8497 16.9656 22.0002 16.361 22 15.747V11.997C22 11.5992 21.842 11.2176 21.5607 10.9363C21.2794 10.655 20.8978 10.497 20.5 10.497H17.098C17.353 10.938 17.5 11.4495 17.5 11.997Z"
                      fill={currentPage === "our-team" ? "white" : "#747474"}
                    />
                  </svg>
                </div>
                <p className={`text-[10px] font-[500] leading-[120%] ${
                    currentPage === "our-team"
                      ? "text-[#083E6F]"
                      : "text-[#747474]"
                  }  `}>
                  Team
                </p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
export default Navbar;
