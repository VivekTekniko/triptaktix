import Footer from '@/Common/Footer'
import Header from '@/Common/Header'
import React from 'react'
import Faq from './Faq'

const page = () => {
  return (
    <div>
        <Header/>
        <div className='max-w-screen-lg mx-auto'>
            <Faq/>
        </div>
        <Footer/>
            </div>
  )
}

export default page