import Image from 'next/image';

function Testimonial({ img, name, description, designation }) {
     return (
          <div className="flex mt-5">
               <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                         src={img}
                         layout="fill"
                         objectFit="cover"
                         className="rounded-2xl" />
               </div>
               <div className="flex flex-col flex-grow pl-5">
                    <h4 className="text-2xl font-semibold">{name}</h4>
                    <div
                         className="border-b w-10 pt-2" />
                    <p className="pt-2 text-gray-700 flex-grow leading-loose">
                         {description}
                    </p>
                    <p className="text-sm text-blue-500">{designation}</p>
               </div>
          </div>
     )
}

export default Testimonial
