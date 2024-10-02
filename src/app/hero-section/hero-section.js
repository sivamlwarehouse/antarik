import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/navbar";
// Please use overlow-x-hidden in the parent container in which Hero section is placed
// so the output may be responsive

function HeroSection() {
  return (
    <div className="h-screen flex">
      <div className="flex-grow flex items-center bg-no-repeat bg-[url('/images/hero_page_bg_mobile.png')]  md:bg-[url('/images/hero_page_bg.png')] bg-cover">
        <Navbar />
        {/* Hero content */}
        <div className="  flex flex-col ">
          <div className="mt-20 px-[24px] lg:px-[104px] ">
            <h1 className=" text-[24px] text-white sm:text-[36px] lg:text-[42px] font-[700] lg:font-[600] font-['Libre Caslon Text'] uppercase leading-normal">
              UNLOCK CLIMATE RESILIENCE{" "}
            </h1>
            <p className="text-pretty w-3/4 text-[15px] md:text-[20px] text-white font-[400] leading-[150%]  md:w-3/4">
              Ultra-Precise Weather Forecasting Transformed by AI: Reaching New
              Geographies and Vertical Markets.
            </p>
            <div className="flex gap-[32px] mt-[30px] md:mt-[80px] md:flex-row flex-col items-center">
              <Link href="/contact-us">
                <button className="uppercase w-[140px] sm:w-[192px] h-[52px] bg-[#083E6F] text-white hover:text-[#083E6F] hover:bg-white transition-all duration-300 rounded-[6px] font-[600] text-[16px] text-center ">
                  Get in touch
                </button>
              </Link>
              <Link href="/about-us">
                <button className="w-[140px] sm:w-[192px] h-[52px] border-[2px] rounded-[8px] border-white text-white hover:text-[#083E6F] hover:border-[#083E6F] transition-all duration-300 normal-case text-center font-[600] leading-[120%]">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
