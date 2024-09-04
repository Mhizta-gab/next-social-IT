import Image from "next/image"

const Comments = () => {
  return (
    <div className=''>
        {/* WRITE */}
        <div className="flex items-center gap-4">
          <Image src={"/image.webp"} alt="" width={32} height={32} className="w-8 h-8 rounded-full"/>
          <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl px-2 py-2 w-full">
            <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none px-3 flex-1" />
            <Image src={"/emoji.png"} alt="" width={16} height={16} className="cursor-pointer"/>
          </div>
        </div>


        {/* COMMENTS */}
        <div className="">
            {/* COMMENT */}
            <div className="flex gap-4 justify-between mt-6">
                {/* AVATAR */}
                <Image src={"/image.webp"} alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>


                {/* DESCRIPTION */}
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Bernice Spencer</span>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis accusantium ex aperiam ipsam rem, distinctio provident nihil dolor magnam, cumque quidem incidunt. Quidem quasi, voluptatibus voluptates corporis fugit excepturi.</p>

                    <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                        <div className="flex items-center gap-4">
                            <Image src={"/like.png"} width={12} height={12} alt="" className="cursor-pointer flex-1"/>
                            <span className="text-gray-300"> | </span>
                            <span className="text-gray-500"> 123 </span>
                       </div>
                       <div className="">Reply</div>
                    </div>
                </div>

                {/* ICON */}
                <div className="">
                    <Image src={"/more.png"} width={16} height={16} alt="" className="cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comments