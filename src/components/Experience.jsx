/* eslint-disable no-unused-vars */
import React from 'react'
import './css/webContent.css'
import { useAsync } from 'react-async'
import tech from '/src/assets/files/tech.js'
import {useState} from 'react'

function WebContent() {

  



  const [clicked, setClicked] = useState('web-skill')

  const changeClick = (changeTo) =>{
    setClicked(changeTo)
    
  }

  var skills = true

  const setSkill = (tf) =>{
    skills = tf
  }

  setSkill(true)

  var data = 'web'

  const setData = () =>{
    if(clicked == 'web-skill'){
      data = 'web'
    }
    else if(clicked == 'graphic-skill'){
      data = 'graphic'
    }
    else if(clicked == 'uiux-skill'){
      data = 'uiux'
    }
    else if(clicked == 'flutter-skill'){
      data = 'flutter'
    }
  }

  setData()

  

  // var techItems = tech[data].map((t) =><a key={crypto.randomUUID()} className='tech-items'><span className='tech-text'>{t}</span></a>)
  // var techItems = tech.map()
  
  return (
    <div className='content-holder'>
        <div className='skills-button-div'>
          
          <button className='skills-button-main' id='web-skill-button' onClick={()=>{changeClick('web-skill')}}><span className='skills-button-text-main' id='web-skill' ></span></button>
          <button className='skills-button-main' id='graphic-skill-button' onClick={()=>{changeClick('graphic-skill')}}><span className='skills-button-text-main' id='graphic-skill'></span></button>
          <button className='skills-button-main' id='uiux-skill-button' onClick={()=>{changeClick('uiux-skill')}}><span className='skills-button-text-main' id='uiux-skill'></span></button>
          <button className='skills-button-main' id='flutter-skill-button' onClick={()=>{changeClick('flutter-skill')}}><span className='skills-button-text-main' id='flutter-skill'></span></button>
        </div>
        <div className='tech-content-div'>
            <div className='tech-div'>
              {
               tech[data]['skill'].map((t) =><a key={crypto.randomUUID()} className='tech-items'><span className='tech-text'>{t}</span></a>)
              }
                
            </div>
            <div className='tech-text-div'>
                <p className='tech-para'>{tech[data]['content']}</p>
            </div>
        </div>
        <div className='image-gallery' >
          <div className='image-col'>
            {
              tech[data]['images']['col1'].map( (t) =><img key={crypto.randomUUID()} className='tech-images' src={`/images/${tech[data]['domain']}/${t}`} loading='lazy'/>)
              
            }
          </div>
          <div className='image-col'>
            {
              tech[data]['images']['col2'].map( (t) =><img key={crypto.randomUUID()} className='tech-images' src={`/images/${tech[data]['domain']}/${t}`} loading='lazy'/>)
            }
          </div>
          <div className='image-col'>
            {
              tech[data]['images']['col3'].map( (t) =><img key={crypto.randomUUID()} className='tech-images' src={`/images/${tech[data]['domain']}/${t}`} loading='lazy'/>)
            }
          </div>
          
            
        </div>
        <style >{`
          .skills-button-div{
            display: ${skills ? 'flex' : 'none'};
          }

          .main-content{
            padding-top: ${skills ? '20px' : '80px'};
            
          }

          

           
            #${clicked}-button{
              background: #1AB357;
              border: none;
            }
            #${clicked}{
              color: #fff;
            } :
            none
          }
        `}</style>
    </div>
  )
}

export default WebContent