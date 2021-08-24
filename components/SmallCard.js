import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

function SmallCard({ img, location, distance }) {

     const router = useRouter();
     const [startDate, setStartDate] = useState(new Date())
     const [endDate, setEndDate] = useState(new Date())
     const [noGuests, setNoGuests] = useState(1);

     const search = () => {
          router.push({
               pathname: '/search',
               query: {
                    location: location,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noGuests: noGuests,
               }
          })
     }

     return (
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out" onClick={search}>
               <div className="relative h-16 w-16">
                    <Image
                         src={img}
                         layout="fill"
                         className="rounded-lg" />
               </div>
               <div>
                    <h2>{location}</h2>
                    <h3 className="text-gray-500">{distance}</h3>
               </div>
          </div>
     )
}

export default SmallCard
