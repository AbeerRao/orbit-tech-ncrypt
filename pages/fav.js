import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

function Fav({ favsData }) {
     return (
          <div>
               <Header placeholder={"Favourite stays from across the universe"} />
               <main className="flex">
                    <section className="flex-grow pt-14 px-6">
                         <p className="text-sm">A curated wishlist of the favourite locations of our customers</p>
                         <h1 className="text-3xl font-semibold mt-2 mb-6">Stays from across the universe</h1>
                         <div className="flex flex-col">
                              {favsData?.map((item) => {
                                   return (
                                        <InfoCard
                                             key={item.title}
                                             img={item.img}
                                             location={item.location}
                                             title={item.title}
                                             description={item.description}
                                             star={item.star}
                                             price={item.price} />
                                   )
                              })}
                         </div>
                    </section>
               </main>
               <Footer />
          </div>
     )
}

export default Fav

export async function getStaticProps() {
     const favsData = await fetch("http://13.232.61.5/favs").then(res => res.json());
     return {
          props: {
               favsData
          }
     }
}
