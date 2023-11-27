
const Header = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full h-ful text-sm py-4 sm:py-0 bg-gray-800">
  <nav
    className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
    aria-label="Global"
  >
    <div className="relative sm:flex sm:items-center font-montserrat">
      <div className="flex items-center justify-between font-sans">
        <a className="flex-none text-2xl font-semibold text-white" href="/">
          Code Counsel
        </a>
        <div className="sm:hidden">
          <button
            type="button"
            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border shadow-sm disabled:opacity-50 disabled:pointer-events-none bg-transparent border-gray-700 text-white hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-slide-up-animation"
            aria-controls="navbar-slide-up-animation"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={3} x2={21} y1={6} y2={6} />
              <line x1={3} x2={21} y1={12} y2={12} />
              <line x1={3} x2={21} y1={18} y2={18} />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-slide-up-animation"
        className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div className="flex flex-col gap-6 mt-5 text-base sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          {/* <a
            className="font-medium text-teal-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
            aria-current="page"
          >
            Home
          </a> */}
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
            <button
              type="button"
              className="sm:py-4 flex items-center w-full font-medium text-white hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Meet Amicus
              <svg
                className="ms-2 flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-auto hidden z-20 sm:mt-3 top-full min-w-[15rem] sm:shadow-md rounded-lg py-2 sm:px-2 bg-gray-800 sm:dark:border border-gray-700 divide-gray-700">
              <div className="sm:grid sm:grid-col-1">
                <div className="flex flex-col">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300 dark:focus:outline-none darfocus:ring-1 darfocus:ring-gray-600"
                    href="/legal-research"
                  >
                    Legal Resesarch
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300 dark:focus:outline-none darfocus:ring-1 darfocus:ring-gray-600"
                    href="/contract-drafting"
                  >
                    Contract Drafting & Review
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300 dark:focus:outline-none darfocus:ring-1 darfocus:ring-gray-600"
                    href="/case-management"
                  >
                    Case Management
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
            <button
              type="button"
              className="sm:py-4 flex items-center w-full font-medium text-white hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Clients
              <svg
                className="ms-2 flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-auto hidden z-10 sm:mt-3 top-full min-w-[15rem] sm:shadow-md rounded-lg py-2 sm:px-2 bg-gray-800 sm:dark:border border-gray-700 divide-gray-700 before:absolute">
              <div className="sm:grid sm:grid-col-1">
                <div className="flex flex-col">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300 dark:focus:outline-none darfocus:ring-1 darfocus:ring-gray-600"
                    href="#"
                  >
                    Big and Small law firms
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300 dark:focus:outline-none darfocus:ring-1 darfocus:ring-gray-600"
                    href="#"
                  >
                    In-house counsels
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300 dark:focus:outline-none darfocus:ring-1 darfocus:ring-gray-600"
                    href="#"
                  >
                    Litigators
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
            <button
              type="button"
              className="sm:py-4 flex items-center w-full font-medium text-white hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Resources
              <svg
                className="ms-2 flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-auto hidden z-10 sm:mt-3 top-full min-w-[15rem] sm:shadow-md rounded-lg py-2 sm:px-2 bg-gray-800 sm:dark:border border-gray-700 divide-gray-700 before:absolute">
              <div className="sm:grid sm:grid-col-1">
                <div className="flex flex-col">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300 dark:focus:outline-none darfocus:ring-1 darfocus:ring-gray-600"
                    href="#"
                  >
                    Query
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300 dark:focus:outline-none darfocus:ring-1 darfocus:ring-gray-600"
                    href="#"
                  >
                    Team
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300 dark:focus:outline-none darfocus:ring-1 darfocus:ring-gray-600"
                    href="#"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <a
            className="font-medium text-white hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            Legal Intelligence
          </a>
          <a
            className="font-medium text-white hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            Resources
          </a> */}
          <a
            className="font-medium text-white hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            Blog
          </a>
        </div>
        
      </div> 
      {/* <button
          type="submit"
          className="group mt-6 mr-6 flex w-full whitespace-nowrap ml-5 items-center justify-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-teal-400 sm:mt-0 hover:bg-teal-900 sm:w-auto btn-1"
        >
          <span className="text-sm font-medium"> Log in </span>
        </button> */}
        <div className="mx-auto ml-2 max-w-xl whitespace-nowrap">
        <button
          type="button"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-teal-400 sm:mt-0 hover:bg-teal-900 sm:w-auto btn-1"
        >
          <span className="text-sm font-medium"> Log In </span>
        </button>
        </div>
    </div>
    
  </nav>
 </header>
  );
}

export default Header