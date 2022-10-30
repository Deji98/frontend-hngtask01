import React from 'react'
import "../App.css"
import Logo from "../Images/Logo.png"
import Zuri from "../Images/Zuri.png"

function footer() {
  return (
    <div className='footer'>
      <div className='foot'>
      <img src={Zuri} alt="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={Logo} alt="i4g" />
      </div>
    </div>
  )
}

export default footer