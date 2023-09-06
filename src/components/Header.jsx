// eslint-disable-next-line no-unused-vars
import React from 'react'
import './css/header.css'
import sdlogo from '/src/assets/icons/sd_logo.png'

function Header() {
  return (
    <header className='header'>
        <img src={sdlogo} className='sd-logo'/>
        <nav className='nav-bar'>
          <a className='nav-link' href=''>About</a>
          <a className='nav-link' href=''>Projects</a>
          <a className='nav-link' href=''>Hobbies</a>
          <a className='nav-link' href=''>Experience</a>
          <a className='nav-link' href=''>Contact</a>
          <button className='cv-button'>Download CV</button>
        </nav>
    </header>
  )
}

export default Header