/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Content from './components/Content'

function App() {


  const [page, setPage] = useState('about')

  const [contentPage, setContentPage] = useState(<Content id='content-render' reference={page}/>)

  

  const changePage = (pageName) =>{
    setPage((pageName))
    setContentPage(<Content reference={pageName}/>)
    

    

    // ReactDOM.render(document.getElementById('content-render'))
    
  }
  

  return (
    <>
      <Header nav={changePage}/>
      {contentPage}
    </>
  )
}

export default App
