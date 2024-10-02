import Image from "next/image";
import Link from "next/link";

const SolutionsPopup = () => {
  return (
    <div className="p-4 bg-white text-black shadow-xl w-[610px] h-[350px] relative mt-5 ml-6 rounded-lg">
      <svg
        className="absolute -top-4  right-2/4 "
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
      >
        <path d="M14 0L27.8564 24H0.143594L14 0Z" fill="white" />
      </svg>

      <div className="text-black flex flex-col justify-around  h-full">
        <div className="flex gap-7 mb-2">
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image
              width={60}
              height={50}
              alt="Agriculture"
              src="/images/agriculture_nav_pop_up.png"
            />
            <h4 className="text-[16px] font-[500] leading-[120%] ">
              Agriculture
            </h4>
          </div>

          <div className="flex  items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image
              src="/images/insurance_industry_nav_pop_up.png"
              width={60}
              height={50}
              alt="Insurance Industry"
            />
            <h4 className="text-[16px] font-[500] leading-[120%] ">
              Insurance Industry
            </h4>
          </div>
        </div>

        <div className="flex gap-7 mb-2">
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image
              width={60}
              height={50}
              alt="Agriculture"
              src="/images/maritime_nav_pop_up.png"
            />
            <h4 className="text-[16px] font-[500] leading-[120%] ">
              Maritime Industry
            </h4>
          </div>
          <div className="flex  items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image
              src="/images/aviation_nav_pop_up.png"
              width={60}
              height={50}
              alt="Insurance Industry"
            />
            <h4 className="text-[16px] font-[500] leading-[120%] ">Aviation</h4>
          </div>
        </div>

        <div className="flex gap-7 mb-2">
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image
              width={60}
              height={50}
              alt="Agriculture"
              src="/images/energy_sector_nav_pop_up.png"
            />
            <h4 className="text-[16px] font-[500] leading-[120%] ">
              Energy Sector
            </h4>
          </div>
          <div className="flex  items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image
              src="/images/urban_planning_nav_pop_up.png"
              width={60}
              height={50}
              alt="Insurance Industry"
            />
            <h4 className="text-[16px] font-[500] leading-[120%] ">
              Urban Planning 
            </h4>
          </div>
        </div>

        <div className="flex gap-7 mb-2">
          <div className="flex items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image
              width={60}
              height={50}
              alt="Agriculture"
              src="/images/climate_change_nav_pop_up.png"
            />
            <h4 className="text-[16px] font-[500] leading-[120%] ">
              Climate Change
            </h4>
          </div>
          <div className="flex  items-center text-[#4B4B4B] hover:text-[#083E6F] w-[274px] pt-[8px] pr-[16px] pb-[8px] pl-[8px] gap-[16px] rounded-[8px] hover:shadow-lg">
            <Image
              src="/images/disasters_nav_pop_up.png"
              width={60}
              height={50}
              alt="Insurance Industry"
            />
            <h4 className="text-[16px] font-[500] leading-[120%] ">
              Disasters
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPopup;
