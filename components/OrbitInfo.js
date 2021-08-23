import Image from "next/image";

function OrbitInfo() {
     return (
          <div className="flex-col py-7 px-6">
               <div className="flex">
                    <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                         <Image
                              src="https://i1.wp.com/www.alphr.com/wp-content/uploads/2018/07/space_vacation.jpg?fit=2048%2C1152&ssl=1"
                              layout="fill"
                              objectFit="cover"
                              className="rounded-2xl" />
                    </div>
                    <div className="flex flex-col flex-grow pl-5">
                         <h4 className="text-2xl font-semibold">Founded by Abeer Rao in 2010...</h4>
                         <div
                              className="border-b w-10 pt-2" />
                         <p className="pt-2 text-gray-700 flex-grow leading-loose">
                              We have a vision of taking humanity to other star systems by leveraging state of the art space technologies. So far, we have managed to setup self-sustaining ecosystems on 9 exo planets that are perfect for human inhabitants. We are now starting our new division Outer Orbit Travels through which ordinary folks can experience and vastness of space for the price of a 4 star hotel stay.
                         </p>
                    </div>
               </div>
               <div className="flex mt-10">
                    <div className="flex flex-col flex-grow pl-5">
                         <h4 className="text-2xl font-semibold">How is it done?</h4>
                         <div
                              className="border-b w-10 pt-2" />
                         <p className="pt-2 text-gray-700 flex-grow leading-loose">
                              As mentioned earlier, we leverage the best space tech provided by our parent organisation Orbit Technologies. We also work in tandum with NASA for making the environment sustainable on each of the planets. This has taken multiple years of research and perfection to make sure that there are no errors.
                         </p>
                    </div>
                    <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                         <Image
                              src="https://epsnews.com/wp-content/uploads/2019/04/Microchippic1-e1554480534396.jpg"
                              layout="fill"
                              objectFit="cover"
                              className="rounded-2xl" />
                    </div>
               </div>
               <div className="flex mt-10">
                    <div className="flex flex-col flex-grow pl-5">
                         <h4 className="text-2xl font-semibold">How to navigate?</h4>
                         <div
                              className="border-b w-10 pt-2" />
                         <p className="pt-2 text-gray-700 flex-grow leading-loose">
                              For the best results on this website, only search for the planets given in the "Explore nearby" section of the home page. They are the planets we have been able to colonise and made safe for human existance.
                         </p>
                    </div>
               </div>
          </div>
     )
}

export default OrbitInfo
