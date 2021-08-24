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
                    src="https://a0.muscache.com/im/pictures/8411c0f6-efa0-4e25-8b9f-022261fc0b52.jpg?im_w=2560"
                    layout="fill"
                    objectFit="cover" />
               <div className="absolute top-1/2 w-full text-left text-white">
                    <p className="text-bold ml-12 text-5xl">Where do we go?<br />What do we do?</p>
                    <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 ml-12 mt-10" onClick={learn}>Learn here</button>
               </div>
          </div>
     )
}

export default Banner
