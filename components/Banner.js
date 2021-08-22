import Image from "next/image";
import { useRouter } from "next/dist/client/router";

function Banner() {

     const router = useRouter();
     const learn = () => {
          router.push('/learn')
     }

     return (
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
               <Image
                    src="https://links.papareact.com/0fm"
                    layout="fill"
                    objectFit="cover" />
               <div className="absolute top-1/2 w-full text-center">
                    <p className="text-sm sm:text-lg text-semibold">Where do we go? What do we do?</p>
                    <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150" onClick={learn}>Learn here</button>
               </div>
          </div>
     )
}

export default Banner
