import React from 'react';
import Header from "../../../Common/Header";
import Footer from "../../../Common/Footer";
import { specificdata } from "../../../Common/SpecificContent";
import Contactus from '@/Common/Contactus';
import Feature1 from "../DomesticFetaure1";
import InternationalFeature from "../InternationalFeature";
import Feature2 from "../Feature2";
import Itinerary from '../Itinerary';
import ContactForm from '@/app/contact-form/ContactForm';
import PopularSeason from '@/Component/PopularSeason';
import HeroMatrix from '../HeroMatrix';
import Faq from '../../faqs/Faq';

const page = ({ params }) => {
    const filteredData = specificdata.filter(state => {
        return state.place == params.slug
    });
    return (
        <div>
            <Header />
            <div className="relative">
                <img
                    src={filteredData[0].img.src}
                    className="absolute inset-0 object-cover w-full h-[245px] sm:h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 h-[245px] sm:h-full bg-opacity-70">
                    <div className="px-4 sm:py-16 py-32  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-4xl mb-12 xl:mb-0 xl:pr-16 xl:w-3/5">
                                <h2 className="max-w-lg mb-6 font-cursive text-6xl font-bold tracking-tight text-white sm:text-8xl sm:leading-none">
                                    {filteredData[0].place}
                                </h2>
                                <p className=" mb-10 text-4xl text-gray-200 md:text-4xl">
                                    {filteredData[0].text}
                                </p>
                                <span className='bg-white text-orange text-5xl font-cursive p-6 font-semibold rounded'>2 Nights/4 Days</span>
                            </div>
                            <div className='hidden md:block'> <Contactus /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto my-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                    <div className='col-span-2 rounded-xl shadow-lg p-8'>
                        <h4 className='text-center font-cursive text-orange  text-web text-5xl font-semibold pb-6'>About {filteredData[0].place}</h4>
                        <p className='text-3xl p-8 text-justify text-gray-500  font-normal'>{filteredData[0].content}</p>

                        <p className='text-3xl p-8 text-justify text-gray-500 mt-4 font-normal'>{filteredData[0].content2}</p>
                {filteredData[0].itinerary && <Itinerary data={filteredData[0].itinerary}/>}
                    </div>
                   <div className='hidden md:block'> <ContactForm /></div>
                </div>
           {filteredData[0].placeType=="Domestic" ? <Feature1/> : <InternationalFeature/>}
            <HeroMatrix/>
			<div className='block sm:hidden mt-12'> <ContactForm /></div>
            <Faq/>
            <PopularSeason/>
            </div>
            <Footer />
        </div>
    )
}

export default page