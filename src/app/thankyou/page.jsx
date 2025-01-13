import React from 'react'
import Footer from '../../Common/Footer'
import Header from '../../Common/Header'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <Header/>
        <div>
    <div class="flex items-center justify-center h-[50vh]">
      <div class="p-1 rounded shadow-lg bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500 ">
        <div class="flex flex-col items-center p-4 space-y-2 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">Thank You !</h1>
          <p className='text-4xl py-5 font-semibold'>Thank you for your interest! Our team will contact you soon</p>
          <Link
          href="/"
            class="inline-flex items-center px-8 py-4 text-white bg-orange rounded-full cursor-pointer focus:outline-none focus:ring">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span class="text-4xl font-medium">
              Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  )
}

export default page