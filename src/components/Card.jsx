

const Card = () => {
  return (
    <section className="bg-transparent text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="mx-auto max-w-lg text-center">
      {/* <h2 className="text-3xl font-bold sm:text-4xl">Services</h2> */}

      {/* <p className="mt-4 text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
        saepe laborum.
      </p> */}
    </div>

    <div className=" mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="bg-gray-800 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-teal-500"
          fill="none"
          viewBox="0 0 48 48"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M10.35,4.5a2,2,0,0,0-1.95,2v35.1a2,2,0,0,0,1.95,2h27.3a2,2,0,0,0,2-2V6.45a2,2,0,0,0-2-1.95h-2v8.82L31.79,9.41l-3.88,3.91V4.5Zm5.84,20H32.81M16.19,36.18H28.88M16.19,30.33h9.74"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.35,4.5a2,2,0,0,0-1.95,2v35.1a2,2,0,0,0,1.95,2h27.3a2,2,0,0,0,2-2V6.45a2,2,0,0,0-2-1.95h-2v8.82L31.79,9.41l-3.88,3.91V4.5Zm5.84,20H32.81M16.19,36.18H28.88M16.19,30.33h9.74"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Legal Research</h2>

        <p className="mt-1 text-sm text-gray-300">
          Prepare your research memo with authoritative sources handpicked by AI.
        </p>
        <a href="#" class="group mt-5 pt-5 text-teal-600 transition duration-300">
            Learn More
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500"></span>
          </a>
      </a>

      <a
        className="bg-gray-800 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-teal-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Practice Management</h2>

        <p className="mt-1 text-sm text-gray-300">
          Track and manage your cases from start to finish.
        </p>
        <a href="#" class="group mt-5 pt-5 text-teal-600 transition duration-300">
            Learn More
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500"></span>
          </a>
      </a>

      <a
        className="bg-gray-800 block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-teal-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M7,17V12m4,5V15M21,15l-2.83-2.83M13,10a3,3,0,1,0,3-3A3,3,0,0,0,13,10Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17,17v3a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H16"
          />
        </svg>

        <h2 className="mt-4 text-xl font-bold text-white">Document Review</h2>

        <p className="mt-1 text-sm text-gray-300">
          Draft, review, and store your legal documents with ease.
        </p>
          <a href="#" class="group mt-5 pt-5 text-teal-600 transition duration-300">
            Learn More
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500"></span>
          </a>
        </a>

    </div>

    {/* <div className="mt-12 text-center">
      <a
        href="#"
        className="inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div> */}
  </div>
</section>
  )
}

export default Card