import Card from "./Card"
import Popup from "./Popup"


const Hero = () => {
  return (

<section
  className="relative bg-[url(https://media.giphy.com/media/69bPS5gXKKrBe/giphy.gif)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/5 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l kenburns-top"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl flex flex-col px-5 py-15 pt-5 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 font-montserrat"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-semibold sm:text-5xl text-white animate__animated animate__fadeInLeft">
        Empowering <strong className=" font-extrabold text-teal-500">Legal Process</strong> with<strong className="font-extrabold text-teal-500"> Cutting-Edge Technology</strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-yellow-50 animate__animated animate__fadeInRight">
        Discover a suite of tools designed to revolutionize the way you handle legal tasks.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
        <a
          href="#"
          className=" block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:text-teal-500 hover:bg-white focus:outline-none focus:ring active:bg-teal-500 sm:w-auto btn-1 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-large-modal"
        >
          Request Demo
        </a>
        <Popup />

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-white hover:bg-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto btn-1">
          Learn More
        </a>
      </div>
    </div>
    <Card />
  </div>
  
</section>
  )
}

export default Hero