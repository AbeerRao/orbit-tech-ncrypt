import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {

     const router = useRouter();

     const { location, startDate, endDate, noGuests } = router.query;
     const formattedStartDate = format(new Date(startDate), "dd MMMM")
     const formattedEndDate = format(new Date(endDate), "dd MMMM")
     const range = `${formattedStartDate} - ${formattedEndDate}`
     const searchHolder = `${location} | ${noGuests} guests | ${range}`

     return (
          <div>
               <Header placeholder={searchHolder} />
               <main className="flex">
                    <section className="flex-grow pt-14 px-6">
                         <p className="text-sm">300+ Stays for {noGuests} guests ({range})</p>
                         <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                         <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                              <p className="search-button">Cancellation Flexibility</p>
                              <p className="search-button">Type of Place</p>
                              <p className="search-button">Price</p>
                              <p className="search-button">Rooms and Beds</p>
                              <p className="search-button">Other Filters</p>
                         </div>
                         <div className="flex flex-col">
                              {searchResults?.map((item) => (
                                   <InfoCard
                                        key={item.title}
                                        img={item.img}
                                        location={item.location}
                                        title={item.title}
                                        description={item.description}
                                        star={item.star}
                                        price={item.price}
                                        total={item.total} />
                              ))}
                         </div>
                    </section>
               </main>
               <Footer />
          </div>
     )
}

export default Search;

export async function getServerSideProps() {
     const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
     return {
          props: {
               searchResults,
          }
     }
}