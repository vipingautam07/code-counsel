

const Subscribe = () => {
  return (

<section className= "subscribe">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24 border-cyan-100 container">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-2xl font-bold font-montserrat text-white md:text-3xl">
        <span className="text-teal-500">Subscribe </span>to our newsletter
      </h2>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
      <form action="#" className="sm:flex sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only">Email</label>

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-teal-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-teal-400 sm:mt-0 hover:bg-teal-900 sm:w-auto btn-1"
        >
          <span className="text-sm font-medium"> Sign Up </span>
        </button>
      </form>
    </div>
  </div>
  <hr />
</section>

  )
}

export default Subscribe