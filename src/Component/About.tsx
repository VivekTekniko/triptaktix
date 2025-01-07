import React from "react";
import img from "../Assets/travel/teamImages.jpg"
import Image from "next/image";
const YoutubeComponent = () => {
  return (
    <section className="bg-blue-50">
      <div className="max-w-screen-lg py-24 mx-auto ">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Images */}

          <img src={img.src} className="h-full w-full rounded-lg" />
          {/* Right Column - Text */}
          <div className="m-auto p-12 md:p-0">
            <h3 className="text-web text-5xl text-web font-bold">About Us</h3>
            <h2 className="text-4xl font-cursive font-bold text-orange my-8">
              Welcome to <span className="text-web">TripTakTix</span>
            </h2>
            <p className="text-gray-600 text-3xl mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est sit exercitationem maxime tempora minus, inventore libero quo ratione nesciunt earum velit optio repudiandae, nulla voluptates? Fuga voluptatem tempora facere?    </p>
            <p className="text-gray-600 text-3xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis optio numquam quas consectetur quia voluptas atque veritatis, accusamus eveniet suscipit reiciendis tenetur! Repellendus molestias quos, saepe inventore corrupti consequatur?
            </p>

            {/* Experience and Chefs */}
            <div className="flex space-x-10 mb-20">
              <div>
                <span className="text-web text-5xl font-bold">3</span>
                <p className="text-orange font-semibold">Years of EXPERIENCE</p>
              </div>
              <div>
                <span className="text-web text-5xl font-bold">50+</span>
                <p className="text-orange font-semibold">Event Planned</p>
              </div>
            </div>

            {/* Read More Button */}
            <a href="/contact-form" className="bg-web text-white py-6 px-10 rounded-xl text-[20px] font-bold hover:bg-orange-400 transition duration-300">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeComponent;
