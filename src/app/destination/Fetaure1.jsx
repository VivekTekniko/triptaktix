import Contactus from '@/Common/Contactus'
import React from 'react'
import HeroMatrix from "./HeroMatrix";
import ContactForm from '../contact-form/ContactForm';

const Fetaure1 = () => {
	return (
		<div>
			
			<section className="max-w-screen-xl mx-auto p-12 shadow-md rounded">
				<div className="  ">
					<div>
						<h2 className="text-5xl text-start ml-4 font-bold underline text-web">Things To Remember</h2>
					</div>
					<div className="">

						<div>

							<div className="p-12 ">
								<div className="flex items-center justify-start ml-6 pb-2">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-3xl font-normal">Dates are flexible and can be adjusted to your schedule.</h4>
									</div>
								</div>
								<div className="flex items-center justify-start ml-6 pb-2">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-3xl font-normal">Arrive 30 minutes before departure to avoid delays.</h4>
									</div>
								</div>
								<div className="flex items-center justify-start ml-6 pb-2">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-3xl font-normal">Hotel accommodation is not guaranteed unless confirmed. Alternative options will be provided if necessary.</h4>
									</div>
								</div>
								<div className="flex items-center justify-start ml-6 pb-2">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-3xl font-normal">You&apos;ll visit the listed destinations; other locations are your responsibility.</h4>
									</div>
								</div>
								<div className="flex items-center justify-start ml-6 pb-2">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-3xl font-normal">Woolen clothes are recommended year-round due to unpredictable weather.</h4>
									</div>
								</div>
								<div className="flex items-center justify-start ml-6 pb-2">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-3xl font-normal">Booking will be canceled if advance payment is delayed.</h4>
									</div>
								</div>
								<div className="flex items-center justify-start ml-6 pb-2">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-3xl font-normal">The cab will be with you throughout the tour.</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
			<HeroMatrix/>
			<div className='block sm:hidden mt-12'> <ContactForm /></div>
		</div>
	)
}

export default Fetaure1