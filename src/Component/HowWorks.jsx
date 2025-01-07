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
                <h3 className='text-orange font-cursive'>How We Works</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="">
                    <div class="WhyChooseBox">
                        <span class="Icon"><FaWpforms style={{fontSize:"40px" ,color:"#fff"}}/></span>
                        <h5>Fill the form</h5>
                        <p>Click on Book now button and fill the following details . Our team will reach out you soon.</p>
                    </div>
                </div>
                <div class="">
                    <div class="WhyChooseBox">
                        <span class="Icon"><GiConfirmed style={{fontSize:"40px" ,color:"#fff"}}/></span>
                        <h5>Confirm your location </h5>
                        <p>Confirm Your location , date , packeges where you want to go our team will call or messages you.</p>
                    </div>
                </div>
                <div class="">
                    <div class="WhyChooseBox">
                        <span class="Icon"><IoMdHappy style={{fontSize:"40px" ,color:"#fff"}}/></span>
                        <h5>Enjoy your destination</h5>
                        <p>Once date and destination confirmation our team will handle all things , you just sit back and Enjoy your travel.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      

  )
}

export default HowWorks