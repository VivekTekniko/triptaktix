"use client"
import React, { useState } from 'react';

const Faq = () => {
    const [currentAcc, setCurrAcc] = useState("1")

    const handleAcc = (no) => {
        if (no == currentAcc) {
            setCurrAcc("0")
        } else {
            setCurrAcc(no)
        }
    }
    return (
        <div className='shadow-lg rounded-lg p-12'>
<h3 className='text-5xl text-web text-center my-6'>Frequently Asked Questions</h3>
            <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                <h2 id="accordion-color-heading-1" onClick={() => handleAcc("1")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl"
                        data-accordion-target="#accordion-color-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-color-body-1"
                    >
                        <span className='text-left'>What services does TripTaktix offer?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-1"
                    className={currentAcc == "1" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-1"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        TripTaktix provides a range of travel services including MICE (Meetings, Incentives, Conferences, Events), customized domestic and international travel packages, flight bookings, Dubai visa assistance, hotel reservations, and destination wedding planning in India.
                        </p>
                        
                    </div>
                </div>
                <h2 id=" accordion-color-heading-2" className='border-t border-gray-300' onClick={() => handleAcc("2")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl rtl:text-right "
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                    >
                        <span className='text-left'>How can I book a service with TripTaktix?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-2"
                    className={currentAcc == "2" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        You can book a service by visiting our website, selecting the desired service, and submitting an inquiry. 
                        Our team will contact you to discuss your requirements and finalize the details.
                        </p>
                        
                    </div>
                </div>
                <h2 id=" accordion-color-heading-2" className='border-t border-gray-300' onClick={() => handleAcc("3")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl rtl:text-right "
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                    >
                        <span className='text-left'>Are your travel packages customizable?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-2"
                    className={currentAcc == "3" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        Yes, all our packages are fully customizable to cater to your specific preferences, whether it&apos;s a solo trip, family vacation, corporate event, or a wedding.
                        </p>
                        
                    </div>
                </div>
                <h2 id=" accordion-color-heading-2" className='border-t border-gray-300' onClick={() => handleAcc("4")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl rtl:text-right "
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                    >
                        <span className='text-left'>What documents are required for international travel?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-2"
                    className={currentAcc == "4" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        Typically, for international travel, you will need a valid passport, a visa for your destination country, a return ticket, proof of accommodation, travel insurance, and any other country-specific documents such as 
                        vaccination records or financial proof.
                        </p>
                        
                    </div>
                </div>
                <h2 id=" accordion-color-heading-2" className='border-t border-gray-300' onClick={() => handleAcc("5")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl rtl:text-right "
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                    >
                        <span className='text-left'>What are the best times to travel to popular destinations?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-2"
                    className={currentAcc == "5" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        Domestic: For hill stations like Manali or Shimla, summer (April-June) is ideal. For places like Rajasthan or Kerala, winter (October-February) is the best time.
                        </p>
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        International: Southeast Asia (like Bali and Thailand) is best from November to March, while European countries are perfect in spring (April-June) and autumn (September-October). Specific timing can depend on the destination and type of activities planned.
                        </p>
                        
                    </div>
                </div>
                <h2 id=" accordion-color-heading-2" className='border-t border-gray-300' onClick={() => handleAcc("6")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl rtl:text-right "
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                    >
                        <span className='text-left'>Can TripTaktix help with hotel reservations?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-2"
                    className={currentAcc == "6" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        Yes, we offer hotel reservations for a range of preferences, including luxury stays, budget options, and boutique accommodations, both domestically and internationally.
                        </p>
                        
                    </div>
                </div>
                <h2 id=" accordion-color-heading-2" className='border-t border-gray-300' onClick={() => handleAcc("7")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl rtl:text-right "
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                    >
                        <span className='text-left'>What is MICE, and how does TripTaktix assist in organizing such events?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-2"
                    className={currentAcc == "7" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        MICE refers to Meetings, Incentives, Conferences, and Events. TripTaktix offers tailored solutions to manage business travel, large group meetings, and corporate events at domestic and international destinations.
                        </p>
                        
                    </div>
                </div>
                <h2 id=" accordion-color-heading-2" className='border-t border-gray-300' onClick={() => handleAcc("8")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl rtl:text-right "
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                    >
                        <span className='text-left'>What certifications does TripTaktix hold?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-2"
                    className={currentAcc == "8" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        TripTaktix is certified by the Ministry of Tourism and holds globally recognized IATA certification, ensuring reliable and high-quality travel services.
                        </p>
                        
                    </div>
                </div>

                <h2 id=" accordion-color-heading-2" className='border-t border-gray-300' onClick={() => handleAcc("9")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl rtl:text-right "
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                    >
                        <span className='text-left'>Does TripTaktix help with destination wedding planning?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-2"
                    className={currentAcc == "9" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        Yes, we offer end-to-end planning for destination weddings within India, including venue selection, logistics, guest accommodation, and event coordination.                        </p>
                        
                    </div>
                </div>

                <h2 id=" accordion-color-heading-2" className='border-t border-gray-300' onClick={() => handleAcc("10")}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-semibold text-gray-800 text-4xl rtl:text-right "
                        data-accordion-target="#accordion-color-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-color-body-2"
                    >
                        <span className='text-left'>Why should I choose TripTaktix for my travel needs?</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>
                <div
                    id="accordion-color-body-2"
                    className={currentAcc == "10" ? 'block' : 'hidden'}
                    aria-labelledby="accordion-color-heading-2"
                >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 text-3xl dark:text-gray-400">
                        With over six years of combined experience, certifications from the Ministry of Tourism, IATA accreditation, and a commitment to quality, TripTaktix guarantees reliable, timely, and tailored travel solutions for both domestic and international destinations                        </p>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Faq