import React from 'react';
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import img from "../../Assets/travel/coming-soon.jpg";

const index = () => {
    return (
        <div>
            <Header />

            <div className='max-w-screen-lg mx-auto my-12'>
                <img src={img.src} alt='coming-soon' />
            </div>
            <Footer />
        </div>
    )
}

export default index