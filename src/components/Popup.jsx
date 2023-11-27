

const Popup = () => {
  return (
    <div id="hs-large-modal" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none">
  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
    <div class="flex flex-col  border shadow-sm rounded-xl pointer-events-auto bg-gray-800 border-gray-700 shadow-slate-700/[.7]">
      <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 class="font-bold text-teal-500 text-xl">
          Request a Demo
        </h3> 
        <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent disabled:opacity-50 disabled:pointer-events-none text-white hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-large-modal">
          <span class="sr-only">Close</span>
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div class="p-4 overflow-y-auto">
        <h4 class="mt-1 mb-3 text-gray-100">
          Schedule a call with us, We'll help you with Amicus.
        </h4>
        {/* <div className="flex flex-col-2 w-full">
          <label
            htmlFor="input-label"
            className="block text-left text-sm font-medium mb-2 text-white" >
            Email
          </label>
          <input
            type="email"
            id="input-label"
            className="py-3 px-4 block w-1/2 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600"
            placeholder="Enter your email"/>
          <label
            htmlFor="input-label"
            className="block text-left text-sm font-medium mb-2 text-white" >
            Email
          </label>
          </div> 
          
  <input
    type="email"
    id="input-label"
    className="py-3 px-4 block w-1/2 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600"
    placeholder="Enter your email"/> */}

    <div className="flex space-x-4 m-2 p-2">
  <div className="w-1/2 text-gray-100 text-left">
    <label htmlFor="firstname">First Name</label>
    <input
      className="border bg-slate-700 border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400 text-xs"
      type="text"
      name="firstname"
      id="firstname"
      placeholder="Enter your first name"
      required
      />
  </div>
  <div className="w-1/2 text-gray-100 text-left">
    <label htmlFor="lastname">Last Name</label>
    <input
      className="border bg-slate-700 border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400 text-xs"
      type="text"
      name="lastname"
      id="lastname"
      placeholder="Enter your last name"
      required
      />
  </div>
</div>
    <div className="flex space-x-4 m-2 p-2">
  <div className="w-1/2 text-gray-100 text-left">
    <label htmlFor="input-label">E-mail</label>
    <input
      className="border bg-slate-700 border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400 text-xs"
      type="e-mail"
      name="email"
      id="email"
      placeholder="Enter your email"
      required
      />
  </div>
  <div className="w-1/2 text-gray-100 text-left">
    <label htmlFor="input-label">Contact Number</label>
    <input
      className="border bg-slate-700 border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400 text-xs"
      type="number"
      name="number"
      id="number"
      placeholder="Enter your contact number"
      required
      />
  </div>
</div>
    <div className="flex space-x-4 m-2 p-2">
  <div className="w-1/2 text-gray-100 text-left">
    <label htmlFor="input-label">Website</label>
    <input
      className="border bg-slate-700 border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400 text-xs"
      type="url"
      name="website"
      id="website"
      placeholder="Enter your law firm/business website"
      />
  </div>
  <div className="w-1/2 text-gray-100 text-left">
    <label htmlFor="input-label">Title</label>
    <input
      className="border bg-slate-700 border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400 text-xs"
      type="text"
      name="title"
      id="title"
      placeholder="Enter your title"
      />
  </div>
</div>
<p class="mt-6 mb-3 text-gray-400 text-sm">
          By submitting your details you are agreeing to receive communication about Code Counsel resources event, products or services. By submitting this form, you are acknowledging that you read and agree to our privacy policy.
        </p>

      </div>
      <div class="flex justify-center items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        {/* <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 btn-1" data-hs-overlay="#hs-large-modal">
          Privacy Policy
        </button> */}
        <button type="submit" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 btn-1">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Popup