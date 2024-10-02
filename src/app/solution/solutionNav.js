import Link from "next/link";

const SolutionNav = ({navName}) => {
  return (
    <div className=" h-screen   w-[293px]">
      <div>
        <ul className="p-5  flex flex-col items-center gap-2">
          <Link href={"/solution/environment-and-agriculture"}>
            <li className={`w-[230px] h-[60px] group flex px-4  justify-between rounded-[4px] items-center font-semibold ${navName==='environment-and-agriculture'?'bg-[black] text-white':'border-2 border-[transparent] hover:border-[#252525]'}`}>
            Environment & Agriculture
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${navName==='environment-and-agriculture'?'block':'hidden group-hover:block'}`}

              >
                <g clip-path="url(#clip0_301_2197)">
                  <path
                    d="M20.364 12.7071C20.5515 12.5196 20.6568 12.2653 20.6568 12.0001C20.6568 11.7349 20.5515 11.4806 20.364 11.2931L14.707 5.6361C14.6148 5.54059 14.5044 5.46441 14.3824 5.412C14.2604 5.35959 14.1292 5.332 13.9964 5.33085C13.8636 5.32969 13.7319 5.355 13.609 5.40528C13.4861 5.45556 13.3745 5.52981 13.2806 5.6237C13.1867 5.7176 13.1125 5.82925 13.0622 5.95214C13.0119 6.07504 12.9866 6.20672 12.9877 6.3395C12.9889 6.47228 13.0165 6.6035 13.0689 6.7255C13.1213 6.84751 13.1975 6.95785 13.293 7.0501L17.243 11.0001L4 11.0001C3.73478 11.0001 3.48043 11.1055 3.29289 11.293C3.10535 11.4805 3 11.7349 3 12.0001C3 12.2653 3.10535 12.5197 3.29289 12.7072C3.48043 12.8947 3.73478 13.0001 4 13.0001L17.243 13.0001L13.293 16.9501C13.1108 17.1387 13.01 17.3913 13.0123 17.6535C13.0146 17.9157 13.1198 18.1665 13.3052 18.3519C13.4906 18.5373 13.7414 18.6425 14.0036 18.6448C14.2658 18.6471 14.5184 18.5463 14.707 18.3641L20.364 12.7071Z"
                    fill={navName==='environment-and-agriculture'?'white':'black'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_301_2197">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </Link>
          <Link href={"/solution/oil-and-gas"}>
            <li className={`w-[230px] h-[60px] group flex  p-4 justify-between rounded-[4px] items-center font-semibold ${navName==='oil-and-gas'?'bg-[black] text-white':'border-2 border-[transparent] hover:border-[#252525]'}`}>
            Oil & Gas (Energy)
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${navName==='oil-and-gas'?'block':'hidden group-hover:block'}`}
              >
                <g clip-path="url(#clip0_301_2197)">
                  <path
                    d="M20.364 12.7071C20.5515 12.5196 20.6568 12.2653 20.6568 12.0001C20.6568 11.7349 20.5515 11.4806 20.364 11.2931L14.707 5.6361C14.6148 5.54059 14.5044 5.46441 14.3824 5.412C14.2604 5.35959 14.1292 5.332 13.9964 5.33085C13.8636 5.32969 13.7319 5.355 13.609 5.40528C13.4861 5.45556 13.3745 5.52981 13.2806 5.6237C13.1867 5.7176 13.1125 5.82925 13.0622 5.95214C13.0119 6.07504 12.9866 6.20672 12.9877 6.3395C12.9889 6.47228 13.0165 6.6035 13.0689 6.7255C13.1213 6.84751 13.1975 6.95785 13.293 7.0501L17.243 11.0001L4 11.0001C3.73478 11.0001 3.48043 11.1055 3.29289 11.293C3.10535 11.4805 3 11.7349 3 12.0001C3 12.2653 3.10535 12.5197 3.29289 12.7072C3.48043 12.8947 3.73478 13.0001 4 13.0001L17.243 13.0001L13.293 16.9501C13.1108 17.1387 13.01 17.3913 13.0123 17.6535C13.0146 17.9157 13.1198 18.1665 13.3052 18.3519C13.4906 18.5373 13.7414 18.6425 14.0036 18.6448C14.2658 18.6471 14.5184 18.5463 14.707 18.3641L20.364 12.7071Z"
                    fill={navName==='oil-and-gas'?'white':'black'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_301_2197">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </Link>

          <Link href={"/solution/urban-infrastructure"}>
            <li className={`w-[230px] h-[60px] group flex  p-4 justify-between rounded-[4px] items-center font-semibold ${navName==='urban-infrastructure'?'bg-[black] text-white':'border-2 border-[transparent] hover:border-[#252525]'}`}>
            Urban Infrastructure
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${navName==='urban-infrastructure'?'block':'hidden group-hover:block'}`}

              >
                <g clip-path="url(#clip0_301_2197)">
                  <path
                    d="M20.364 12.7071C20.5515 12.5196 20.6568 12.2653 20.6568 12.0001C20.6568 11.7349 20.5515 11.4806 20.364 11.2931L14.707 5.6361C14.6148 5.54059 14.5044 5.46441 14.3824 5.412C14.2604 5.35959 14.1292 5.332 13.9964 5.33085C13.8636 5.32969 13.7319 5.355 13.609 5.40528C13.4861 5.45556 13.3745 5.52981 13.2806 5.6237C13.1867 5.7176 13.1125 5.82925 13.0622 5.95214C13.0119 6.07504 12.9866 6.20672 12.9877 6.3395C12.9889 6.47228 13.0165 6.6035 13.0689 6.7255C13.1213 6.84751 13.1975 6.95785 13.293 7.0501L17.243 11.0001L4 11.0001C3.73478 11.0001 3.48043 11.1055 3.29289 11.293C3.10535 11.4805 3 11.7349 3 12.0001C3 12.2653 3.10535 12.5197 3.29289 12.7072C3.48043 12.8947 3.73478 13.0001 4 13.0001L17.243 13.0001L13.293 16.9501C13.1108 17.1387 13.01 17.3913 13.0123 17.6535C13.0146 17.9157 13.1198 18.1665 13.3052 18.3519C13.4906 18.5373 13.7414 18.6425 14.0036 18.6448C14.2658 18.6471 14.5184 18.5463 14.707 18.3641L20.364 12.7071Z"
                    fill={navName==='urban-infrastructure'?'white':'black'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_301_2197">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </Link>
          <Link href={"/solution/finance-and-insurance"}>
            <li className={`w-[230px] h-[60px] group flex  p-4 justify-between rounded-[4px] items-center font-semibold ${navName==='finance-and-insurance'?'bg-[black] text-white':'border-2 border-[transparent] hover:border-[#252525]'}`}>
            Finance & Insurance
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${navName==='finance-and-insurance'?'block':'hidden group-hover:block'}`}

              >
                <g clip-path="url(#clip0_301_2197)">
                  <path
                    d="M20.364 12.7071C20.5515 12.5196 20.6568 12.2653 20.6568 12.0001C20.6568 11.7349 20.5515 11.4806 20.364 11.2931L14.707 5.6361C14.6148 5.54059 14.5044 5.46441 14.3824 5.412C14.2604 5.35959 14.1292 5.332 13.9964 5.33085C13.8636 5.32969 13.7319 5.355 13.609 5.40528C13.4861 5.45556 13.3745 5.52981 13.2806 5.6237C13.1867 5.7176 13.1125 5.82925 13.0622 5.95214C13.0119 6.07504 12.9866 6.20672 12.9877 6.3395C12.9889 6.47228 13.0165 6.6035 13.0689 6.7255C13.1213 6.84751 13.1975 6.95785 13.293 7.0501L17.243 11.0001L4 11.0001C3.73478 11.0001 3.48043 11.1055 3.29289 11.293C3.10535 11.4805 3 11.7349 3 12.0001C3 12.2653 3.10535 12.5197 3.29289 12.7072C3.48043 12.8947 3.73478 13.0001 4 13.0001L17.243 13.0001L13.293 16.9501C13.1108 17.1387 13.01 17.3913 13.0123 17.6535C13.0146 17.9157 13.1198 18.1665 13.3052 18.3519C13.4906 18.5373 13.7414 18.6425 14.0036 18.6448C14.2658 18.6471 14.5184 18.5463 14.707 18.3641L20.364 12.7071Z"
                    fill={navName==='finance-and-insurance'?'white':'black'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_301_2197">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </Link>
         
          <Link href={"/solution/climate-change"}>
            <li className={`w-[230px] h-[60px] group flex  p-4 justify-between rounded-[4px] items-center font-semibold ${navName==='climate-change'?'bg-[black] text-white':'border-2 border-[transparent] hover:border-[#252525]'}`}>
            Climate Change
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${navName==='climate-change'?'block':'hidden group-hover:block'}`}

              >
                <g clip-path="url(#clip0_301_2197)">
                  <path
                    d="M20.364 12.7071C20.5515 12.5196 20.6568 12.2653 20.6568 12.0001C20.6568 11.7349 20.5515 11.4806 20.364 11.2931L14.707 5.6361C14.6148 5.54059 14.5044 5.46441 14.3824 5.412C14.2604 5.35959 14.1292 5.332 13.9964 5.33085C13.8636 5.32969 13.7319 5.355 13.609 5.40528C13.4861 5.45556 13.3745 5.52981 13.2806 5.6237C13.1867 5.7176 13.1125 5.82925 13.0622 5.95214C13.0119 6.07504 12.9866 6.20672 12.9877 6.3395C12.9889 6.47228 13.0165 6.6035 13.0689 6.7255C13.1213 6.84751 13.1975 6.95785 13.293 7.0501L17.243 11.0001L4 11.0001C3.73478 11.0001 3.48043 11.1055 3.29289 11.293C3.10535 11.4805 3 11.7349 3 12.0001C3 12.2653 3.10535 12.5197 3.29289 12.7072C3.48043 12.8947 3.73478 13.0001 4 13.0001L17.243 13.0001L13.293 16.9501C13.1108 17.1387 13.01 17.3913 13.0123 17.6535C13.0146 17.9157 13.1198 18.1665 13.3052 18.3519C13.4906 18.5373 13.7414 18.6425 14.0036 18.6448C14.2658 18.6471 14.5184 18.5463 14.707 18.3641L20.364 12.7071Z"
                    fill={navName==='climate-change'?'white':'black'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_301_2197">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </Link>

          <Link href={"/solution/maritime"}>
            <li className={`w-[230px] h-[60px] group flex  p-4 justify-between rounded-[4px] items-center font-semibold ${navName==='maritime'?'bg-[black] text-white':'border-2 border-[transparent] hover:border-[#252525]'}`}>
            Maritime
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${navName==='maritime'?'block':'hidden group-hover:block'}`}

              >
                <g clip-path="url(#clip0_301_2197)">
                  <path
                    d="M20.364 12.7071C20.5515 12.5196 20.6568 12.2653 20.6568 12.0001C20.6568 11.7349 20.5515 11.4806 20.364 11.2931L14.707 5.6361C14.6148 5.54059 14.5044 5.46441 14.3824 5.412C14.2604 5.35959 14.1292 5.332 13.9964 5.33085C13.8636 5.32969 13.7319 5.355 13.609 5.40528C13.4861 5.45556 13.3745 5.52981 13.2806 5.6237C13.1867 5.7176 13.1125 5.82925 13.0622 5.95214C13.0119 6.07504 12.9866 6.20672 12.9877 6.3395C12.9889 6.47228 13.0165 6.6035 13.0689 6.7255C13.1213 6.84751 13.1975 6.95785 13.293 7.0501L17.243 11.0001L4 11.0001C3.73478 11.0001 3.48043 11.1055 3.29289 11.293C3.10535 11.4805 3 11.7349 3 12.0001C3 12.2653 3.10535 12.5197 3.29289 12.7072C3.48043 12.8947 3.73478 13.0001 4 13.0001L17.243 13.0001L13.293 16.9501C13.1108 17.1387 13.01 17.3913 13.0123 17.6535C13.0146 17.9157 13.1198 18.1665 13.3052 18.3519C13.4906 18.5373 13.7414 18.6425 14.0036 18.6448C14.2658 18.6471 14.5184 18.5463 14.707 18.3641L20.364 12.7071Z"
                    fill={navName==='maritime'?'white':'black'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_301_2197">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </Link>

          <Link href={"/solution/space-launches-and-defence-operations"}>
            <li className={`w-[230px] h-[60px] group flex  p-4 justify-between rounded-[4px] items-center font-semibold ${navName==='space-launches-and-defence-operations'?'bg-[black] text-white':'border-2 border-[transparent] hover:border-[#252525]'}`}>
            Space Launches and Defence Operations
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${navName==='space-launches-and-defence-operations'?'block':'hidden group-hover:block'}`}

              >
                <g clip-path="url(#clip0_301_2197)">
                  <path
                    d="M20.364 12.7071C20.5515 12.5196 20.6568 12.2653 20.6568 12.0001C20.6568 11.7349 20.5515 11.4806 20.364 11.2931L14.707 5.6361C14.6148 5.54059 14.5044 5.46441 14.3824 5.412C14.2604 5.35959 14.1292 5.332 13.9964 5.33085C13.8636 5.32969 13.7319 5.355 13.609 5.40528C13.4861 5.45556 13.3745 5.52981 13.2806 5.6237C13.1867 5.7176 13.1125 5.82925 13.0622 5.95214C13.0119 6.07504 12.9866 6.20672 12.9877 6.3395C12.9889 6.47228 13.0165 6.6035 13.0689 6.7255C13.1213 6.84751 13.1975 6.95785 13.293 7.0501L17.243 11.0001L4 11.0001C3.73478 11.0001 3.48043 11.1055 3.29289 11.293C3.10535 11.4805 3 11.7349 3 12.0001C3 12.2653 3.10535 12.5197 3.29289 12.7072C3.48043 12.8947 3.73478 13.0001 4 13.0001L17.243 13.0001L13.293 16.9501C13.1108 17.1387 13.01 17.3913 13.0123 17.6535C13.0146 17.9157 13.1198 18.1665 13.3052 18.3519C13.4906 18.5373 13.7414 18.6425 14.0036 18.6448C14.2658 18.6471 14.5184 18.5463 14.707 18.3641L20.364 12.7071Z"
                    fill={navName==='space-launches-and-defence-operations'?'white':'black'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_301_2197">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </Link>
          {/* <Link href={"/solution/urban-planning"}>
            <li className={`w-[230px] h-[48px] group flex  p-4 justify-between rounded-[4px] items-center font-semibold ${navName==='urban-planning'?'bg-[black] text-white':'border-2 border-[transparent] hover:border-[#252525]'}`}>
            Urban Planning

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${navName==='urban-planning'?'block':'hidden group-hover:block'}`}

              >
                <g clip-path="url(#clip0_301_2197)">
                  <path
                    d="M20.364 12.7071C20.5515 12.5196 20.6568 12.2653 20.6568 12.0001C20.6568 11.7349 20.5515 11.4806 20.364 11.2931L14.707 5.6361C14.6148 5.54059 14.5044 5.46441 14.3824 5.412C14.2604 5.35959 14.1292 5.332 13.9964 5.33085C13.8636 5.32969 13.7319 5.355 13.609 5.40528C13.4861 5.45556 13.3745 5.52981 13.2806 5.6237C13.1867 5.7176 13.1125 5.82925 13.0622 5.95214C13.0119 6.07504 12.9866 6.20672 12.9877 6.3395C12.9889 6.47228 13.0165 6.6035 13.0689 6.7255C13.1213 6.84751 13.1975 6.95785 13.293 7.0501L17.243 11.0001L4 11.0001C3.73478 11.0001 3.48043 11.1055 3.29289 11.293C3.10535 11.4805 3 11.7349 3 12.0001C3 12.2653 3.10535 12.5197 3.29289 12.7072C3.48043 12.8947 3.73478 13.0001 4 13.0001L17.243 13.0001L13.293 16.9501C13.1108 17.1387 13.01 17.3913 13.0123 17.6535C13.0146 17.9157 13.1198 18.1665 13.3052 18.3519C13.4906 18.5373 13.7414 18.6425 14.0036 18.6448C14.2658 18.6471 14.5184 18.5463 14.707 18.3641L20.364 12.7071Z"
                    fill={navName==='urban-planning'?'white':'black'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_301_2197">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </Link>
          <Link href={"/solution/disaster"}>
            <li className={`w-[230px] h-[48px] group flex  p-4 justify-between rounded-[4px] items-center font-semibold ${navName==='disaster'?'bg-[black] text-white':'border-2 border-[transparent] hover:border-[#252525]'}`}>
            Disaster
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${navName==='disaster'?'block':'hidden group-hover:block'}`}

              >
                <g clip-path="url(#clip0_301_2197)">
                  <path
                    d="M20.364 12.7071C20.5515 12.5196 20.6568 12.2653 20.6568 12.0001C20.6568 11.7349 20.5515 11.4806 20.364 11.2931L14.707 5.6361C14.6148 5.54059 14.5044 5.46441 14.3824 5.412C14.2604 5.35959 14.1292 5.332 13.9964 5.33085C13.8636 5.32969 13.7319 5.355 13.609 5.40528C13.4861 5.45556 13.3745 5.52981 13.2806 5.6237C13.1867 5.7176 13.1125 5.82925 13.0622 5.95214C13.0119 6.07504 12.9866 6.20672 12.9877 6.3395C12.9889 6.47228 13.0165 6.6035 13.0689 6.7255C13.1213 6.84751 13.1975 6.95785 13.293 7.0501L17.243 11.0001L4 11.0001C3.73478 11.0001 3.48043 11.1055 3.29289 11.293C3.10535 11.4805 3 11.7349 3 12.0001C3 12.2653 3.10535 12.5197 3.29289 12.7072C3.48043 12.8947 3.73478 13.0001 4 13.0001L17.243 13.0001L13.293 16.9501C13.1108 17.1387 13.01 17.3913 13.0123 17.6535C13.0146 17.9157 13.1198 18.1665 13.3052 18.3519C13.4906 18.5373 13.7414 18.6425 14.0036 18.6448C14.2658 18.6471 14.5184 18.5463 14.707 18.3641L20.364 12.7071Z"
                    fill={navName==='disaster'?'white':'black'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_301_2197">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 1 -1 0 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </Link> */}
        

          
        </ul>
      </div>
    </div>
  );
};

export default SolutionNav;
