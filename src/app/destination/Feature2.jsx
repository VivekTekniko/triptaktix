"use client"
import React, { useState } from 'react';

const Feature2 = () => {
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
                        <span>What is Flowbite?</span>
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
                            Flowbite is an open-source library of interactive components built on
                            top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
                            more.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-3xl">
                            Check out this guide to learn how to{" "}
                            <a
                                href="/docs/getting-started/introduction/"
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                get started
                            </a>{" "}
                            and start developing websites even faster with components on top of
                            Tailwind CSS.
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
                        <span>Is there a Figma file available?</span>
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
                            Flowbite is first conceptualized and designed using the Figma software
                            so everything you see in the library has a design equivalent in our Figma
                            file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-3xl">
                            Check out the{" "}
                            <a
                                href="https://flowbite.com/figma/"
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Figma design system
                            </a>{" "}
                            based on the utility classes from Tailwind CSS and components from Flowbite.
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
                        <span>Is there a Figma file available?</span>
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
                            Flowbite is first conceptualized and designed using the Figma software
                            so everything you see in the library has a design equivalent in our Figma
                            file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-3xl">
                            Check out the{" "}
                            <a
                                href="https://flowbite.com/figma/"
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Figma design system
                            </a>{" "}
                            based on the utility classes from Tailwind CSS and components from Flowbite.
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
                        <span>Is there a Figma file available?</span>
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
                            Flowbite is first conceptualized and designed using the Figma software
                            so everything you see in the library has a design equivalent in our Figma
                            file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-3xl">
                            Check out the{" "}
                            <a
                                href="https://flowbite.com/figma/"
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Figma design system
                            </a>{" "}
                            based on the utility classes from Tailwind CSS and components from Flowbite.
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
                        <span>Is there a Figma file available?</span>
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
                            Flowbite is first conceptualized and designed using the Figma software
                            so everything you see in the library has a design equivalent in our Figma
                            file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-3xl">
                            Check out the{" "}
                            <a
                                href="https://flowbite.com/figma/"
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Figma design system
                            </a>{" "}
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Feature2