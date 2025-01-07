import React from 'react'

const Contactus = () => {
  return (


    <>
      <div className="w-full mx-auto md:mr-0 max-w-2xl md:max-w-xl ">
        <div className="bg-white rounded-xl shadow p-7 sm:p-10">
          <h3 className="mb-4 text-3xl text-web font-bold sm:text-center sm:mb-6 sm:text-3xl">
            Let&apos;s Connect with Us!
          </h3>
          <form>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="firstName"
                className="inline-block mb-2 text-web font-normal text-3xl md:text-2xl"
              >
                Enter Your Name
              </label>
              <input
                placeholder="John Doe"
                required
                type="text"
                className="flex-grow w-full h-14 px-4 py-4 text-3xl md:text-2xl mb-2 transition duration-200 bg-white border border-blue-800 rounded-xl shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="lastName"
                className="inline-block mb-2 text-web font-normal text-3xl md:text-2xl"
              >
                Enter Your Mobile Number
              </label>
              <input
                placeholder="911111111"
                required
                type="text"
                className="flex-grow w-full h-14 px-4 py-4 text-3xl md:text-2xl mb-2 transition duration-200 bg-white border border-blue-800 rounded-xl shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="email"
                className="inline-block mb-2 text-web font-normal text-3xl md:text-2xl"
              >
                Enter Your E-mail
              </label>
              <input
                placeholder="john.doe@example.org"
                required
                type="text"
                className="flex-grow  w-full h-14 px-4 py-4 text-3xl md:text-2xl mb-2 transition duration-200 bg-white border border-blue-800 rounded-xl shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-14 px-6  text-3xl md:text-2xl tracking-wide bg-web hover:bg-orange-400 text-white font-semibold transition duration-200 rounded-xl shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get Quotes
              </button>
            </div>
            <p className="md:text-xs text-xl text-gray-800 sm:text-lg">
              Our team will contact you soon.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contactus