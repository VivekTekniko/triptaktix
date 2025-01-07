"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Contactus from "../Common/Contactus";
import { data } from "../Common/Content";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
const HomePage = () => {
  const router = useRouter()
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // const imgData = [
  //   {
  //     name:"Rajasthan",
  //     img:img1,
  //     description:"Pink City of India"
  //   },
  //   {
  //     name:"Himachal Pardesh",
  //     img:img2,
  //     description:"Hill Staion of India"
  //   },
  //   {
  //     name:"Kashmir",
  //     img:img3,
  //     description:"Heaver of the Earth"
  //   },
  // ];

  return (
    <div className="">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 1s ease "
        transitionDuration={3000}
        slidesToSlide={1}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {/* {imgData?.map((elem, id) => {
          return (
            <div className="md:m-12 m-4" key={id} style={{margin:"2rem"}}>
                 <Image height={100} width={100} layout="responsive" src={elem.src} style={{borderRadius:"10px"}} alt="Event-dekho-banner"/>
            </div>
          );
        })} */}
        {data.map((elem, id) => {
          return (
            <div className="relative cursor-pointer" key={id} >
              <Link href={`/${elem.state}`} className="z-50">
                <img
                  src={elem.bgImg.src}
                  className="absolute inset-0 object-cover w-full h-[245px] sm:h-full"
                  alt=""
                />
              </Link>
              <div className="relative bg-gray-800 bg-opacity-50 w-full h-[245px] sm:h-full" onClick={() => router.push(`/${elem.state}`)}>
                <div className="px-4 sm:py-16 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                      <h2 className="max-w-lg mb-6 font-cursive  text-6xl font-bold tracking-tight text-white sm:text-8xl sm:leading-none">
                        {elem.state}
                      </h2>
                      <p className="max-w-xl mb-4 text-4xl text-gray-200 md:text-4xl">
                        {elem.text}
                      </p>
                      <div className="my-2 block md:hidden">
                        <a href="/contact-form" className="text-center py-5 bg-white text-web   mt-2 rounded-xl text-white">
                          <span className="font-medium p-6 text-web text-[18px] ">Book Now</span>
                        </a>
                      </div>
                    </div>
                    <div className='hidden md:block'> <Contactus /></div>
                    {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                    <div className="bg-white rounded-xl shadow-2xl p-7 sm:p-10">
                      <h3 className="mb-4 text-xl text-web font-bold sm:text-center sm:mb-6 sm:text-3xl">
                        Let's Connect with Us!
                      </h3>
                      <form>
                        <div className="mb-1 sm:mb-2">
                          <label
                            htmlFor="firstName"
                            className="inline-block mb-2 text-web font-normal text-2xl"
                          >
                            Enter Your Name
                          </label>
                          <input
                            placeholder="John Doe"
                            required
                            type="text"
                            className="flex-grow w-full h-14 px-4 py-4 text-2xl mb-2 transition duration-200 bg-white border border-blue-800 rounded-xl shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="firstName"
                            name="firstName"
                          />
                        </div>
                        <div className="mb-1 sm:mb-2">
                          <label
                            htmlFor="lastName"
                            className="inline-block mb-2 text-web font-normal text-2xl"
                          >
                          Enter Your Mobile Number
                          </label>
                          <input
                            placeholder="911111111"
                            required
                            type="text"
                            className="flex-grow w-full h-14 px-4 py-4 text-2xl mb-2 transition duration-200 bg-white border border-blue-800 rounded-xl shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="lastName"
                            name="lastName"
                          />
                        </div>
                        <div className="mb-1 sm:mb-2">
                          <label
                            htmlFor="email"
                            className="inline-block mb-2 text-web font-normal text-2xl"
                          >
                           Enter Your E-mail
                          </label>
                          <input
                            placeholder="john.doe@example.org"
                            required
                            type="text"
                            className="flex-grow  w-full h-14 px-4 py-4 text-2xl mb-2 transition duration-200 bg-white border border-blue-800 rounded-xl shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                          />
                        </div>
                        <div className="mt-4 mb-2 sm:mb-4">
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full h-14 px-6  text-2xl tracking-wide bg-blue-900 text-white font-semibold transition duration-200 rounded-xl shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          >
                            Get Quotes
                          </button>
                        </div>
                        <p className="text-xs text-gray-800 sm:text-lg">
                          Our team will contact you soon.
                        </p>
                      </form>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>

    </div>
  );
};

export default HomePage;
