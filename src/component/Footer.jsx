import React from 'react'
import '../index.css'

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Slider } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer flex justify-between h-[40px] md:h-[90px] fixed bottom-0 p-5 w-full bg-[#282828] ">
        <div className="footer_left flex-[0.3] flex items-center text-white">
            <img src="" alt="" className="mr-5 object-contain h-14 w-14" />
            <div className="songinfo">
                <h4>Tittle</h4>
                <p>Desc</p>
            </div>

        </div>
        <div className="footer_center flex-[0.4] px-24 py-0 text-white flex items-center justify-between"> 
            <ShuffleIcon  className='text-green-600 '/>
            <SkipPreviousIcon className='' />
            <PlayCircleOutlineIcon className='' />
            <SkipNextIcon className='' />
            <RepeatIcon className='text-green-600 ' />


        </div>
        <div className="footer_right flex flex-[0.3] px-10 py-0 text-white items-center justify-between">
        <PlaylistPlayIcon className='mx-1 lg:mx-3  ' />
        <VolumeDownIcon className='mx-1 lg:mx-3 ' />
        <Slider aria-labelledby="continuous-slider" className='mx-1 lg:mx-5' color='success' />
        

        </div>
    </div>
  )
}
