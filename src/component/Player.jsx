import React from 'react'
import SideBar from './SideBar'
import Body from './Body'
import Footer from './Footer'


export default function Player({spotify}) {
  return (
    <div className="palyer">
      <div className="body flex">
      <SideBar />
      <Body spotify={spotify} /> 
      </div>
      <Footer />
    </div>
  )
}
