import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Orbit Technologies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 py-10 my-10 shadow-2xl">
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
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("http://13.232.61.5/locations").then(res => res.json());
  return {
    props: {
      exploreData
    }
  }
}