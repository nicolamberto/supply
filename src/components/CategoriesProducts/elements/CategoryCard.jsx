import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
export default function CategoryCard({ item }) {
  return (

    <div className="flex flex-col justify-center gap-4 items-start h-full w-full ">
      <Link className='h-full' to={`/${item.slug}`}>
        <img src={item.img} alt="imagen" className="rounded-[20px] h-full object-cover" />
      </Link>
      <p className="uppercase font-semibold">{item.name}</p>
      <button className="w-full flex justify-end text-[30px]">
        <Link to={`/${item.slug}`}>
          <div className="border-2 flex justify-center items-center px-5 rounded-full text-green-800 hover:bg-green-800 hover:text-white cursor-pointer transition">
            <HiArrowLongRight />
          </div>
        </Link>
      </button>
    </div>

  )
}
