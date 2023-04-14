import React from 'react'
import SidebarOptions from './SidebarOptions';
import SidebarPlaylists from './SidebarPlaylists';
import { useDataLayerValue } from "../Utils/DataLayer";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'; 
import Splogo from '../assets/Spotify-symbol.jpg';


export default function SideBar() {
  const[{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className="bg-black flex-[0.15] h-[100vh] min-w-[125px] px-3 text-white">
      <img src={Splogo} alt="spotify logo" className="logo  object-contain h-10 md:h-20 md:w-[150px]" />
      <SidebarOptions Icon={HomeIcon} tittle='Home' />
      <SidebarOptions Icon={SearchIcon} tittle='Search' />
      <SidebarOptions Icon ={LibraryMusicIcon} tittle='Your Library' />

      <br />

      <strong className="p-1 ml-2 text-sm">
        PLAYLIST
      </strong>
      <hr className='m-auto border border-solid border-slate-600 w-[90%]' />
      <div className="">

      {playlists?.items?.map((playlist) => (
        <SidebarPlaylists  tittle={playlist.name}  />

      ))}
      </div>

    </div>

  ) 
}
