"use client"
import React, { useState } from 'react';
// import EventImage from "../../Common/EventImage";
import emailjs from 'emailjs-com';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    occasion: '',
    plan: '',
    address:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
// console.log(process.env.SERVICE_ID, "process.env.SERVICE_ID")
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_quup0v5", "template_hfqkv4f", e.target, "_qLfEI_a3r4W0Ut9m")
       .then((result) => {
         alert('Message Sent Successfully')
       }, (error) => {
         console.log(error.text);
         alert('Something went wrong!')
       });
     e.target.reset()
    // Handle form submission
  };
  return (
    <div className="w-full  bg-white p-8 rounded-md shadow-lg">
    <h2 className="text-5xl text-orange font-bold mb-4">Request Callback</h2>
    <p className="md:text-3xl text-4xl mb-6">Please fill your details, we will get back to you shortly.</p>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-web md:text-2xl text-4xl font-bold my-4">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-web md:text-2xl text-4xl font-bold my-4">Phone Number <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter Your Phone Number"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-web md:text-2xl text-4xl font-bold my-4">Where are you from? <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Enter Your Full Address"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-web md:text-2xl text-4xl font-bold my-4">Select your State in which you want to travel</label>
        <select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="" disabled>Select</option>
          <option value="Birthday">Kashmir</option>
          <option value="Wedding">Jammu</option>
          <option value="Anniversary">Goa</option>
          <option value="CorporateEvents">Himanchal Pardesh</option>
          <option value="HouseWarming">Uttrakhand</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-web md:text-2xl text-4xl font-bold my-4">Select your destination</label>
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="" disabled>Select</option>
          <option value="Basic">Shimla</option>
          <option value="Premium">Manali</option>
          <option value="Elite">Katra</option>
          <option value="NotDecided">Not Decided Now</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-web md:text-2xl text-4xl font-bold my-4">Select your Package</label>
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="" disabled>Select</option>
          <option value="Basic">4N/5D</option>
          <option value="Premium">5N/6D</option>
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