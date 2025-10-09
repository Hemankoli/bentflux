import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export default function PrimaryButton({name, method}) {
  return (
    <div className="bg-transperent border border-[#333] px-6 py-3 rounded-full flex items-center gap-1 w-fit">
      <button onClick={method} className="hover:text-white text-gray-400 text-[13px]">
          {name}
        </button>
        <IoIosArrowForward className='mt-1' />
    </div>
  )
}
