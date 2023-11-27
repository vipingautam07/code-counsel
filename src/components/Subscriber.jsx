

export const Subscriber = () => {
  return (
  <div className="container">
    <section className="background-radial-gradient font-montserrat">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      .background-radial-gradient {\n        background-color: hsl(218, 41%, 15%);\n        background-image: radial-gradient(650px circle at 0% 0%,\n            hsl(218, 41%, 35%) 15%,\n            hsl(218, 41%, 30%) 35%,\n            hsl(218, 41%, 20%) 75%,\n            hsl(218, 41%, 19%) 80%,\n            transparent 100%),\n          radial-gradient(1250px circle at 100% 100%,\n            hsl(218, 41%, 45%) 15%,\n            hsl(218, 41%, 30%) 35%,\n            hsl(218, 41%, 20%) 75%,\n            hsl(218, 41%, 19%) 80%,\n            transparent 100%);\n      }\n    "
        }}
      />
      <div className="px-6 py-12 text-center md:px-12 lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                Do not miss <br />
                <span className="text-teal-500">any updates</span>
              </h1>
              <p className="lead mb-4 opacity-70 text-[hsl(218,81%,85%)]">
                We will write rarely and only high-quality content.
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <div className="relative backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,15%,0.9)] shadow-black/20 md:px-12">
                <h2 className="mb-12 text-white text-center text-3xl font-bold">
                  Subscribe to the newsletter
                </h2>
                <form>
                  <div className="relative mb-6" data-te-input-wrapper-init="">
                   
                    <div className=" text-gray-100 text-left">
    <label htmlFor="input-label">Name</label>
    <input
      className="border bg-slate-700 border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
      type="e-mail"
      name="name"
      id="name"
      placeholder="Enter your name"
      required
      />
  </div>
                  
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init="">
                  </div>
                  
                  <div className="pb-8 text-gray-100 text-left">
    <label htmlFor="input-label">E-mail</label>
    <input
      className="border bg-slate-700 border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
      type="e-mail"
      name="email"
      id="email"
      placeholder="Enter your email"
      required
      />
  </div>
                  <button
                    type="button"
                    data-te-ripple-color="light"
                    className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal bg-teal-500 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] btn-1"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
