"use client"
import React, { useState } from 'react'

const Contactus = () => {
  const [formData, setFormData] = useState({
      name: '',
      mobile: '',
      email:""
    });

    const handleChange=(e)=>{
      const {name , value} = e.target;
      setFormData({
        ...formData,
        [name]:value
      })
    }


const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:8000/saveLead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  
      },
      body: JSON.stringify(formData),  
    });

    if (res.ok) {  
      alert("Lead sent successfully");
      setFormData();  
    } else {
      const errorData = await res.json(); 
      alert(`Error: ${errorData.message || 'Something went wrong'}`);
    }
  } catch (error) {
    console.error("Error occurred:", error);
    alert("An error occurred while sending the lead.");
  }
}

  return (


    <>
      <div className="w-full mx-auto md:mr-0 max-w-2xl md:max-w-xl ">
        <div className="bg-white rounded-xl shadow p-7 sm:p-10">
          <h3 className="mb-4 text-3xl text-web font-bold sm:text-center sm:mb-6 sm:text-3xl">
            Let&apos;s Plan your next trip!
          </h3>
          <form onSubmit={handleSubmit}>
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
                onChange={(e)=>handleChange(e)}
                type="text"
                className="flex-grow w-full h-14 px-4 py-4 text-3xl md:text-2xl mb-2 transition duration-200 bg-white border border-blue-800 rounded-xl shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                name="name"
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
                onChange={(e)=>handleChange(e)}
                type="text"
                className="flex-grow w-full h-14 px-4 py-4 text-3xl md:text-2xl mb-2 transition duration-200 bg-white border border-blue-800 rounded-xl shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                name="mobile"
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
                onChange={(e)=>handleChange(e)}
                type="text"
                className="flex-grow  w-full h-14 px-4 py-4 text-3xl md:text-2xl mb-2 transition duration-200 bg-white border border-blue-800 rounded-xl shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
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
            <p className="md:text-xl text-xl text-gray-800 ">
              Our team will contact you soon.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contactus