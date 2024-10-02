"use client";
import { useState, useEffect } from "react";
const ContactUsModal = ({ closeModal }) => {
  const [selectService, setSelectService] = useState("Business Services");
  const dropDownValues = [
    "Agriculture",
    "Maritime Industry",
    "Energy Sector",
    "Climate Change",
    "Insurance Industry",
    "Aviation",
    "Urban Planning",
  ];
  
  function handleOverlayClick(e) {
    closeModal();
  }

  // To stop the click event from reaching the outer contianer
  function handleFormClick(e){
    e.stopPropagation();
  }
  return (
    // <div className="flex justify-center items-center h-screen  " >

    <div
      id="modal-container"
      className="fixed inset-0 flex items-center justify-center overflow-y-scroll  bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white lg:-translate-x-40 lg:translate-y-5    p-8 scale-[0.8] lg:scale-95 z-50   rounded-md "
        onMouseLeave={closeModal}
        onClick={handleFormClick}
        
      >
        <div className="">
          <form className="flex flex-col gap-3  h-fit  rounded-[8px]  ">
            {/* Form Heading */}
            <h1 className="text-[#4B4B4B] font-[700] text-[21px] leading-[120%]">
              Write a Message
            </h1>

            {/* Form description */}
            <p className="text-[#747474] text-[12px] font-[500] leading-[28px] ">
              Feel free to contact us any time. We will get back to you as soon
              as we can!
            </p>

            {/* Full Name input container */}
            <div className="flex items-center bg-[#E6ECF1] p-[13px] gap-[16px] rounded-[4px] cursor-pointer hover:outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.44444 7.94374C8.44444 7.00075 8.81905 6.09638 9.48584 5.42958C10.1526 4.76279 11.057 4.38818 12 4.38818C12.943 4.38818 13.8474 4.76279 14.5142 5.42958C15.181 6.09638 15.5556 7.00075 15.5556 7.94374C15.5556 8.88673 15.181 9.7911 14.5142 10.4579C13.8474 11.1247 12.943 11.4993 12 11.4993C11.057 11.4993 10.1526 11.1247 9.48584 10.4579C8.81905 9.7911 8.44444 8.88673 8.44444 7.94374ZM8.44444 13.2771C7.2657 13.2771 6.13524 13.7453 5.30175 14.5788C4.46825 15.4123 4 16.5428 4 17.7215C4 18.4288 4.28095 19.107 4.78105 19.6071C5.28115 20.1072 5.95942 20.3882 6.66667 20.3882H17.3333C18.0406 20.3882 18.7189 20.1072 19.219 19.6071C19.719 19.107 20 18.4288 20 17.7215C20 16.5428 19.5317 15.4123 18.6983 14.5788C17.8648 13.7453 16.7343 13.2771 15.5556 13.2771H8.44444Z"
                  fill="#A0A0A0"
                />
              </svg>
              <input
                name="fullname"
                placeholder="Full Name*"
                type="text"
                className="text-[12px] font-[400] w-[100%] leading-[120%] outline-none bg-[#E6ECF1] text-[#A0A0A0]  flex-grow self-stretch"
              />
            </div>

            {/* Email and Business services wrapper container */}
            <div className="flex lg:flex-row flex-col gap-[16px]">
              {/* Email input container */}
              <div className="flex lg:w-1/2 items-center bg-[#E6ECF1] p-[13px] gap-[16px] rounded-[4px] cursor-pointer hover:outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clip-path="url(#clip0_685_1027)">
                    <path
                      d="M18.3333 6.66724V14.5547C18.3333 15.1924 18.0897 15.806 17.6522 16.27C17.2148 16.7339 16.6165 17.0132 15.98 17.0506L15.8333 17.0547H4.16663C3.52895 17.0548 2.91536 16.8111 2.45141 16.3737C1.98745 15.9362 1.7082 15.338 1.67079 14.7014L1.66663 14.5547V6.66724L9.53746 11.9147L9.63413 11.9697C9.74805 12.0254 9.87317 12.0543 9.99996 12.0543C10.1268 12.0543 10.2519 12.0254 10.3658 11.9697L10.4625 11.9147L18.3333 6.66724Z"
                      fill="#A0A0A0"
                    />
                    <path
                      d="M15.8334 3.72119C16.7334 3.72119 17.5226 4.19619 17.9626 4.91036L10.0001 10.2187L2.0376 4.91036C2.24654 4.571 2.53361 4.28653 2.87485 4.08068C3.2161 3.87483 3.60162 3.75357 3.99926 3.72702L4.16676 3.72119H15.8334Z"
                      fill="#A0A0A0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_685_1027">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.388184)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  name="fullname"
                  placeholder="Email Address*"
                  type="email"
                  className="text-[12px] font-[400] leading-[120%] outline-none bg-[#E6ECF1] text-[#A0A0A0]  flex-grow self-stretch"
                />
              </div>

              {/* Business Services input container */}
              <div className="group flex relative lg:w-1/2 items-center justify-between bg-[#E6ECF1] p-[13px] gap-[16px] rounded-[4px] cursor-pointer hover:outline">
                <div className="flex gap-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12.9 16.3882H11.1C10.605 16.3882 10.2 15.9382 10.2 15.3882H3.909V19.3882C3.909 20.4882 4.719 21.3882 5.709 21.3882H18.3C19.29 21.3882 20.1 20.4882 20.1 19.3882V15.3882H13.8C13.8 15.9382 13.395 16.3882 12.9 16.3882ZM19.2 7.38818H15.6C15.6 5.17818 13.989 3.38818 12 3.38818C10.011 3.38818 8.4 5.17818 8.4 7.38818H4.8C3.81 7.38818 3 8.28818 3 9.38818V12.3882C3 13.4982 3.801 14.3882 4.8 14.3882H10.2V13.3882C10.2 12.8382 10.605 12.3882 11.1 12.3882H12.9C13.395 12.3882 13.8 12.8382 13.8 13.3882V14.3882H19.2C20.19 14.3882 21 13.4882 21 12.3882V9.38818C21 8.28818 20.19 7.38818 19.2 7.38818ZM10.2 7.38818C10.2 6.28818 11.01 5.38818 12 5.38818C12.99 5.38818 13.8 6.28818 13.8 7.38818H10.191H10.2Z"
                      fill="#A0A0A0"
                    />
                  </svg>
                  <input
                    value={selectService}
                    name="businessServices"
                    className="text-[12px] font-[400] leading-[120%] outline-none bg-[#E6ECF1] text-[#A0A0A0]  flex-grow self-stretch"
                    disabled
                  />
                </div>
                <svg
                  className="group-hover:rotate-[180deg] transition-all duration-300 ease-in-out "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clip-path="url(#clip0_685_767)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.0604 16.4485C12.7791 16.7294 12.3979 16.8872 12.0004 16.8872C11.6029 16.8872 11.2216 16.7294 10.9404 16.4485L5.28236 10.7925C5.1431 10.6532 5.03264 10.4878 4.95729 10.3058C4.88195 10.1238 4.84319 9.92867 4.84324 9.73167C4.84328 9.53467 4.88213 9.33961 4.95756 9.15763C5.03299 8.97564 5.14353 8.81029 5.28286 8.67103C5.4222 8.53176 5.5876 8.4213 5.76962 8.34595C5.95164 8.27061 6.14672 8.23185 6.34372 8.2319C6.54072 8.23195 6.73578 8.27079 6.91776 8.34623C7.09975 8.42166 7.2651 8.53219 7.40436 8.67153L12.0004 13.2675L16.5964 8.67153C16.7347 8.5282 16.9001 8.41385 17.0831 8.33515C17.2661 8.25645 17.4629 8.21498 17.662 8.21316C17.8612 8.21133 18.0587 8.24919 18.2431 8.32453C18.4275 8.39986 18.595 8.51116 18.7359 8.65193C18.8768 8.7927 18.9883 8.96013 19.0638 9.14444C19.1393 9.32874 19.1774 9.52625 19.1757 9.72542C19.1741 9.92458 19.1328 10.1214 19.0543 10.3045C18.9758 10.4875 18.8616 10.6531 18.7184 10.7915L13.0614 16.4495L13.0604 16.4485Z"
                      fill="#A0A0A0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_685_767">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(-1 0 0 -1 24 24.3882)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <ul className="bg-white hidden group-hover:flex w-full absolute top-[55px] left-0 pl-10 list-disc   flex-col py-[10px] rounded-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25);]">
                  {dropDownValues.map((item, index) => {
                    return (
                      <li
                        onClick={() => setSelectService(item)}
                        key={index}
                        className="text-[12px] w-[192px] font-[500] leading-[120%] text-[#4B4B4B] hover:shadow-md p-2 "
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Company name input field  */}
            <div className="flex items-center bg-[#E6ECF1] p-[13px] gap-[16px] rounded-[4px] cursor-pointer hover:outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M11.5 3.38818C9.5116 3.3904 7.60531 4.13613 6.19929 5.4618C4.79328 6.78747 4.00235 8.58483 4 10.4596C3.99818 11.9916 4.5289 13.4819 5.51091 14.7025C5.51091 14.7025 5.71546 14.9564 5.74887 14.993L11.5 21.3882L17.2539 14.9898C17.2839 14.9558 17.4891 14.7025 17.4891 14.7025L17.4898 14.7005C18.4711 13.4805 19.0016 11.9909 19 10.4596C18.9977 8.58483 18.2067 6.78747 16.8007 5.4618C15.3947 4.13613 13.4884 3.3904 11.5 3.38818ZM12.1818 13.6739H10.8182V12.3882H12.1818V13.6739ZM12.1818 11.1025H10.8182V9.81676H12.1818V11.1025ZM14.9091 13.6739H13.5455V8.53104H9.45455V13.6739H8.09091V8.53104C8.09091 8.19005 8.23458 7.86302 8.49031 7.6219C8.74604 7.38079 9.09289 7.24533 9.45455 7.24533H13.5455C13.9071 7.24533 14.254 7.38079 14.5097 7.6219C14.7654 7.86302 14.9091 8.19005 14.9091 8.53104V13.6739Z"
                  fill="#A0A0A0"
                />
              </svg>
              <input
                name="companyName"
                placeholder="Enter Company Name*"
                type="text"
                className="text-[12px] font-[400] leading-[120%] outline-none bg-[#E6ECF1] text-[#A0A0A0]  flex-grow self-stretch"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col bg-[#E6ECF1] p-[13px] gap-[16px] rounded-[4px] cursor-pointer hover:outline">
              <p className="font-[400] text-[12px] text-[#747474] leading-[120%] border-b-2 pb-1 border-dashed  border-[#CECECE] ">
                Subject
              </p>
              <div className="flex gap-[16px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.1665 15.0549C2.1665 14.9223 2.21918 14.7951 2.31295 14.7014C2.40672 14.6076 2.5339 14.5549 2.6665 14.5549H13.3332C13.4658 14.5549 13.593 14.6076 13.6867 14.7014C13.7805 14.7951 13.8332 14.9223 13.8332 15.0549C13.8332 15.1875 13.7805 15.3147 13.6867 15.4085C13.593 15.5023 13.4658 15.5549 13.3332 15.5549H2.6665C2.5339 15.5549 2.40672 15.5023 2.31295 15.4085C2.21918 15.3147 2.1665 15.1875 2.1665 15.0549Z"
                    fill="#A0A0A0"
                  />
                  <path
                    d="M7.67981 10.3406L11.6245 6.39588C10.9608 6.11885 10.358 5.71406 9.85048 5.20455C9.34065 4.69685 8.93564 4.09386 8.65848 3.42988L4.71315 7.37455C4.40515 7.68255 4.25115 7.83588 4.11915 8.00588C3.96295 8.20607 3.82905 8.42268 3.71981 8.65188C3.62715 8.84588 3.55848 9.05255 3.42048 9.46522L2.69515 11.6432C2.66186 11.7429 2.65699 11.8498 2.6811 11.9521C2.7052 12.0543 2.75731 12.1478 2.8316 12.2221C2.90588 12.2964 2.99939 12.3485 3.10164 12.3726C3.20389 12.3967 3.31084 12.3918 3.41048 12.3586L5.58781 11.6332C6.00114 11.4952 6.20781 11.4266 6.40181 11.3332C6.63111 11.2244 6.84775 11.0907 7.04781 10.9346C7.21781 10.8019 7.37114 10.6479 7.67914 10.3406H7.67981ZM12.7191 5.30122C13.1125 4.90781 13.3334 4.37428 13.3333 3.81798C13.3333 3.26169 13.1122 2.7282 12.7188 2.33488C12.3254 1.94157 11.7919 1.72064 11.2356 1.7207C10.6793 1.72077 10.1458 1.94181 9.75248 2.33522L9.27914 2.80855L9.29981 2.86855C9.47314 3.36788 9.80048 4.02322 10.4158 4.63855C10.9291 5.15477 11.556 5.54379 12.2465 5.77455L12.7191 5.30122Z"
                    fill="#A0A0A0"
                  />
                </svg>
                <textarea
                  name="companyName"
                  rows={"6"}
                  placeholder="Write a message..."
                  type="text"
                  className="text-[12px] resize-none font-[400] leading-[120%] outline-none bg-[#E6ECF1] text-[#A0A0A0]  flex-grow self-stretch"
                />
              </div>
            </div>

            {/* button */}
            <button
              type="submit"
              className="self-end w-[208px] h-[40px] py-[10px] px-[24px] bg-[#083E6F] rounded-[4px] text-white text-[16px] font-[400] leading-[120%] hover:bg-[#252525] "
            >
              Send your message
            </button>
          </form>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default ContactUsModal;
