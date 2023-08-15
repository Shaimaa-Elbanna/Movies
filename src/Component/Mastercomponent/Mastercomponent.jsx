import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Mastercomponent({logOut}) {
  return (
    <><Navbar  logOut={logOut}/>
    
    <div className="">
      <Outlet/>
    </div>
    </>
  )
}
