import Image from "next/image"
import Comments from "./Comments";

const Feed = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
        {/* USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <Image src={"/image.webp"} alt="" width={40} height={40} className="w-10 h-10  rounded-full"/>
            <span className="font-medium">Jack Griffo</span>
            </div>

            <Image src={"/more.png"} className="cursor-pointer" alt="" width={16} height={16}/>
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src={"/image.webp"} alt="" fill className="object-cover rounded-md "/>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse eveniet quos sequi, consequatur debitis cumque, magni ullam, facere tempora sed tenetur quaerat est nam. Sapiente ratione error sequi expedita?</p>
        </div>

        {/* INTERACTION */}
        <div className="flex items-center justify-between text-sm my-4">
          <div className="flex gap-8">
            <div className="flex items-center gap-4 bg-green-50 p-2 rounded-xl">
            <Image src={"/like.png"} className="cursor-pointer" alt="" width={16} height={16}/>
            <span className="text-gray-500"> | </span>
            <span className="text-gray-500"> 123 <span className="hidden md:inline">Likes</span></span>
            </div>

            <div className="flex items-center gap-4 bg-green-50 p-2 rounded-xl">
            <Image src={"/comment.png"} className="cursor-pointer" alt="" width={16} height={16}/>
            <span className="text-gray-500"> | </span>
            <span className="text-gray-500"> 123 <span className="hidden md:inline">Comments</span></span>
            </div>
          </div>

          <div className="">
              <div className="flex items-center gap-4 bg-green-50 p-2 rounded-xl">
                        <Image src={"/share.png"} className="cursor-pointer" alt="" width={16} height={16}/>
                        <span className="text-gray-500"> | </span>
                        <span className="text-gray-500"> 123 <span className="hidden md:inline">Shares</span></span>
              </div>
          </div>
      </div>

      <Comments />
    </div>
  );
}

export default Feed
