/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, Component, useEffect } from 'react'

import './css/content.css'
import MainContent from './MainContent'
import WebContent from './Experience'
import PropTypes from 'prop-types';

// Content.propTypes = {
//   reference: PropTypes.string
// }
Content.propTypes = {
  reference : PropTypes.string
}

function Content({reference}) {

  // eslint-disable-next-line no-unused-vars
  // const [content, setContent] = useState(<WebContent clicked='web-skill'/>)
  // const [content, setContent] = useState(<MainContent/>)

  var content = <MainContent />

  const setContent = (c) =>{
    content = c
  }

  

  const changeContent = () =>{

    if(reference == 'experience'){
    
      setContent(<WebContent/>) 
      
    }

    if(reference == 'projects'){
      
      setContent(<WebContent/>) 
    }

    if(reference == 'hobbies'){
      
      setContent(<WebContent/>) 
    }

    if(reference == 'about'){
      
      setContent(<MainContent/>) 
      
    }

    if(reference == 'contact'){
      
      setContent(<WebContent/>) 
    }
  }

  changeContent()

  





  

  // const [skills, setSkills] = useState(true)

  

  // const displaySkills = () =>{
  //   setSkills(!skills)
  // }

  
  

  

  return (
    <div className='content-box'>
        <div className='main-content'>
          
          
            {content}
          
          
          
        </div>
        
      </div>
  )
}

export default Content