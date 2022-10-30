import React from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowRoundBack} from "react-icons/io"
import "../App.css"
function error() {
  return (
    <div className='error'>
      <small className='err404'>404 error</small>
      <h1>We can't find that page</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <div className='mylinks'>
      <Link className='link1' to={'Dashboard'} ><IoIosArrowRoundBack size="20px"/>    Go Back</Link>
      <Link className='link2' to={'/'} >Take me home</Link>
      </div>
    </div>
  )
}

export default error

