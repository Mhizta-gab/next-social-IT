import Image from "next/image"

const Feed = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
        {/* USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <Image src={"/image.webp"} alt="" width={40} height={40} className="w-10 h-10  rounded-full"/>
            <span className="font-medium">Jack Griffo</span>
            </div>

            <Image src={"/more.png"} alt="" width={16} height={16}/>
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src={"/image.webp"} alt="" fill className="object-cover rounded-md "/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse eveniet quos sequi, consequatur debitis cumque, magni ullam, facere tempora sed tenetur quaerat est nam. Sapiente ratione error sequi expedita?</p>
        </div>

        {/* INTERACTION */}
        <div className=""></div>

    </div>
  )
}

export default Feed
