import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"
import {AiOutlineGithub} from "react-icons/ai"

function Home() {
  return (
    <div className='home'>
    check source code here:
    <a href=' https://github.com/Deji98/frontend-hngtask01' target="_blank"><AiOutlineGithub /></a>
   
  
    <h1>Welcome to the Landing Page, click the button below to go to your Dashboard</h1>
    <Link style={{textDecoration:"none", backgroundColor:"aqua", color:"darkblue", padding:"25px", paddingTop:"15px", paddingBottom:"15px", paddingLeft:"35px", paddingRight:"35px", borderRadius:"10px"}} to={'Dashboard'} >Dashboard</Link>
  
   
    </div>
  )
}

export default Home