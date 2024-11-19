  import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'


  const App = () => {
    return (  
      <div className='bg-[#1F1E24] w-screen h-screen flex'>
     <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/trending' element = {<Trending />}/>
      <Route path='/popular' element = {<Popular/>}/>
      <Route path='/movie' element = {<Movies/>}/>
     </Routes>
     
     </div>
    )
  }

  export default App
