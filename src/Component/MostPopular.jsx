import React from 'react';
import { data } from "../Common/Content";
import Image from "next/image";
import Link from 'next/link';
import mapImg from "../../public/Assets/map5.webp"


const MostPopular = () => {

  const backgroundStyle = {
    backgroundImage: `url(${mapImg.src})`,  // Using the imported image
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section  style={backgroundStyle} className='md:py-10 z-10'>
      <div className="max-w-screen-lg md:mx-auto p-4 opacity-100 z-50">
        <h1 className="text-center font-cursive text-orange font-semibold text-5xl pb-8" >
          Our Most Popular Tourist Plcae
        </h1>
        <h2 className="md:max-w-screen-sm max-w-3xl  mx-auto text-2xl text-center text-web font-semibold font-sans">
          Our experienced team handles everything from decoration, catering, and photography to managing the entire event, ensuring it&apos;s stress-free and magical.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 p-4">
          {data.map((elem, id) => {
            return (
              <div className="flex justify-center items-center" key={id}>
                <div className="container flex justify-center" >
                  <div className="max-w-sm py-8 rounded-2xl">
                    <div className="bg-white relative shadow-lg transition ease-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 rounded-2xl">
                      <Link className='h-72' href={`/${elem.state}`}>
                        <img
                          //  height={200}
                          //   width={180} 
                          src={elem.img.src}
                          alt='mostpopular-image'
                          className="w-full h-full "
                          style={{ borderRadius: "10px 10px 0 0" }}
                        />
                      </Link>
                      <div className="py-6 px-8 rounded-2xl bg-white flex justify-between items-center">
                        <p className="text-web text-3xl  md:text-3xl font-semibold">{elem?.state}</p>
                        <div className='text-end'>
                          <Link className="mt-6 py-4 px-4 bg-web hover:bg-orange-400 text-white text-2xl font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                            href={`/${elem.state}`}
                          >Explore</Link></div>
                      </div>
                      {/* <div className="absolute top-2 right-2 py-2 px-2 text-2xl bg-white rounded-lg">
                    <span className="text-md">{elem.price}</span>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default MostPopular