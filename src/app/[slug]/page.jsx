import Header from "@/Common/Header";
import Image from "next/image";
import React from "react";

import Footer from "@/Common/Footer";
import EventImage from "@/Common/EventImage";
import Head from "next/head";
import { data } from "../../Common/Content";
import Contactus from "@/Common/Contactus";
import Link from "next/link";


const page = ({ params }) => {

  let name = params.slug;

  const contentData = data.filter((elem) => elem.state == name)

  return (
    <div>
      <Head>
        {/* Title Tag */}
        <title>{params.slug} in Lucknow</title>

        {/* Meta Description */}
        <meta
          name="description"
          content={`we are the best ${params.slug} planner in Lucknow`}
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content=""
        />
        <html lang="en-IN" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="26.8467;80.9462" />
      </Head>
      <Header />
      <div className="relative">
        <img
          src={contentData[0]?.bgImg.src}
          className="absolute inset-0 object-cover w-full h-[245px] sm:h-full"
          alt=""
        />
        <div className="relative bg-gray-800 bg-opacity-50 h-[245px] sm:h-full">
          <div className="px-4 sm:py-16 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-8xl sm:leading-none">
                  {contentData[0]?.state}
                </h2>
                <p className="max-w-xl mb-4 text-xl text-gray-200 md:text-4xl">
                  {contentData[0]?.text}
                </p>
              </div>
              <div className='hidden md:block'> <Contactus /></div>

            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg md:mx-auto py-12">
        <h2 className="text-center text-orange font-semibold text-5xl font-sans pb-4">
          Our Popular Packages for {name}
        </h2>
        <p className="md:max-w-screen-sm max-w-3xl  mx-auto text-2xl text-center text-web font-medium font-sans">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio dolorum accusamus omnis. Quisquam beatae quasi veniam vel.
        </p>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 place-items-center p-4">
          {
            contentData[0].destination.map((elem, id) => {
              return (
                <div key={id} className="m-4">
                  <div class="max-w-md rounded overflow-hidden shadow-lg">
                    <Link href={`/destination/${elem.place}`} className="">
                      <img class="w-full h-72" src={elem.img.src} alt={elem.place} />
                    </Link>
                    <div class="px-6 py-4">
                      <div class="font-semibold text-3xl text-web mb-2">{elem.place}</div>
                      <Link href={`/destination/${elem.place}`} class="text-web text-xl">
                        <p>
                        {elem.text.slice(0,130)}...
                        </p>
                      </Link>
                    </div>
                    <div class="px-6 pt-4 pb-2 flex justify-between items-center">
                      <Link href={`/destination/${elem.place}`} class="  px-3 py-1 text-3xl font-medium text-web mr-2 mb-2">{elem.package}</Link>
                      <Link href={`/destination/${elem.place}`} class=" bg-web rounded-full px-6 py-3 text-3xl font-medium text-white mr-2 mb-2">{elem.packagePrice}</Link>
                    </div>
                  </div>
                </div>
              )
            })}

        </div>

      </div>
      <EventImage />
      <Footer />
    </div>
  );
};

export default page;
