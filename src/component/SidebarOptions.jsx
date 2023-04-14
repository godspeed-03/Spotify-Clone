import React from 'react'

export default function SidebarOptions({Icon, tittle}) {
  return (
    
    <div className=" flex text-[#8c8c8c] hover:text-white p-1 max-sm:text-xs md:text-sm md:p-3 transition-colors duration-200 ease-in">
        {Icon && <Icon className='mx-1  md:mx-3 w-5 h-5 md:w-10 md:h-20' />}
        {Icon ?<h4>{tittle}</h4>:  <p>{tittle}</p> }
       
    </div>
  )
}
