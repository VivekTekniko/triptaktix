import React from 'react';
import Contactus from "../../Common/Contactus";
import Header from '@/Common/Header';
import Footer from '@/Common/Footer';

const page = () => {
    return (
        <div>
            <Header />
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-opacity-75 bg-blue-700 border-b-white">
                    <svg
                        className="absolute inset-x-0 bottom-0 text-white"
                        viewBox="0 0 1160 163"
                    >
                        <path
                            fill="currentColor"
                            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                        />
                    </svg>
                    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                                    About Us
                                </h2>
                                <p className="max-w-xl mb-4 text-2xl text-gray-200 md:text-2xl">
                                At TripTaktix, we transform travel dreams into extraordinary journeys. With expertise, passion, and a commitment to quality, we make every trip unforgettable.                                </p>
                            </div>
                            <Contactus />
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-lg mx-auto my-6'>
                <h3 className='my-6 text-4xl font-cursive text-orange'>Our Story</h3>
                <p className='text-3xl font-medium text-justify'>Every great adventure starts with a vision, and TripTaktix was born out of a deep passion for redefining travel. Founded by Abhay Tyagi and Hemant Rathore, two travel enthusiasts with academic excellence in Travel & Tourism Management and Business Analytics, TripTaktix blends 
                    expertise with innovation. Armed with certifications from the Ministry of Tourism and globally recognized IATA credentials, we bring a fresh perspective to travel planning. From humble beginnings to creating a brand synonymous with trust 
                    and quality, our journey is a testament to our dedication to delivering seamless travel experiences.</p>
                    <h3 className='my-6 text-4xl font-cursive text-orange'>What sets us apart</h3>
                <p className='text-3xl font-medium text-justify'>
                TripTaktix stands out because we do more than plan trips – we craft experiences. With over 6 years of combined industry expertise and collaborations with leading travel brands like Amigos Alliance and EaseMyTrip, we’ve honed our skills in business development, flight support, and operations. 
                Our unique ability to combine local roots with a global outlook ensures every trip is designed with care, precision, and a touch of creativity. Whether it’s a luxury escape, a corporate retreat, or a family getaway, our personalized solutions cater to your every need.
                </p>
                <h3 className='my-6 text-4xl font-cursive text-orange'>Certified Expertise You Can Trust</h3>
                <p className='text-3xl font-medium text-justify'>

                Quality and reliability are at the core of everything we do. TripTaktix is proudly certified by the Ministry of Tourism, and our IATA certification ensures global standards in travel services. Based in Wave City, Sector 7, our strong local presence enables us to handle travel demands worldwide. Additionally, 
                our partnerships with over seven Ministry-certified travel companies allow us to deliver unparalleled value, competitive deals, and unmatched experiences. With TripTaktix, you’re always in safe hands.
                </p>
                <h3 className='my-6 text-4xl font-cursive text-orange'>Our Mission: Quality Within Reach</h3>
                <p className='text-3xl font-medium text-justify'>
                At TripTaktix, we believe that travel should inspire, rejuvenate, and create lasting memories. Guided by our mission, "Quality Is Always Within Reach," we are committed to delivering premium travel services at accessible prices. Whether you dream of serene mountain escapes or vibrant city adventures, our team is here to make it happen.
                4 Why settle for ordinary when you can embark on an extraordinary journey? With TripTaktix, your next adventure awaits – ready to be unforgettable.
                </p>

            </div>
            <Footer />
        </div>
    )
}

export default page