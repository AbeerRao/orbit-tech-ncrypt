import Footer from "../components/Footer"
import Header from "../components/Header"
import OrbitInfo from "../components/OrbitInfo"

function Learn() {
     return (
          <div>
               <Header />
               <main className="flex">
                    <section className="flex-grow pt-14 px-6">
                         <h1 className="text-4xl font-semibold">Orbit Technologies</h1>
                         <p className="text-gray-500 mt-1">The future of travelling</p>
                         <div className="border mt-5 shadow-lg mb-5 p-5 rounded-2xl">
                              <OrbitInfo />
                         </div>
                    </section>
               </main>
               <Footer />
          </div>
     )
}

export default Learn
