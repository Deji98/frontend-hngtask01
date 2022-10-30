import React from 'react'
import profile from "../Images/profile.png"
import "../App.css"
import {AiOutlineSlack} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"

function Dashboard(){
  return (
    <div className='parent'>
    <div className='side'>
    <img id='profile_img'  src={profile} alt="profile_img" /> 
    <h2>Annette Black</h2>
    <h3 id='slack'>Slack Id: Adesina Adedeji</h3>
    </div>
  <div className='twitter'>
    <h3>Twitter Link:</h3>
    <div id='twitter' className='twitter-link'>
    <a href='https://twitter.com/AdesinaAdedej20'>AdesinaAdedej20</a>
    </div>
  </div>
  <div className='Zuri'>
<h3>Zuri Team</h3>
<div id='btn__Zuri' className='zuri-link'>
    <a href='https://training.zuri.team/'>Zuri Team</a>
    </div>
  </div>
  <div id='books' className='Books'>
<h3>Zuri Books</h3>
<div className='books-link'>
    <a href='https://books.zuri.team/'>Zuri Books</a>
    </div>
  </div>
  <div id='book__python' className='python'>
<h3>Python Books</h3>
<div className='python-link'>
    <a href='https://books.zuri.team/'>Python Books</a>
    </div>
  </div>
  <div id='pitch' className='background'>
<h3>Background Check:</h3>
<div className='background-link'>
    <a href='https://background.zuri.team/'>Background Check for coders</a>
    </div>
  </div>
  <div id='book__design' className='design'>
<h3>Design Books</h3>
<div className='design-link'>
    <a href='https://books.zuri.team/design-rules'>Design Books</a>
    </div>
  </div>
  <div className='dev'>
  <AiOutlineSlack size="30px" />
<AiOutlineGithub size="30px"/>
  </div>
</div>
  )
}

export default Dashboard