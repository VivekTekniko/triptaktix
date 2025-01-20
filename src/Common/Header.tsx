"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/travel-logo.png";


const Header = () => {
  const [mobMode, setMobMode] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  return (
    <nav className="border-gray-200  dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between md:mx-auto">
        <Link href='/' className="flex basis-1/2  md:basis-1/5 justify-between items-center md:w-full" style={{ height: "80px" }}>
          <img src={logo.src} className='h-full w-full' alt="Event-dekho-partyplanner" />

        </Link>
        <div className="my-2 block md:hidden">
          <a href="/contact-form" className="text-center py-5 bg-web hover:bg-orange-400  mt-2 rounded-xl text-white">
            <span className="font-medium p-6 text-white text-[18px] ">Book Now</span>
          </a>
        </div>
        <button onClick={() => setMobMode(!mobMode)} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-20 h-20 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false" style={{ height: "40px" }}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-10 h-10" style={{ height: "20px" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="md:flex hidden basis-3/5 gap-4 justify-between md:justify-end items-center md:order-2 ">
        <Link className="text-[18px]  font-medium text-web mr-3  relative custom-class cursor-pointer" href="/">Home </Link>
          <li className="relative list-none">
            <button onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}
              className="flex items-center nav-tab justify-between text-[18px] w-full py-2 header-nav text-web rounded border-b border-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Tour Package
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            {showPopup && <div onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}
              className="z-50 absolute top-4 header-tour md:top-10 left-1/3 md:left-0   font-normal bg-white divide-y divide-gray-100 rounded-lg shadow   dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 nav-tab w-60 text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <Link href="/package/popular" className="block text-[18px] nav-tab-dropdown px-10 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Domestic</Link>
                </li>
                <li>
                  <Link href="/international/Package" className="block text-[18px] nav-tab-dropdown px-10 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Internationl</Link>
                </li>
              </ul>
            </div>}
          </li>
          <Link className="text-[18px]  font-medium text-web mr-3  relative custom-class cursor-pointer" href="/aboutus">About Us </Link>
          <Link className="text-[18px]  font-medium text-web mr-3  relative custom-class cursor-pointer" href="/contact-us">Contact Us </Link>
          <Link className="text-[18px]  font-medium text-web  relative cursor-pointer custom-class" href="/blogs">Our Blogs </Link>
          <div className="text-2xl  text-web md:mx-8 ">

            <div className="my-2">
              <a href="/contact-form" className="text-center py-5 bg-web hover:bg-orange-400  mt-2 rounded-xl text-white">
                <span className="font-medium p-6 text-white text-[18px] ">Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${mobMode ? "block" : "hidden"}  w-full `} id="navbar-solid-bg">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li className="border border-b-blue-800 py-2">
            <a href="/" className="block py-2  px-3 md:p-0 text-web text-5xl font-semibold hover:bg-gray-400 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
          </li>          <li className="border border-b-blue-800 py-2" onClick={() => setShowPopup(!showPopup)}>
            <a href="#" className="block py-2  px-3 md:p-0 text-web text-5xl font-semibold rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tour Packages</a>
          </li>
          {showPopup && <div
            className="z-50 absolute top-1/10 w-1/2 left-1/3 md:left-0   font-normal bg-white divide-y divide-gray-100 rounded-lg shadow   dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-2 nav-tab w-60 text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
              <li>
                <Link href="/package/popular" className="block text-[18px] nav-tab-dropdown px-10 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Domestic</Link>
              </li>
              <li>
                <Link href="/international/Package" className="block text-[18px] nav-tab-dropdown px-10 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Internationl</Link>
              </li>
            </ul>
          </div>}
          <li className="border border-b-blue-800 py-2">
            <a href="/aboutus" className="block py-2  px-3 md:p-0 text-web text-5xl font-semibold hover:bg-gray-400 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">About Us</a>
          </li>
          <li className="border border-b-blue-800 py-2">
            <a href="/contact-us" className="block py-2  px-3 md:p-0 text-web text-5xl font-semibold rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
          </li>
          <li className="py-2">
            <a href="blogs" className="block py-2 px-3 md:p-0 text-web text-5xl font-semibold rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Blogs</a>
          </li>

        </ul>
      </div>
    </nav>

  );
};

export default Header;
