"use client"
import React, { useEffect, useState } from 'react';
// import EventImage from "../../Common/EventImage";
import emailjs from 'emailjs-com';
import { data } from "../../Common/Content";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    noOfPerson: "",
    state: '',
    package: '',
    destination: "",
    email: ""
  });
  const [dest , setDest] = useState()

  useEffect(()=>{
    let filterArr = data?.find((elem)=>elem.state==formData.state)
   setDest(filterArr)
  },[formData.state])

  console.log(dest)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  // console.log(process.env.SERVICE_ID, "process.env.SERVICE_ID")
  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm("service_quup0v5", "template_hfqkv4f", e.target, "_qLfEI_a3r4W0Ut9m")
    //    .then((result) => {
    //      alert('Message Sent Successfully')
    //    }, (error) => {
    //      console.log(error.text);
    //      alert('Something went wrong!')
    //    });
    sendDetails(e.target)
    e.target.reset()
  };

  const sendDetails = async () => {
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
  };


  return (
    <div className="w-full  bg-white p-8 rounded-md shadow-lg">
      <h2 className="text-5xl text-orange font-cursive font-bold mb-4">Request Callback</h2>
      <p className="md:text-3xl text-4xl mb-6">Please fill your details, we will get back to you shortly.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-web md:text-2xl text-4xl font-bold my-4">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleChange}
            className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-web md:text-2xl text-4xl font-bold my-4">What is Your Email</label>
          <input
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
            className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-web md:text-2xl text-4xl font-bold my-4">Phone Number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="mobile"
            value={formData?.mobile}
            onChange={handleChange}
            className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter Your Phone Number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-web md:text-2xl text-4xl font-bold my-4">How many People  <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="noOfPerson"
            value={formData?.noOfPerson}
            onChange={handleChange}
            className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter "
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-web md:text-2xl text-4xl font-bold my-4">Select your State in which you want to travel</label>
          <select
            name="state"
            value={formData?.state}
            onChange={handleChange}
            className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          >

            <option value="" disabled>Select</option>
            {
              data?.map((elem) => {
                return (
                  <option value={elem.state}>{elem.state}</option>
                )
              })
            }

            {/* <option value="Jammu">Jammu</option>
            <option value="Goa">Goa</option>
            <option value="Himanchal Pardes">Himanchal Pardesh</option>
            <option value="Uttrakhand">Uttrakhand</option> */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-web md:text-2xl text-4xl font-bold my-4">Select your destination</label>
          <select
            name="destination"
            value={formData?.destination}
            onChange={handleChange}
            className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="" disabled>Select</option>
            {
              dest?.destination?.map((elem) => {
                return (
                  <option value={elem.place}>{elem.place}</option>
                )
              })
            }
            {/* <option value="Shimla">Shimla</option>
            <option value="Manali">Manali</option>
            <option value="Katra">Katra</option>
            <option value="NotDecided">Not Decided Now</option> */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-web md:text-2xl text-4xl font-bold my-4">Select your Package</label>
          <select
            name="package"
            value={formData?.package}
            onChange={handleChange}
            className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="" disabled>Select</option>
            <option value="4N/5D">4N/5D</option>
            <option value="5N/6D">5N/6D</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-web text-white md:py-2 py-10 px-4 rounded-md shadow hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm