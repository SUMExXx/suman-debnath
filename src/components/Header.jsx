/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './css/header.css'
import sdlogo from '/src/assets/icons/main-logo.png'
import Social from './Social'


function Header() {

  // eslint-disable-next-line no-unused-vars
  const [caretStateOpen, setCaretState] = useState(false)

  const toggleCaret = () => {
    setCaretState(!caretStateOpen)
  }

  return (
    <header className='header'>
      <div className='head-div'>
          <img src={sdlogo} className='sd-logo'/>
          <nav className='nav-bar'>
            <a className='nav-link' id='about' href=''>About</a>
            <a className='nav-link' id='projects' href=''>Projects</a>
            <a className='nav-link' id='experience' href=''>Experience</a>
            <a className='nav-link' id='hobbies' href=''>Hobbies</a>
            <a className='nav-link' id='contact' href=''>Contact</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-caret-down-fill caret" id='nav-caret' onClick={toggleCaret} viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            <a href='/pdf/Resume.pdf' download="Resume"><button className='cv-button'>Download CV</button></a>
          </nav>
        </div>
        <div className='link-overflow' >
          <a className='link-overflow-item nav-link' href='./'>Hobbies</a>
          <a className='link-overflow-item nav-link' href='./'>Contact</a>
        </div>
        <Social/>
        <style >{`
          #nav-caret{
            rotate: ${caretStateOpen ? '180deg' : '0deg'};
            transition: 0.2s;
          }

          .link-overflow{
            display: ${caretStateOpen ? 'flex' : 'none'};
            transition: height 0.2s;
          }
        `}</style>
    </header>
  )
}

export default Header