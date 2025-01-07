import React from 'react'

const Itinerary = () => {
  return (
    <div className='m-10'>
        <section class="max-w-screen-lg  mx-auto ">
            <h3 className='text-center py-10 text-orange underline text-5xl font-semibold'>Your Itinernary</h3>
   <div>
      <div class="flex flex-row">
         <div class="hidden md:flex flex-col items-center">
            <div class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
               <div class="text-3xl font-black text-orange">Day 1</div>
               <div class="text-orange text-xl">Arriving</div>
            </div>
            <div class="h-full border-l-4 border-transparent">
               <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
         </div>
         <div class="flex-auto border rounded  border-gray-300">
            <div class="flex md:flex-row flex-col items-center">
               <div class="flex-auto">
                  <div class="md:hidden text-orange  text-3xl font-normal uppercase pt-3 pl-3 text-web"><span class="font-black">Day 1</span> - Idea</div>
                  <div class="p-3 text-3xl text-web font-bold">Arriving in your destination</div>
                  <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
            </div>
         </div>
      </div>
      <div class="flex items-start flex-row">
         <div class="border-t-4 border-r-4 border-transparent">
            <div class="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
         </div>
         <div class="border-t-4 border-transparent flex-auto">
            <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
         </div>
         <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
      </div>
      <div class="flex flex-row-reverse">
         <div class="hidden md:flex flex-col items-center">
            <div class="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
               <div class="text-3xl font-black text-orange">Day 2</div>
               <div class="text-orange text-xl">Exploring</div>
            </div>
            <div class="h-full border-r-4 border-transparent">
               <div class="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
            </div>
         </div>
         <div class="flex-auto border rounded  border-gray-300">
            <div class="flex md:flex-row flex-col items-center">
               <div class="flex-auto">
                  <div class="md:hidden text-orange  text-3xl font-normal uppercase pt-3 pl-3 text-web"><span class="font-black">Day 2</span> - Collaboration</div>
                  <div class="p-3 text-3xl text-web font-bold">Find your team and collaborate</div>
                  <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
            </div>
         </div>
      </div>
      <div class="flex items-start flex-row-reverse">
         <div class="border-t-4 border-l-4 border-transparent">
            <div class="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
         </div>
         <div class="border-t-4 border-transparent flex-auto">
            <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
         </div>
         <div class="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
      </div>
      <div class="flex flex-row">
         <div class="hidden md:flex flex-col items-center">
            <div class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
               <div class="text-3xl font-black text-orange">Day 3</div>
               <div class="text-orange text-xl">Exploring</div>
            </div>
            <div class="h-full border-l-4 border-transparent">
               <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
         </div>
         <div class="flex-auto border rounded  border-gray-300">
            <div class="flex md:flex-row flex-col items-center">
               <div class="flex-auto">
                  <div class="md:hidden text-orange  text-3xl font-normal uppercase pt-3 pl-3 text-web"><span class="font-black">Day 3</span> - Planification</div>
                  <div class="p-3 text-3xl text-web font-bold">Make a good plan and prepare tasks</div>
                  <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
            </div>
         </div>
      </div>
      <div class="flex items-start flex-row">
         <div class="border-t-4 border-r-4 border-transparent">
            <div class="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
         </div>
         <div class="border-t-4 border-transparent flex-auto">
            <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
         </div>
         <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
      </div>
      <div class="flex flex-row-reverse">
         <div class="hidden md:flex flex-col items-center">
            <div class="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
               <div class="text-3xl font-black text-orange">Day 4</div>
               <div class="text-orange text-xl">Returning</div>
            </div>
         </div>
         <div class="flex-auto border rounded  border-gray-300">
            <div class="flex md:flex-row flex-col items-center">
               <div class="flex-auto">
                  <div class="md:hidden text-orange  text-3xl font-normal uppercase pt-3 pl-3 text-web"><span class="font-black">Day 4</span> - Implementation</div>
                  <div class="p-3 text-3xl text-web font-bold">Execute, impletement your solution</div>
                  <div class="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
  )
}

export default Itinerary