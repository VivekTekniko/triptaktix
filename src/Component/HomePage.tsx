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
    <div className="relative">
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
        {data.filter((item)=>item.showbanner).map((elem, id) => {
          return (
            <div className="relative cursor-pointer sm:h-[470px] h-[245px]" key={id} >
              <Link href={`/${elem.state}`} className="z-50">
               <div className="">
               <img
                  src={elem.bgImg.src}
                  className="absolute  object-cover w-full h-full"
                  alt={elem.state}
                />
               </div>
              </Link>
              <div className="absolute top-0 bottom-0 bg-gray-800 bg-opacity-50 w-full h-[245px] sm:h-[470px]" onClick={() => router.push(`/${elem.state}`)}>           </div>
              <div className="relative h-full" >
                <div className="px-4 h-full sm:py-16 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="flex h-full flex-col items-center justify-between xl:flex-row">
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
                    {/* <div className='hidden md:block'> <Contactus /></div> */}
                    
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
      <div className='hidden md:block absolute top-[8%] right-[5%]'> <Contactus /></div>
    </div>
  );
};

export default HomePage;
