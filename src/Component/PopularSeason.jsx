"use client"
import React from "react";
import Image from "next/image";
import { data } from "../Common/Content";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
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

const PopularSeason = () => {



    const filteredData = data.map(state => {
        return {
            ...state,
            destination: state.destination.filter(dest => dest.season)
        };
    }).filter(state => state.destination.length > 0);
    return (
        <>

            <div className="max-w-screen-lg md:mx-auto py-12">
                <h2 className="text-center text-orange font-semibold text-5xl font-cursive pb-4">
                Our Seasonal Must-Visit Spots
                </h2>
                <p className="md:max-w-screen-sm max-w-3xl  mx-auto text-2xl text-center text-web font-semibold font-sans">
                These destinations shine brightest at the perfect time. Discover your ideal seasonal escape and let nature amaze you.</p>
                <Link href="/package/popularSeason" className="text-xl font-semibold flex justify-end">View All</Link>
                {/* <div className="grid md:grid-cols-3 grid-cols-2 gap-2 place-items-center p-4"> */}
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
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
                    {
                        filteredData.map((elem, id) => elem.destination.map((data, ind) => {
                            return (
                                <div key={ind} className="m-4">
                                    <div class="max-w-md rounded relative overflow-hidden shadow-lg">
                                        <Link href={`/destination/${data.place}`} className="">
                                            <img class="w-full h-72" src={data.img.src} alt={data.place} />
                                        </Link>                                        <div class="px-6 py-4">
                                            <div class="font-semibold text-3xl text-web mb-2">{data.place}</div>
                                            <Link href={`/destination/${data.place}`}>
                                                <p class="text-web text-xl">
                                                {data.text.slice(0,130)}...
                                                </p>
                                            </Link>
                                        </div>
                                        <div class="px-6 pt-4 pb-2 flex justify-between items-center">
                                            <Link href={`/destination/${data.place}`}>
                                                <span class="  px-3 py-1 text-3xl font-medium text-web mr-2 mb-2">{data.package}</span>
                                            </Link>
                                            <Link href={`/${data.place}`} class=" bg-web rounded-full px-6 py-3 text-3xl font-medium text-white mr-2 mb-2">{data.packagePrice}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))
                    }
                </Carousel>
                {/* </div> */}

            </div>
        </>
    );
};

export default PopularSeason;
