'use client'
import Image from "next/image";
import Link from "next/link";
import SolutionsPopup from "./solutions_nav_pop_up";
import Menu from "./menu";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  function handleShowMenu(){
    setShowMenu(!showMenu)
  }
  return (
    <div className="relative bg-black flex justify-center ">
      {showMenu && <div className="absolute top-0 left-0 bottom-0">{console.log('menu displayed')}<Menu handleShowMenu={handleShowMenu}/></div>}
          <Link href={"/"}>
            <div className="flex flex-col items-center ">
              <Image
                src={"/Logo.png"}
                width={91}
                height={45}
                alt="Company Logo"
              />
              <p className="text-white uppercase font-[700] leading-[120%] text-[14px]">
                Anatarik &nbsp;
                <span className="font-[400] text-[12px] leading-[120%]">
                  Space
                </span>
              </p>
            </div>
          </Link>
          <div className="flex ml-20">
            <Link
              className="flex group h-full items-center w-[153px] gap-[16px] justify-center px-[14px] py-[24px] rounded-[8px]"
              href={"#"}
            >
              <p className="text-[18px] group-hover:text-[#252525] font-[500] leading-[120%] text-center text-white">
                Home
              </p>
            </Link>
            <Link
              className="flex group h-full items-center w-[153px] gap-[16px] justify-center px-[14px] py-[24px] rounded-[8px]"
              href={"#"}
            >
              <p className="text-[18px] group-hover:text-[#252525] font-[500] leading-[120%] text-center text-white">
                About Us
              </p>
            </Link>



            
            <div
              className="flex flex-nowrap  relative group h-full items-center w-[153px] gap-[16px]  px-[10px] py-[24px] rounded-[8px]"
            >
              <p className="flex w-full group-hover:text-[#252525] items-center justify-around text-[18px] font-[500] leading-[120%] text-center text-white">
                Solutions
                <svg
                  className="w-[20px]   h-[20px] flex-shrink group-hover:rotate-180 transition-all duration-500 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill=""
                >
                  <path
                    className="group-hover:fill-[#252525]"
                    d="M3.02795 6.65024C2.93095 6.747 2.85398 6.86195 2.80147 6.9885C2.74895 7.11506 2.72192 7.25073 2.72192 7.38774C2.72192 7.52476 2.74895 7.66042 2.80147 7.78698C2.85398 7.91353 2.93095 8.02848 3.02795 8.12524L9.95295 15.0502C10.03 15.1275 10.1216 15.1888 10.2224 15.2306C10.3232 15.2724 10.4313 15.2939 10.5405 15.2939C10.6496 15.2939 10.7577 15.2724 10.8585 15.2306C10.9593 15.1888 11.0509 15.1275 11.128 15.0502L18.053 8.12524C18.4613 7.71691 18.4613 7.05857 18.053 6.65024C17.6446 6.24191 16.9863 6.24191 16.578 6.65024L10.5363 12.6836L4.49462 6.64191C4.09462 6.24191 3.42795 6.24191 3.02795 6.65024Z"
                    fill="white"
                  />
                </svg>
              </p>
              <div className="hidden absolute top-[4.5rem] -left-[230px] group-hover:block"><SolutionsPopup/></div>
            </div>
           
           
           
           
           
           
            <Link
              className="flex group h-full items-center w-[153px] gap-[16px] justify-center px-[14px] py-[24px] rounded-[8px]"
              href={"#"}
            >
              <p className="text-[18px] font-[500] group-hover:text-[#252525] leading-[120%] text-center text-white">
                Our Team
              </p>
            </Link>
            <Link
              className="flex group h-full items-center w-[153px] gap-[16px] justify-center px-[14px] py-[24px] rounded-[8px]"
              href={"#"}
            >
              <p className="text-[18px] font-[500] group-hover:text-[#252525] leading-[120%] text-center text-white">
                Log In
              </p>
            </Link>
          </div>
          <div onClick={handleShowMenu} className="flex group h-full items-center w-[153px] cursor-pointer gap-[16px] justify-center px-[14px] py-[24px] rounded-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                className="group-hover:fill-[#252525]"
                d="M6.66667 21.6668C7.58714 21.6668 8.33333 20.9206 8.33333 20.0002C8.33333 19.0797 7.58714 18.3335 6.66667 18.3335C5.74619 18.3335 5 19.0797 5 20.0002C5 20.9206 5.74619 21.6668 6.66667 21.6668Z"
                fill="white"
              />
              <path
                className="group-hover:fill-[#252525]"
                d="M33.4334 18.3335H13.2334C12.3682 18.3335 11.6667 19.0349 11.6667 19.9002V20.1002C11.6667 20.9654 12.3682 21.6668 13.2334 21.6668H33.4334C34.2987 21.6668 35.0001 20.9654 35.0001 20.1002V19.9002C35.0001 19.0349 34.2987 18.3335 33.4334 18.3335Z"
                fill="white"
              />
              <path
                className="group-hover:fill-[#252525]"
                d="M33.4333 26.6665H6.56667C5.70142 26.6665 5 27.3679 5 28.2332V28.4332C5 29.2984 5.70142 29.9998 6.56667 29.9998H33.4333C34.2986 29.9998 35 29.2984 35 28.4332V28.2332C35 27.3679 34.2986 26.6665 33.4333 26.6665Z"
                fill="white"
              />
              <path
                className="group-hover:fill-[#252525]"
                d="M33.4333 10H6.56667C5.70142 10 5 10.7014 5 11.5667V11.7667C5 12.6319 5.70142 13.3333 6.56667 13.3333H33.4333C34.2986 13.3333 35 12.6319 35 11.7667V11.5667C35 10.7014 34.2986 10 33.4333 10Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
  )
}
export default Navbar;
