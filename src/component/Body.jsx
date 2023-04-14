import React from 'react'
import Header from './Header'
import { useDataLayerValue } from '../Utils/DataLayer';

export default function Body({spotify}) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body flex-[0.85] bg-gradient-to-b from-[#5b5773] to-black/[1] bg-transparent text-white h-[100vh] p-7 ">
      <Header spotify={spotify} />

      <div className="body__info flex items-end p-3  ">
        <img src={discover_weekly?.images[0]?.url} alt="" className='h-[20vw] mx-5 ' />
        <div className="body__infoText  flex-[1]">
          <strong>PLAYLIST</strong>
          <h2 className='text-3xl mb-3'>Discover Weekly</h2>
          <p className='text-xs'>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  )
}
 