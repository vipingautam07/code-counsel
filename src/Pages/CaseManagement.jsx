import Banner3 from "../components/Banner"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Blog3 from "../components/Blog3"
import { Subscriber } from "../components/Subscriber"

const CaseManagement = () => {
return(
  <>
  <Header />
  
<div className="bg-gray-700 font-montserrat">
<div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
  <div className="w-11/12 h-2/3 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
    <h1 className="text-xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white leading-7 md:leading-10">
    Transform Case Management with Amicus AI {" "}
      <span className="text-teal-500">
      AI-Enhanced Case Management:</span>
    </h1>
    <p className="mt-5 text-lg sm:mt-10 lg:w-10/12 text-gray-200 font-normal text-center sm:text-lg">
    Transition Beyond Traditional Paradigms with Amicus AI- Join the waitlist today{" "}
    </p>
  </div>
  <div className="flex justify-center items-center">
    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 bg-teal-500 transition duration-150 ease-in-out hover:bg-teal-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-teal-700 py-2 sm:py-4 text-sm btn-1">
      Try Free
    </button>
    {/* <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 bg-transparent transition duration-150 ease-in-out hover:border-teal-600 lg:text-xl lg:font-bold  hover:text-teal-600 rounded border border-teal-700 text-teal-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
      Live Demo
    </button> */}
  </div>
</div>
</div>
<Banner3 />
<Blog3 />
<hr />
<Subscriber />
<Footer />
</>
)
}

export default CaseManagement
