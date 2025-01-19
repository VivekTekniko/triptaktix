import React from 'react';
import Footer from '@/Common/Footer'
import Header from '@/Common/Header'
import Head from 'next/head';

const page = () => {
  return (
<>
<Head>
        {/* Title Tag */}
        <title>Terms & Condition</title>
        <link rel="canonical" href="https://www.triptaktix.com/terms&condition" />

        {/* Meta Description */}
        <meta
          name="description"
          content="Read our terms and condition carefully and then confirm your booking"
        />
   <html lang="en-IN" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="26.8467;80.9462" />

        {/* Open Graph Meta Tags for Social Sharing */}
      </Head>
<Header/>

<div className='p-12'>
<h1>Terms and Conditions</h1>
    <p className="text-2xl">Welcome to our event planning website! By accessing and using our services, you agree to the following terms and conditions:</p>

    <h2>1. General Information</h2>
    <p className="text-2xl">All content displayed on this website is intended to provide a general overview of our event planning services. The packages, deals, or pricing information provided are for informational purposes only and may vary depending on individual requirements and preferences.</p>

    <h2>2. Communication</h2>
    <p className="text-2xl">By providing your contact information, including your phone number, you consent to allow us to contact you directly regarding your inquiry, event planning details, and potential packages. Our team may reach out to you via phone calls to discuss specific event requirements and finalize service details.</p>

    <h2>3. Finalizing Packages and Deals</h2>
    <p className="text-2xl">While we strive to present accurate and up-to-date information on our website, all packages, deals, and pricing details are subject to change. The final cost and service details will be confirmed only after direct consultation over the phone with one of our representatives. Any agreement on services will be confirmed verbally or in writing following this conversation.</p>

    <h2>4. Modifications to Services</h2>
    <p className="text-2xl">We reserve the right to update, modify, or change the details of our services, packages, and deals without prior notice. Please note that changes may be made based on your specific requirements or other factors discussed during your consultation.</p>

    <h2>5. Confidentiality</h2>
    <p className="text-2xl">We respect your privacy and are committed to maintaining the confidentiality of all personal information you provide. Please refer to our <a href="privacy-policy.html">Privacy Policy</a> for more details on how we handle your data.</p>

    <h2>6. Contact Us</h2>
    <p className="text-2xl">If you have any questions or need further clarification regarding these terms and conditions, please feel free to reach out to us at [Your Contact Email or Phone Number].</p>

    <p className="text-2xl">By using our services, you acknowledge and agree to these terms and conditions.</p>
    </div>
    <Footer/>
</>
  )
}

export default page