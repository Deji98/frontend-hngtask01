import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"

function Home() {
  return (
    <div className='home'>
    <h1>Welcome to the Landing Page, click the button below to go to your Dashboard</h1>
    <Link style={{textDecoration:"none", backgroundColor:"aqua", color:"darkblue", padding:"25px", paddingTop:"15px", paddingBottom:"15px", paddingLeft:"35px", paddingRight:"35px", borderRadius:"10px"}} to={'Dashboard'} >Dashboard</Link>
    </div>
  )
}

export default Home