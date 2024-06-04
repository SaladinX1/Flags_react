import React from 'react'

export default function ListCard({country}) {
  return (
        <li className='relative cursor-pointer rounded transition-transform duration-300 hover:-translate-y-1 will-change-transform'>
            <h2 className='absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-lg rounded'>
                {country.name.common}
                <img className='w-full h-full object-cover rounded' src={country.flags.svg} alt="" />
            </h2>
        </li>

  )
}
