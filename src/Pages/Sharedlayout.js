import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Pages/Footer'
import "../App.css"

function Sharedlayout() {
  return (
    <div className='layout'>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Sharedlayout