import React from 'react';
import { FaWpforms } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { IoMdHappy } from "react-icons/io";
const HowWorks = () => {
  return (
    <section>
        <div class="WhyChooseUsArea bg-blue-200">
            <div class="section-title">
                {/* <p>Our Services</p> */}
                <h3 className='text-orange font-cursive'>Plan Your Trip in 3 Easy Steps</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="">
                    <div class="WhyChooseBox">
                        <span class="Icon"><FaWpforms style={{fontSize:"40px" ,color:"#fff"}}/></span>
                        <h5>Fill out the form</h5>
                        <p>Share your travel details with us – it only takes a minute!</p>
                    </div>
                </div>
                <div class="">
                    <div class="WhyChooseBox">
                        <span class="Icon"><GiConfirmed style={{fontSize:"40px" ,color:"#fff"}}/></span>
                        <h5>Confirm your plan </h5>
                        <p>Our team will reach out to finalize your package and itinerary.</p>
                    </div>
                </div>
                <div class="">
                    <div class="WhyChooseBox">
                        <span class="Icon"><IoMdHappy style={{fontSize:"40px" ,color:"#fff"}}/></span>
                        <h5>Travel stress free</h5>
                        <p>Sit back and enjoy your trip while we take care of everything else.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      

  )
}

export default HowWorks