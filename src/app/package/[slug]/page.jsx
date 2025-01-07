import React from 'react';
import Header from '../../../Common/Header'
import Footer from "../../../Common/Footer";
import HomePage from "../../../Component/HomePage";
import { data } from "../../../Common/Content";
import Link from 'next/link';

const page = ({ params }) => {

    const filteredData = data.map(state => {
        return {
            ...state,
            destination: state.destination.filter(dest => params.slug == "popularPackage" ? dest.popular : dest.season)
        };
    }).filter(state => state.destination.length > 0);


    return (
        <div>
            <Header />
            <HomePage />
            <section className='max-w-screen-lg mx-auto mt-6'>

            <h2 className="text-center text-orange font-semibold text-5xl font-sans py-8">
                Our Popular {params.slug == "popularPackage" ? "Package" : "Destination of Season"}
            </h2>
            <p className="md:max-w-screen-sm max-w-3xl  mx-auto text-2xl text-center text-web font-medium font-sans">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio dolorum accusamus omnis. Quisquam beatae quasi veniam vel.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2 place-items-center p-4">

                {
                    filteredData.map((elem, id) => elem.destination.map((data, ind) => {
                        return (
                            <div key={ind} className="m-4">
                                <div class="max-w-md rounded overflow-hidden shadow-lg">
                                <Link href={`/destination/${data.place}`} className="">
                                    <img class="w-full h-full" src={data.img.src} alt="Sunset in the mountains" />
                                    </Link>
                                    <div class="px-6 py-4">
                                        <div class="font-semibold text-3xl text-web mb-2">{data.place}</div>
                                        <Link href={`/destination/${data.place}`} className="">
                                        <p class="text-web text-xl">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
                                        </p>
                                        </Link>
                                    </div>
                                    <div class="px-6 pt-4 pb-2 flex justify-between items-center">
                                    <Link href={`/destination/${data.place}`} className="">

                                        <span class="  px-3 py-1 text-3xl font-medium text-web mr-2 mb-2">{data.package}</span>
                                        </Link>
                                        <Link href={`/destination/${data.place}`} className="">
                                        <span class=" bg-web rounded-full px-6 py-3 text-3xl font-medium text-white mr-2 mb-2">{data.packagePrice}</span>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }))
                }
            </div>
            </section>
            <Footer />
        </div>
    )
}

export default page