"use client"
import React from "react";
import img4 from "../Assets/test4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../Assets/test1.jpg";
import img2 from "../Assets/test2.jpg";
import img3 from "../Assets/test3.jpg";
import Image from "next/image";

const Testimonials: any = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const testimonialsData = [
    {
      mainimg: img1,
      name: "Nitin & Meera Verma",
      prof: "Doctor",
      star: "",
      comment:
        "TripTaktix turned our family vacation into an unforgettable experience. From the well-thought-out itinerary to smooth bookings, everything was perfect. Their attention to detail and friendly team made it all stress-free. Highly recommend!",
      img: "",
    },
    {
      mainimg: img3,
      name: "Rahul Verma ",
      prof: "Engg.",
      star: "",
      comment:
        "I recently organized a corporate event through TripTaktix, and they exceeded all expectations. The team handled everything seamlessly, from travel to accommodations, leaving me to focus on my team. They’re absolute pros!",
      img: "",
    },
    {
      mainimg: img2,
      name: "Amit Sharma",
      prof: "Teacher",
      star: "",
      comment:
        " booked a group adventure trip through TripTaktix, and it was phenomenal! From the comfortable travel arrangements to thrilling activities, everything was perfectly planned. Can’t wait to book my next trip with them!",
      img: "",
    },
    {
      mainimg: img4,
      name: "Sonal Mehra",
      prof: "Designer",
      star: "",
      comment:
      "TripTaktix turned our family vacation into an unforgettable experience. From the well-thought-out itinerary to smooth bookings, everything was perfect. Their attention to detail and friendly team made it all stress-free. Highly recommend!",
      img: "",
    },
    {
      mainimg: img3,
      name: "Amit Gupta",
      prof: "Engineer",
      star: "",
      comment:
      " booked a group adventure trip through TripTaktix, and it was phenomenal! From the comfortable travel arrangements to thrilling activities, everything was perfectly planned. Can’t wait to book my next trip with them!",
      img: "",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto py-10 ">
      <div className="md:mb-14 text-center">
        <h2 className="text-orange text-5xl font-bold font-cursive">Our Clients’ Journeys, Their Words        </h2>
      </div>
        <div className="my-16 font-[sans-serif] max-w-screen-lg mx-auto">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all 1s ease "
            transitionDuration={500}
            slidesToSlide={1}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {testimonialsData?.map((elem, id) => {
                return (
                    <>
                  
      <div className="relative">
        <div className="h-auto m-6 rounded-2xl p-6 shadow-xl bg-white">
          <div>
               <Image height={100} width={100} src={elem.mainimg.src} className="w-16 h-16 rounded-full" alt="event-planner-testimonial" />
            <h4 className="text-gray-800 text-2xl whitespace-nowrap font-bold mt-3">{elem.name}</h4>
            <p className="mt-0.5 text-2xl text-gray-600">{elem.prof}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-xl leading-relaxed">{elem?.comment}</p>
          </div>
        </div>
      </div>
                </>
              );
            })}
          </Carousel>
    </div>

      </div>
  );
};

export default Testimonials;
