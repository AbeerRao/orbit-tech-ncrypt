import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {

     const [searchInput, setSearchInput] = useState('')
     const [startDate, setStartDate] = useState(new Date())
     const [endDate, setEndDate] = useState(new Date())
     const [noGuests, setNoGuests] = useState(1);
     const router = useRouter();

     const handleSelect = (ranges) => {
          setStartDate(ranges.selection.startDate)
          setEndDate(ranges.selection.endDate)
     }

     const selectionRange = {
          startDate: startDate,
          endDate: endDate,
          key: 'selection'
     }

     const search = () => {
          router.push({
               pathname: '/search',
               query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noGuests: noGuests,
               }
          })
     }

     const myLoader = ({ src }) => {
          return src
     }

     const MyImage = () => {
          return (
               <Image loader={myLoader} src={"https://darth-0-assets.s3.us-south.cloud-object-storage.appdomain.cloud/Copy%20of%20Untitled%20(2).png"} objectFit="cover" layout="fill" objectPosition="left" />
          )
     }

     return (
          <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
               {/* Left */}
               <div className="relative flex items-center h-14 cursor-pointer my-auto" onClick={() => router.push('/')}>
                    {MyImage()}
               </div>
               {/* Middle */}
               <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                    <input
                         value={searchInput}
                         onChange={(e) => setSearchInput(e.target.value)}
                         placeholder={placeholder || "Start your search"}
                         type="text"
                         className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400" />
                    <SearchIcon
                         className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2" />
               </div>
               {/* Right */}
               <div className="hidden md:inline-flex space-x-4 items-center justify-end text-gray-500">
                    <p className="cursor-pointer">Become a host</p>
                    <GlobeAltIcon
                         className="h-6 cursor-pointer" />
                    <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                         <MenuIcon
                              className="h-6 cursor-pointer" />
                         <UserCircleIcon
                              className="h-6 cursor-pointer" />
                    </div>
               </div>
               {searchInput && (
                    <div className="flex flex-col col-span-3 mx-auto mt-5">
                         <DateRangePicker
                              ranges={[selectionRange]}
                              minDate={new Date()}
                              rangeColors={["#FD5B61"]}
                              onChange={handleSelect} />
                         <div className="flex items-center border-b mb-4">
                              <h2 className="text-2xl pl-4 flex-grow font-semibold">
                                   Number of Guests
                              </h2>
                              <UsersIcon
                                   className="h-5 text-red-400" />
                              <input
                                   type="number"
                                   className="w-12 pl-2 text-lg outline-none text-red-400"
                                   value={noGuests}
                                   onChange={(e) => setNoGuests(e.target.value)}
                                   min={1} />
                         </div>
                         <div className="flex">
                              <button className="flex-grow text-gray-500" onClick={(e) => setSearchInput("")}>Cancel</button>
                              <button className="flex-grow text-red-400" onClick={search}>Search</button>
                         </div>
                    </div>
               )}
          </header>
     )
}

export default Header
