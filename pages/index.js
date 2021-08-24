import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';
import Testimonial from '../components/Testimonial';

export default function Home({ exploreData, testMData }) {
  return (
    <div className="">
      <Head>
        <title>Orbit Technologies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <div className="mx-auto px-10 sm:px-8 py-10 my-10 max-w-7xl rounded-3xl">
        <main className="shadow-2xl px-5 py-7 rounded-2xl">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">All Travel Locations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map((item) => (
                <SmallCard
                  key={item.location}
                  img={item.img}
                  location={item.location}
                  distance={item.distance} />
              ))}
            </div>
          </section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="Fan Favourite Locations"
            description="Wishlists curated by Outer Orbit Travels"
            buttonText="Go To The Best" />
        </main>
        <main className="shadow-2xl px-5 py-7 rounded-2xl mt-10">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Customer Testimonials</h2>
            {testMData?.map((item) => (
              <Testimonial
                name={item.name}
                description={item.description}
                img={item.img}
                designation={item.designation} />
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("http://13.232.61.5/locations").then(res => res.json());
  const testMData = await fetch("http://13.232.61.5/testm").then(res => res.json());
  return {
    props: {
      exploreData,
      testMData
    }
  }
}