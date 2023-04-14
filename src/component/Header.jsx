import React from 'react'
import { useDataLayerValue } from '../Utils/DataLayer';
import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'


export default function Header({spotify}) {
  const [{ user }, dispatch] = useDataLayerValue();

  return (

    <div className="header flex justify-between mb-[30px]">
        
        <div className="left bg-white text-slate-400  flex flex-[0.5] items-center rounded-3xl p-3 m-3 min-w-[300px]">
          <SearchIcon />
          <input className=' w-full focus:text-black pl-3 focus:outline-none'
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />

        </div>
        <div className="right flex p-3 items-center ">
          <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
          <h4 className='p-2 text-white text-xs '>{user?.display_name}</h4>
            
        </div>
    </div>
  )
}
