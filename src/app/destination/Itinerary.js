import React from 'react'

const Itinerary = ({data}) => {
  return (
//     <div className='m-10'>
//         <section class="max-w-screen-lg  mx-auto ">
//             <h3 className='text-center py-10 text-orange underline text-5xl font-semibold'>Your Itinernary</h3>
//    <div>
//       <div class="flex flex-row">
//          <div class="hidden md:flex flex-col items-center">
//             <div class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
//                <div class="text-3xl font-black text-orange">Day 1</div>
//                <div class="text-orange text-xl">Arriving</div>
//             </div>
//             <div class="h-full border-l-4 border-transparent">
//                <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
//             </div>
//          </div>
//          <div class="flex-auto border rounded  border-gray-300">
//             <div class="flex md:flex-row flex-col items-center">
//                <div class="flex-auto">
//                   <div class="md:hidden text-orange  text-3xl font-normal uppercase pt-3 pl-3 text-web"><span class="font-black">Day 1</span> - Idea</div>
//                   <div class="p-3 text-3xl text-web font-bold">Arriving in your destination</div>
//                   <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
//                </div>
//             </div>
//          </div>
//       </div>
//       <div class="flex items-start flex-row">
//          <div class="border-t-4 border-r-4 border-transparent">
//             <div class="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
//          </div>
//          <div class="border-t-4 border-transparent flex-auto">
//             <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
//          </div>
//          <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
//       </div>
//       <div class="flex flex-row-reverse">
//          <div class="hidden md:flex flex-col items-center">
//             <div class="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
//                <div class="text-3xl font-black text-orange">Day 2</div>
//                <div class="text-orange text-xl">Exploring</div>
//             </div>
//             <div class="h-full border-r-4 border-transparent">
//                <div class="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
//             </div>
//          </div>
//          <div class="flex-auto border rounded  border-gray-300">
//             <div class="flex md:flex-row flex-col items-center">
//                <div class="flex-auto">
//                   <div class="md:hidden text-orange  text-3xl font-normal uppercase pt-3 pl-3 text-web"><span class="font-black">Day 2</span> - Collaboration</div>
//                   <div class="p-3 text-3xl text-web font-bold">Find your team and collaborate</div>
//                   <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
//                </div>
//             </div>
//          </div>
//       </div>
//       <div class="flex items-start flex-row-reverse">
//          <div class="border-t-4 border-l-4 border-transparent">
//             <div class="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
//          </div>
//          <div class="border-t-4 border-transparent flex-auto">
//             <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
//          </div>
//          <div class="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
//       </div>
//       <div class="flex flex-row">
//          <div class="hidden md:flex flex-col items-center">
//             <div class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
//                <div class="text-3xl font-black text-orange">Day 3</div>
//                <div class="text-orange text-xl">Exploring</div>
//             </div>
//             <div class="h-full border-l-4 border-transparent">
//                <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
//             </div>
//          </div>
//          <div class="flex-auto border rounded  border-gray-300">
//             <div class="flex md:flex-row flex-col items-center">
//                <div class="flex-auto">
//                   <div class="md:hidden text-orange  text-3xl font-normal uppercase pt-3 pl-3 text-web"><span class="font-black">Day 3</span> - Planification</div>
//                   <div class="p-3 text-3xl text-web font-bold">Make a good plan and prepare tasks</div>
//                   <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
//                </div>
//             </div>
//          </div>
//       </div>
//       <div class="flex items-start flex-row">
//          <div class="border-t-4 border-r-4 border-transparent">
//             <div class="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
//          </div>
//          <div class="border-t-4 border-transparent flex-auto">
//             <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
//          </div>
//          <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
//       </div>
//       <div class="flex flex-row-reverse">
//          <div class="hidden md:flex flex-col items-center">
//             <div class="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
//                <div class="text-3xl font-black text-orange">Day 4</div>
//                <div class="text-orange text-xl">Returning</div>
//             </div>
//          </div>
//          <div class="flex-auto border rounded  border-gray-300">
//             <div class="flex md:flex-row flex-col items-center">
//                <div class="flex-auto">
//                   <div class="md:hidden text-orange  text-3xl font-normal uppercase pt-3 pl-3 text-web"><span class="font-black">Day 4</span> - Implementation</div>
//                   <div class="p-3 text-3xl text-web font-bold">Execute, impletement your solution</div>
//                   <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
//                </div>
//             </div>
//          </div>
//       </div>
//       <div class="flex items-start flex-row-reverse">
//          <div class="border-t-4 border-l-4 border-transparent">
//             <div class="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
//          </div>
//          <div class="border-t-4 border-transparent flex-auto">
//             <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
//          </div>
//          <div class="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
//       </div>
//       <div class="flex flex-row">
//          <div class="hidden md:flex flex-col items-center">
//             <div class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
//                <div class="text-3xl font-black text-orange">Day 3</div>
//                <div class="text-orange text-xl">Exploring</div>
//             </div>
//             <div class="h-full border-l-4 border-transparent">
//                <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
//             </div>
//          </div>
//          <div class="flex-auto border rounded  border-gray-300">
//             <div class="flex md:flex-row flex-col items-center">
//                <div class="flex-auto">
//                   <div class="md:hidden text-orange  text-3xl font-normal uppercase pt-3 pl-3 text-web"><span class="font-black">Day 3</span> - Planification</div>
//                   <div class="p-3 text-3xl text-web font-bold">Make a good plan and prepare tasks</div>
//                   <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
//                </div>
//             </div>
//          </div>
//       </div>
//    </div>
// </section>
//     </div>

<div className=" bg-gray-50 rounded-lg shadow-xl">
  <h3 className="px-4 py-8 text-orange text-center font-cursive text-4xl uppercase font-bold">
    Your Itinerary
  </h3>
  <div>
   {
      data?.map((elem ,id)=>{c
         return(
            <div className="card p-4" key={id}>
      <details className={`transition duration-500 ${id%2==0?"bg-blue-200	hover:bg-blue-400 border-blue-400":"bg-orange-200	hover:bg-orange-400 border-orange-400"} cursor-pointer p-8 border-solid border-l-8  rounded-md`}>
      <summary className="flex items-center justify-space-between focus:outline-none">
                <header className="flex justify-center items-center">
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.6066 22H11.3934"
                      stroke="#202842"
                      strokeWidth="1.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 11.3934V32.6066"
                      stroke="#202842"
                      strokeWidth="1.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1 className="leading-5 flex self-center font-semibold text-black text-3xl">
                   Day{id+1} - {elem?.heading}
                  </h1>
                </header>
              </summary>
              <div className="content font-medium ml-10 text-xlg">
                <p>
                 {elem?.text}
                </p>
              </div>
            </details>
          </div>
         )
      })
   }
    {/* <div className="card p-4">
      <details className="transition duration-500 bg-orange-200	hover:bg-orange-400 cursor-pointer p-8 border-solid border-l-8 border-orange-400 rounded-md">
        <summary className="flex items-center justify-space-between focus:outline-none">
          <header className="flex justify-center items-center">
            <svg
              className="w-10 h-10"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.6066 22H11.3934"
                stroke="#202842"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 11.3934V32.6066"
                stroke="#202842"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="leading-5 flex self-center text-black text-xl">
              What’s the best Wi-Fi name you’ve seen?
            </h1>
          </header>
        </summary>
        <div className="content ml-10 text-lg">
          <ul className="list-disc p-4">
            <li>Mom Use This One</li>
            <li>I Now Declare You Husband and Wi-Fi</li>
            <li>Benjamin FrankLAN</li>
            <li>Martin Router King</li>
          </ul>
        </div>
      </details>
    </div> */}
    
  </div>
</div>

  )
}

export default Itinerary