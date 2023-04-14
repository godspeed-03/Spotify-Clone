import React from 'react'
import {loginUrl} from './Spotify'

import Splogo from '../assets/Spotify-symbol.jpg';

export default function Login() {
  return (
    <>
    <div className="login flex flex-col bg-black h-[100vh] justify-center  items-center">
    <img className="w-[100%]" src={Splogo} alt="" /> 
    <a href={loginUrl} className="p-2 md:p-5 m-2 rounded-3xl bg-[#1db954] text-white font-extrabold">
   Login with Spotify
    </a>
    </div>
    </>

  )
}
