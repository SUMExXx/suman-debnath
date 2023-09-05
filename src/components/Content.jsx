// eslint-disable-next-line no-unused-vars
import React from 'react'
import Social from './Social'
import './css/content.css'

function Content() {
  return (
    <div className='content-box'>
        <Social/>
        <div className='main-content'>
            <div className='image'/>
            <div className='about-box'>
                <div className='about-1'>
                    <h3 className='head-text'>Hi! I am <span className='name'>Suman Debnath</span><br/>and I am a...</h3>
                    <div className='skill-holder'>
                        <button className='skill-button'>
                            <h4 className='button-text'>Web Developer</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                        <button className='skill-button'>
                            <h4 className='button-text'>Graphic Designer</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                        <button className='skill-button'>
                            <h4 className='button-text'>UI/UX Designer</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                        <button className='skill-button'>
                            <h4 className='button-text'>Flutter Developer</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='about-2'>
                    <h3 className='head-text'>I also Like being a...</h3>
                    <div className='skill-holder'>
                        <button className='skill-button skill-but-2'>
                            <h4 className='button-text'>Vocalist</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                        <button className='skill-button skill-but-2'>
                            <h4 className='button-text'>Instrumentalist</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                        <button className='skill-button skill-but-2'>
                            <h4 className='button-text'>Film Critic</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content