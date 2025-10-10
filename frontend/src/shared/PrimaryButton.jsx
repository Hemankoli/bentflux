import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

export default function PrimaryButton({name, method}) {
  return (
    <div className="bg-transperent border border-secondary px-4 py-3 rounded-full flex items-center gap-1 w-fit hover:text-accent text-primary">
      <button onClick={method} className="text-[12px]">
          {name}
        </button>
        <IoIosArrowForward className='mt-1' />
    </div>
  )
}
