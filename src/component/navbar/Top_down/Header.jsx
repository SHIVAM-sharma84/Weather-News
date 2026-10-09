import React, {  useState } from 'react'
import Work from '../../work'
import Navbar from '../Navbar'
import Home from '../../../multipage/Home'
import { ArrowDownWideNarrow } from 'lucide-react';
import { ArrowUpWideNarrow } from 'lucide-react';
import { VIDEO_API_KEY } from '../../storage'
const Header = () => {
  
  const [iconset, seticonset] = useState(true)
  return (
    <div className="">
      {/* Mobile view */}
      <div className="md:hidden flex flex-wrap bg-gray-300/50 items-center gap-6  py-3 px-2 md:px-10 rounded-b-4xl">
        <div className="flex flex-wrap items-center gap-5">
          <div className="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRB9cgxddtBN644xmiKpzCRrzBK_ey_s9jb14_8OUww&s" alt="" className='rounded-full h-20 w-20 border-2 md:border-2 object-cover' />
          </div>
          <span className='text-center text-3xl font-medium '>Weather <span className='text-red-400'>Check</span></span>
        </div>
        <div className="">
          <button className="active:scale-95" onClick={() => {
            seticonset(!iconset)
          }}>
            {iconset === false ? (
              <ArrowDownWideNarrow size={36} strokeWidth={2.5} />
            ) : (
              <ArrowUpWideNarrow size={36} strokeWidth={2.5} />
            )}
          </button>
        </div>

      </div>
      {/* Computer View */}
      <div className="hidden md:flex flex flex-wrap items-center gap-6 justify-between bg-gray-300/50 py-5 px-2 md:px-10 rounded-b-4xl">
        <div className="flex flex-wrap items-center gap-6">
          <div className="">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRB9cgxddtBN644xmiKpzCRrzBK_ey_s9jb14_8OUww&s" alt="" className='rounded-full h-20 w-20 border-2 md:border-2 object-cover' />
          </div>
          <div className="">
            
            <span className='text-center text-4xl md:text-5xl  '><b>Weather </b><span className='text-red-400 font-light'>Check</span></span>
          </div>
        </div>
        <div className="transition-all duration-100  ease-in-out text-xl flex items-center text-gray-500 font-semibold border-2 border-gray-500 bg-blue-300/20 px-15 py-5  rounded-4xl shadow-[inset_0_-20px_10px_rgba(0,0,0,0.15)] [clip-path:polygon(5%_0%,100%_0%,100%_100%,5%_100%,15%_50%)]" >
          <Navbar />
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-4 md:py-0 ">
        <div className=""></div>
        <div className={`bg-blue-500 text-white text-2xl ${iconset === false ? 'block' : 'hidden'} bg-blue-300/20 p-5 rounded-2xl action:scale-95 `}>
          <Navbar />
        </div>
      </div>

      <div className=" py-10 bg-transparent flex items-center justify-center">
      </div>
    </div>
  )
}

export default Header