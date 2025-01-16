import React from 'react';
import mot from "../Assets/mot.png";
import adtoi from "../Assets/adtoi.png"

const Liston = () => {
    return (
        <div className='bg-orange-50'>
             <h2 className="text-center text-orange  font-semibold text-5xl font-cursive py-6">
        We are featured in
      </h2>
            <div className='max-w-screen-xl px-6 py-10 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='shadow-lg w-4/5 rounded-xl bg-orange-500 m-auto'>
                        <div className='m-auto'>
                            <img src={mot.src} className='m-auto p-6 w-56' />
                            <p className='text-3xl p-16 pt-0 text-white text-center font-medium'>&quot;Certified by the Ministry of Tourism, India.&quot;</p>
                        </div>
                    </div>
                    <div className='shadow-lg w-4/5 rounded-xl bg-orange-500 m-auto'>
                        <div>
                            <img src={adtoi.src} className='m-auto p-6 w-56' />
                            <p className='text-3xl p-4 pt-0 text-white text-center font-medium'>&quot;Member of the Association of Domestic Tour Operators of India (ADTOI).&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Liston