import React from 'react';
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import EventImage from "../../Common/EventImage";
import ContactForm from "./ContactForm";
import Head from 'next/head';

const Page = () => {
  return (
    <div>
       <Head>
        {/* Title Tag */}
        <title>Contact Us</title>
        <link rel="canonical" href="https://www.triptaktix.com/contact-form" />

        {/* Meta Description */}
        <meta
          name="description"
          content="Fill the form our team will contact you soon"
        />
   <html lang="en-IN" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="26.8467;80.9462" />

        {/* Open Graph Meta Tags for Social Sharing */}
      </Head>
    <Header />  
    <div className='bg-web'>  
    <div className="md:flex block justify-center items-start p-14  md:p-28">
      <div className="w-full text-white pr-10">
        <h2 className="text-6xl font-bold mb-6">Step By Step Process</h2>
        <div className="mb-4">
          <div className="flex items-start my-8">
            <span className="text-4xl font-bold bg-white text-web rounded-full h-16 w-24 p-4 flex justify-center items-center">1</span>
            <p className="ml-4">
              <span className="font-bold text-4xl">Fill Out The Form</span>
              <br />
              Customers select their desired destination and provide our details through an online form.
            </p>
          </div>
          <div className="flex items-start my-8">
            <span className="text-4xl font-bold bg-white text-web rounded-full h-16 w-24 p-4 flex justify-center items-center">2</span>
            <p className="ml-4">
              <span className="font-bold text-4xl">Executive Call</span>
              <br />
              Our team contacts customers to gather more information, offer recommendations, and address any queries or concerns.
            </p>
          </div>
          <div className="flex items-start my-8">
            <span className="text-4xl font-bold bg-white text-web rounded-full h-16 w-24 p-4 flex justify-center items-center">3</span>
            <p className="ml-4">
              <span className="font-bold text-4xl">Booking</span>
              <br />
              Our dedicated team creates and sets up the destination according to the customer&apos;s chosen place and preferences.
            </p>
          </div>
          <div className="flex items-start my-8">
            <span className="text-4xl font-bold bg-white text-web rounded-full h-16 w-24 p-4 flex justify-center items-center">4</span>
            <p className="ml-4">
              <span className="font-bold text-4xl">Customer Satisfaction</span>
              <br />
              We ensure the customer&apos;s approval and happiness by providing a visually appealing and personalized travel experience.
            </p>
          </div>
        </div>
      </div>

      <ContactForm/>
    </div>
    </div>
<EventImage/>
<Footer/>
    </div>
  )
}

export default Page