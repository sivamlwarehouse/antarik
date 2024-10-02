
import Image from "next/image";
import Link from "next/link";
const SolutionsPopup = ({handleSolutionShowPopUp}) => {
  return (
    <div className="lg:p-4 bg-white text-black shadow-xl lg:w-[610px] lg:h-[250px] relative lg:mt-5 lg:ml-6 rounded-lg">
      <svg
        className="hidden lg:block absolute -top-4  right-2/4 "
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
      >
        <path d="M14 0L27.8564 24H0.143594L14 0Z" fill="white" />
      </svg>
      {/* Solutions heading */}
      <div className=" lg:hidden flex border-b-2 border-b-[#747474] border-dashed w-full justify-center items-center py-[10px] pr-5">
        <p className="text-[#252525] font-[700] mr-auto ml-auto">Solutions</p>
        <svg
          onClick={handleSolutionShowPopUp}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0ZM12.6 14L9 10.4L5.4 14L4 12.6L7.6 9L4 5.4L5.4 4L9 7.6L12.6 4L14 5.4L10.4 9L14 12.6L12.6 14Z"
            fill="#4B4B4B"
          />
        </svg>
      </div>
      <div className="text-black flex flex-col lg:justify-around  h-full">
        <div className="flex lg:flex-row flex-col  lg:gap-7 mb-2">
         
         
        <Link href={"/solution/environment-and-agriculture"}>

          {/* <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Agriculture" src="/images/agriculture_nav_pop_up.png" />
            <h4 className="text-[16px] font-[500] leading-[120%] ">Agriculture</h4>
          </div> */}
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Agriculture" src="/images/agriculture_nav_pop_up.png" />
            <h4 className="text-[14px] font-[500] leading-[120%] ">Environment & Agriculture</h4>
          </div>
          </Link>

     
          <Link href={"/solution/finance-and-insurance"}>

          {/* <div className="flex  items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image src="/images/insurance_industry_nav_pop_up.png" width={60} height={50} alt="Insurance Industry" />
            <h4 className="text-[16px] font-[500] leading-[120%] ">Insurance Industry</h4>
          </div> */}
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Agriculture" src="/images/insurance_industry_nav_pop_up.png" />
            <h4 className="text-[14px] font-[500] leading-[120%] ">Finance & Insurance</h4>
          </div>
          </Link>

        </div>

        <div className="flex lg:flex-row flex-col  lg:gap-7 mb-2">
          
        <Link href={"/solution/oil-and-gas"}>

          {/* <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Agriculture" src="/images/maritime_nav_pop_up.png" />
            <h4 className="text-[16px] font-[500] leading-[120%] ">Maritime Industry</h4>
          </div> */}
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Agriculture" src="/images/energy_sector_nav_pop_up.png" />
            <h4 className="text-[14px] font-[500] leading-[120%] ">Oil & Gas (Energy)</h4>
          </div>
          </Link>

          <Link href={"/solution/climate-change"}>

          {/* <div className="flex  items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image src="/images/aviation_nav_pop_up.png" width={60} height={50} alt="Insurance Industry" />
            <h4 className="text-[16px] font-[500] leading-[120%] ">Aviation</h4>
          </div> */}
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Agriculture" src="/images/climate_change_nav_pop_up.png" />
            <h4 className="text-[14px] font-[500] leading-[120%] ">Climate Change</h4>
          </div>
          </Link>

        </div>


        <div className="flex  lg:flex-row flex-col  lg:gap-7 mb-2">
        <Link href={"/solution/urban-infrastructure"}>

          {/* <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Agriculture" src="/images/energy_sector_nav_pop_up.png" />
            <h4 className="text-[16px] font-[500] leading-[120%] ">Energy Sector</h4>
          </div> */}
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Urban Infrastructure" src="/images/urban_planning_nav_pop_up.png" />
            <h4 className="text-[14px] font-[500] leading-[120%] ">Urban Infrastructure</h4>
          </div>
          </Link>

          <Link href={"/solution/maritime"}>

          {/* <div className="flex  items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image src="/images/urban_planning_nav_pop_up.png" width={60} height={50} alt="Insurance Industry" />
            <h4 className="text-[16px] font-[500] leading-[120%] ">Urban Planning </h4>
          </div> */}
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Maritime Industry" src="/images/maritime_nav_pop_up.png" />
            <h4 className="text-[14px] font-[500] leading-[120%] ">Maritime Industry</h4>
          </div>
          </Link>

        </div>


        {/* <div className="flex lg:flex-row flex-col  lg:gap-7 mb-2">
        <Link href={"/solution/climate-change"}>

          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image width={60} height={50} alt="Agriculture" src="/images/climate_change_nav_pop_up.png" />
            <h4 className="text-[16px] font-[500] leading-[120%] ">Climate Change</h4>
          </div>
          </Link>

          <Link href={"/solution/disaster"}>

          <div className="flex  items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image src="/images/disasters_nav_pop_up.png" width={60} height={50} alt="Insurance Industry" />
            <h4 className="text-[16px] font-[500] leading-[120%] ">Disasters</h4>
          </div>
          </Link>

        </div> */}

      </div>
    </div>
  );
};

export default SolutionsPopup;



