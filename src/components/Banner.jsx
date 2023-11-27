import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';

const Banner = () => {
  return (
    <section className="bg-gray-700 font-montserrat">
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src={banner1}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Swift and Comprehensive Legal Insights
          </h2>

          <p className="mt-4 text-gray-600">
          Amicus AI promptly provides thorough answers to your legal inquiries, enriched with relevant case law and statutes, propelling your legal research into a realm of enhanced understanding and thoroughness
          </p>

          {/* <a
            href="#"
            className="mt-8 inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 btn-1"
          >
            Learn More
          </a> */}
        </div>
      </div>
    </div>
  </div>

  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src={banner2}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Enhance Your Legal Understanding with Amicus AI
          </h2>

          <p className="mt-4 text-gray-600">
          Amicus AI simplifies the task of summarising intricate legal documents, making the understanding of legal matters clearer. It facilitates the crafting of comprehensive research memoranda effortlessly, ensuring a well-rounded analysis of legal issues. Additionally, its intelligent navigation through vast case data delivers insightful conclusions, enhancing legal analysis and strategy formulation.
          </p>

          {/* <a
            href="#"
            className="mt-8 inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 btn-1"
          >
            Learn More
          </a> */}
        </div>
      </div>
    </div>
  </div>

  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src={banner3}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Amicus: Your Jurisdiction-Specific Legal Research Assistant

          </h2>

          <p className="mt-4 text-gray-600">
          With Amicus, effortlessly choose the specific jurisdiction pertinent to your legal matter. Access relevant statutory and case law information tailored to your selected jurisdiction, enriching your research memo with authoritative sources.
          </p>

          {/* <a
            href="#"
            className="mt-8 inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 btn-1"
          >
            Learn More
          </a> */}
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Banner